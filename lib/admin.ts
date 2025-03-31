import { auth } from "@clerk/nextjs/server";

const allowedIds = ["user_2u32JVwKUAUe8VTFnSEvxGnMftU"];

export const isAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  return allowedIds.indexOf(userId) !== -1;
};