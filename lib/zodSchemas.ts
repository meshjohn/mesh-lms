import { z } from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;

export const courseStatus = ["Draft", "Published", "Archived"] as const;

export const courseCategories = [
  "Development",
  "Business",
  "Finance",
  "It & Software",
  "Office Productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Health & Fitness",
  "Music",
  "Teaching & Academics",
] as const;

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" }),
  description: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
  fileKey: z.coerce.string().min(1, { message: "File is required" }),
  price: z.coerce.number().min(1, { message: "price must be positive number" }),
  duration: z.coerce
    .number()
    .min(1, { message: "Duration must be at least 1 hour" })
    .max(500, { message: "Duration must be at most 500 hours" }),
  level: z.enum(courseLevels, {
    message: "Level is required",
  }),
  category: z.enum(courseCategories, { message: "Category is required" }),
  smallDescription: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(200, { message: "Duration must be at most 200 hours" }),
  slug: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters long" }),
  status: z.enum(courseStatus, {
    message: "Status is required",
  }),
});

export const chapterSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." }),
  courseId: z.string().uuid({ message: "Invalid course Id" }),
});

export const lessonSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." }),
  courseId: z.string().uuid({ message: "Invalid course Id" }),
  chapterId: z.string().uuid({ message: "Invalid chapter Id" }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long." })
    .optional(),
  thumbnailUrl: z.string().optional(),
  VideoUrl: z.string().optional(),
});

export type ChapterSchemaType = z.infer<typeof chapterSchema>;

export type CourseSchemaType = z.infer<typeof courseSchema>;

export type LessonSchemaType = z.infer<typeof lessonSchema>;
