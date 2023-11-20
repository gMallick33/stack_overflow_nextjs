import { SearchParamsProps } from "@/types";
import React from "react";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const AnswersTab = async ({ searchProps, userId, clerkId }: Props) => {
  return <div>AnswersTab</div>;
};

export default AnswersTab;
