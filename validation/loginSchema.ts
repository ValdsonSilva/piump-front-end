import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "E-mail is required")
    .email("Invalid e-mail")
    .transform((v) => v.toLowerCase()),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(128, "Too long password"),
});

export type LoginForm = z.infer<typeof loginSchema>;
