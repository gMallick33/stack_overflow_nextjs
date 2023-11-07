import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/question.action";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "how to use express?",
    tags: [
      { _id: "1", name: "express" },
      { _id: "2", name: "js" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "john-doe-picture-url",
    },
    upvotes: 1000040,
    views: 1002121441,
    answers: [],
    createdAt: new Date("2022-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "how to use app router?",
    tags: [
      { _id: "1", name: "express" },
      { _id: "2", name: "js" },
    ],
    author: {
      _id: "2",
      name: "Rocky Bhai",
      picture: "rocky-bhai-picture-url",
    },
    upvotes: 182212,
    views: 23050584,
    answers: [],
    createdAt: new Date("2023-11-01T12:00:00.000Z"),
  },
  {
    _id: "3",
    title: "is next js any good?",
    tags: [
      { _id: "1", name: "nextjs" },
      { _id: "2", name: "js" },
    ],
    author: {
      _id: "3",
      name: "Rambo Rao",
      picture: "rambo-rao-picture-url",
    },
    upvotes: 1200,
    views: 788927,
    answers: [],
    createdAt: new Date("2023-08-01T12:00:00.000Z"),
  },
];

export default async function Home() {
  const result = await getQuestions({});
  // console.log(result.questions);

  return (
    <div>
      <div
        className="flex w-full flex-col-reverse 
    justify-between gap-4 sm:flex-row sm:items-center"
      >
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/7/70/Search_icon.svg"
          placeholder="Search for question"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6"></div>

      {result.questions.length > 0 ? (
        result.questions.map((question) => (
          <QuestionCard
            key={question._id}
            _id={question._id}
            title={question.title}
            tags={question.tags}
            author={question.author}
            upvotes={question.upvotes}
            views={question.views}
            answers={question.answers}
            createdAt={question.createdAt}
          />
        ))
      ) : (
        <NoResult
          title="There is no question to show"
          description="Be the first to break the silence? Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved!"
          link="/ask-question"
          linkTitle="Ask a Question"
        />
      )}
    </div>
  );
}
