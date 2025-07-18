import { ReactNode } from "react";
import { CourseSidebar } from "../_components/CourseSidebar";
import { getCourseSidebarData } from "@/app/data/course/get-sidebar-data";

interface iAppProps {
  params: { slug: string };
  children: ReactNode;
}

export default async function CourseLayout({ params, children }: iAppProps) {
  const { slug } = params;
  const course = await getCourseSidebarData(slug);
  return (
    <div className="flex flex-1">
      {/* sidebar - 30% */}
      <div className="w-[140px] sm:w-40 md:w-60 lg:w-80 border-r border-border ">
        <CourseSidebar course={course.course} />
      </div>
      {/* main content - 70% */}
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
