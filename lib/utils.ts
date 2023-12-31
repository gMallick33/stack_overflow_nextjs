import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";
// import { BADGE_CRITERIA } from "@/constants/constants";
import { BadgeCounts } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - createdAt.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
};

export const formatBigNumber = (number: number): string => {
  if (Math.abs(number) >= 1e9) {
    return (number / 1e9).toFixed(1) + "B";
  } else if (Math.abs(number) >= 1e6) {
    return (number / 1e6).toFixed(1) + "M";
  } else if (Math.abs(number) >= 1e3) {
    return (number / 1e3).toFixed(1) + "k";
  } else {
    return number.toString();
  }
};

export function getJoinedDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  const formattedDate: string = new Intl.DateTimeFormat(
    "en-US",
    options
  ).format(date);
  return formattedDate;
}

interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export function removeKeysFromQuery({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(params);
  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

// interface BadgeParam {
//   criteria: {
//     type: keyof typeof BADGE_CRITERIA;
//     count: number;
//   }[];
// }
export const assignBadges = (params: any) => {
  const badgeCount: BadgeCounts = {
    GOLD: 0,
    SILVER: 0,
    BRONZE: 0,
  };

  const { criteria } = params;
  criteria.forEach((item: any) => {
    const { type, count } = item;
    let badgeLevels: any;
    switch (type) {
      case "QUESTION_COUNT": {
        badgeLevels = {
          BRONZE: 10,
          SILVER: 50,
          GOLD: 100,
        };
        break;
      }

      case "ANSWER_COUNT": {
        badgeLevels = {
          BRONZE: 10,
          SILVER: 50,
          GOLD: 100,
        };
        break;
      }

      case "QUESTION_UPVOTES": {
        badgeLevels = {
          BRONZE: 10,
          SILVER: 50,
          GOLD: 100,
        };
        break;
      }

      case "ANSWER_UPVOTES": {
        badgeLevels = {
          BRONZE: 10,
          SILVER: 50,
          GOLD: 100,
        };
        break;
      }

      case "TOTAL_VIEWS": {
        badgeLevels = {
          BRONZE: 1000,
          SILVER: 10000,
          GOLD: 100000,
        };
        break;
      }
    }

    // const badgeLevels: any = BADGE_CRITERIA[type];

    Object.keys(badgeLevels).forEach((level: any) => {
      if (count >= badgeLevels[level]) {
        badgeCount[level as keyof BadgeCounts] += 1;
      }
    });
  });

  return badgeCount;
};
