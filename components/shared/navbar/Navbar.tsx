import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav
      className="flex-between background-light900_dark200
    fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none
    sm:px-12"
    >
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
          width={35}
          height={35}
          alt="DevOverflow"
        />
        <p
          className="h2-bold font-spaceGrotesk text-dark-100
        dark:text-light-900 max-sm:hidden"
        >
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      GlobalSearch
      <div>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          ></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
