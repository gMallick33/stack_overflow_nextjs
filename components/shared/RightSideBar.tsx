import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const topQuestions = [
  { _id: 1, title: "how do I use express as a custom server in nextjs" },
  { _id: 2, title: "is nextjs the next big revolution in fullstack" },
  { _id: 3, title: "why is facebook not hiring in india" },
  { _id: 4, title: "how is tesla re-inventing the wheel" },
  {
    _id: 5,
    title: "google is offering me $350k, but I want $500k. How to tell them",
  },
];

const popularTags = [
  { _id: 1, name: "javascript", totalQuestions: 18 },
  { _id: 2, name: "redux", totalQuestions: 7 },
  { _id: 3, name: "nextjs", totalQuestions: 5 },
  { _id: 4, name: "react", totalQuestions: 9 },
  { _id: 5, name: "app router", totalQuestions: 12 },
];

const RightSideBar = () => {
  return (
    <section
      className="background-light900_dark200 light-border
  custom-scrollbar sticky right-0 top-0 flex h-screen
  w-[350px] flex-col overflow-y-auto border-l p-6 pt-28
  shadow-light-300 dark:shadow-none max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              href={`questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center
                justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
