import { z } from "zod";

export const toolSchema = z.object({
  title: z
    .string({
      required_error: "Title must be a string",
    })
    .max(20, {
      message: "Title can't exceed 20 characters",
    }),
  description: z.string().optional(),
  url: z
    .string({
      required_error: "Link is required",
    })
    .url(),
});
