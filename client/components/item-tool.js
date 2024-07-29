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
    <Card className="  absolute top-0  ">
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-500 bg-[length:100%_3px] bg-no-repeat bg-bottom leading-9">
          {props.title || "Card Title"}
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="">
          <p>{props.description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <a
          href={props.path}
          target="_blank"
          className={buttonVariants({ variant: "default", size: "sm" })}
          rel="noreferrer"
        >
          Visit
        </a>
      </CardFooter>
    </Card>
  );
}
