"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const formSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password  must contain at least 6 character(s)" }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values) {
    const { email, password } = values;
    const backendUrl = `http://localhost:8080/api/login`;

    const toSend = {
      email,
      password,
    };

    try {
      const res = await fetch(backendUrl, {
        next: {
          revalidate: 0,
        },
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(toSend),
      });
      const data = await res.json();
      console.log(data);
      if (!data.error) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }

    console.log(email, password);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@outlook.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
