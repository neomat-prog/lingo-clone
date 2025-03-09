"use server";

import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();
  if (!userId || !user) {
    throw new Error("Unauthorized");
  }

  const course = await getCourseById(courseId);
  if (!course) {
    throw new Error("Course not found");
  }

  const existingUserProgress = await getUserProgress();
  try {
    if (existingUserProgress) {
      await db.update(userProgress).set({
        activeCourseId: courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/mascot.svg",
      });
    } else {
      await db.insert(userProgress).values({
        userId,
        activeCourseId: courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/mascot.svg",
      });
    }
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }

  revalidatePath("/courses");
  revalidatePath("/learn");

  return { success: true };
};