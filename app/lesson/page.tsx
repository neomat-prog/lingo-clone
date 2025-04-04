import { redirect } from "next/navigation";
import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { Quiz } from "./quiz";

const LessonPage = async () => {
  const [lesson, userProgress, userSubscription] = await Promise.all([
    getLesson(),
    getUserProgress(),
    getUserSubscription(),
  ]);

  if (!lesson || !userProgress) redirect("/learn");

  const completedChallenges = lesson.challenges.filter(
    (challenge) => challenge.completed
  ).length;

  const initialPercentage =
    lesson.challenges.length > 0
      ? (completedChallenges / lesson.challenges.length) * 100
      : 0;

  return (
    <Quiz
      initialLessonId={lesson.id.toString()}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts || 0}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription || undefined}
    />
  );
};

export default LessonPage;
