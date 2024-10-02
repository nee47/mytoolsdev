"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { buttonVariants } from "./ui/button";
//import { useState } from "react";

export default function ItemTool({ props }) {
  //const [show, setShow] = useState(false);

  return (
    <Card className="relative before:rounded-md before:absolute before:size-full before:bg-transparent before:shadow-lg before:shadow-primary before:animate-pulse before:z-0">
      <CardHeader>
        <CardTitle className=" ">{props.title || "Card Title"}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>{props.description}</p>
      </CardContent>
      <CardFooter>
        <a
          href={props.url}
          target="_blank"
          className={
            buttonVariants({ variant: "default", size: "sm" }) + " z-20"
          }
          rel="noreferrer"
        >
          Visit
        </a>
      </CardFooter>
    </Card>
  );
}
