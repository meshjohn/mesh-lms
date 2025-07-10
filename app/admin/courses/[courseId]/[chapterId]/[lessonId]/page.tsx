import { adminGetLesson } from "@/app/data/admin/admin-get-lesson";
import { LessonForm } from "./_components/LessonForm";

type Params = {
  courseId: string;
  chapterId: string;
  lessonId: string;
};

export default async function LessonIdPage({ params }: { params: Params }) {
  const { courseId, chapterId, lessonId } = params;
  const lesson = await adminGetLesson(lessonId);
  return <LessonForm courseId={courseId} data={lesson} chapterId={chapterId} />;
}