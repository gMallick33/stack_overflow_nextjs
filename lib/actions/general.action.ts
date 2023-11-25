"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import { SearchParams } from "./shared.types";
import User from "@/database/user.model";
import Answer from "@/database/answer.model";
import Tag from "@/database/tag.model";

const SearchableTypes = ["question", "answer", "user", "tag"];

export async function globalSearch(params: SearchParams) {
  try {
    await connectToDatabase();

    const { query, type } = params;
    const regexQuery = { $regex: query, $options: "i" };
    let results = [];

    const modelsAndTypes = [
      { model: Question, searachField: "title", type: "question" },
      { model: User, searachField: "name", type: "user" },
      { model: Answer, searachField: "content", type: "answer" },
      { model: Tag, searachField: "name", type: "tag" },
    ];

    const typeLower = type?.toLowerCase();

    if (!typeLower || !SearchableTypes.includes(typeLower)) {
      // search across everything:

      for (const { model, searachField, type } of modelsAndTypes) {
        const queryResults = await model
          .find({ [searachField]: regexQuery })
          .limit(2);

        results.push(
          ...queryResults.map((item) => ({
            title:
              type === "answer"
                ? `Answers containing ${query}`
                : item[searachField],
            type,
            id:
              type === "user"
                ? item.clerkId
                : type === "answer"
                ? item.Question
                : item._id,
          }))
        );
      }
    } else {
      // search in the specified model type:

      const modelInfo = modelsAndTypes.find((item) => item.type === type);
      if (!modelInfo) {
        throw new Error("Invalid Search type");
      }

      const queryResults = await modelInfo.model
        .find({ [modelInfo.searachField]: regexQuery })
        .limit(8);

      results = queryResults.map((item) => ({
        title:
          type === "answer"
            ? `Answers containing ${query}`
            : item[modelInfo.searachField],
        type,
        id:
          type === "user"
            ? item.clerkId
            : type === "answer"
            ? item.Question
            : item._id,
      }));
    }
    return JSON.stringify(results);
  } catch (error) {
    console.log("Error fetching global result", error);
    throw error;
  }
}
