import { z } from "zod";

export const toolSchema = z.object({
  title: z.string({
    required_error: "Title must be a string",
  }),
  description: z.string().optional(),
  path: z
    .string({
      required_error: "Password is required",
    })
    .url(),
});
