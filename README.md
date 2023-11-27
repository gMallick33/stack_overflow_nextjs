# Welcome to DevOverflow

This is a web application for developer community across the globe.
You will be able to do the following jobs -

1. Ask question
2. Upvote / downvote / save question
3. Answer the question.
4. upvote / downvote answers
5. Improve your profile by participating in all the activities.

## Project Setup

- clone the project on your local.
- change the working directory to `dev-overflow` and execute `npm install`.
- create `.env` file in the root directory of every micro-service and add the following environment variables
  - NEXT*PUBLIC_CLERK_PUBLISHABLE_KEY=\_FROM CLERK WEBSITE*
  - CLERK*SECRET_KEY=\_FROM CLERK WEBSITE*
  - NEXT*PUBLIC_TINY_EDITOR_API_KEY=\_TINE EDITOR API KEY*
  - MONGODB*URL= \_MONGODB URL FOR SETTING UP THE DATABASE*
  - NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  - NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  - NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
  - NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
  - NEXT*CLERK_WEBHOOK_SECRET=\_KEY GENERATED FROM CLERK*
  - NEXT_PUBLIC_SERVER_URL=http://localhost:3000
  - OPENAI*API_KEY= \_OPENAI_API_KEY*

### References to get the environment variables -

- Get `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` from `https://dashboard.clerk.com/` after adding application (which is just checking the boxes on google authentication and username)
- visit `https://www.tiny.cloud/` and get `NEXT_PUBLIC_TINY_EDITOR_API_KEY` after signing up.
- visit `https://www.mongodb.com/` sign up, make a database and get `MONGODB_URL` for the database
- For `NEXT_CLERK_WEBHOOK_SECRET` follow the docs at `https://clerk.com/docs/integrations/webhooks`
- visit `openai.com` signup and get open ai api key and assign it to `OPENAI_API_KEY`

## Run Project

- Go to root directory and execute `npm run dev` which should run the app on `http://localhost:3000`

## Live website -

- `https://stack-overflow-nextjs-sigma.vercel.app/`

### TODO -

- jobs page is work in progress
