import { redirect } from "next/navigation";
import { getCourseSidebarData } from "@/app/data/course/get-sidebar-data";

interface iAppProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseIntro({ params }: iAppProps) {
  const { slug } = await params;

  const course = await getCourseSidebarData(slug);

  const firstLesson = course.course.chapter[0]?.lessons[0];

  if (firstLesson) {
    redirect(`/dashboard/${slug}/${firstLesson.id}`);
  }

  return (
    <div className="flex items-center justify-center h-full text-center">
      <h2 className="text-2xl font-bold mb-2">No lessons available</h2>
      <p className="text-muted-foreground">This course doesn't have any lesson yet!</p>
    </div>
  );
}
