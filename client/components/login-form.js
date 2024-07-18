"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ButtonLoading } from "./ui/button-loading";

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
import { useState } from "react";

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

  const [loading, setLoading] = useState(false);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function onSubmit(values) {
    setLoading(true);
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

      await sleep(1000);

      setLoading(false);
      console.log(data);
      if (!data.error) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
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

        {loading ? (
          <ButtonLoading title="Loading.." className="w-32" />
        ) : (
          <Button type="submit" className="w-32">
            Log in
          </Button>
        )}
      </form>
    </Form>
  );
}
