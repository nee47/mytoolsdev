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
import { useState } from "react";

export default function ItemTool(props) {
  const [show, setShow] = useState(false);

  return (
    <Card className="min-w-[260px] max-w-md">
      <CardHeader>
        <CardTitle>{props.title || "Card Title"}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div>
          <div className=" cursor-pointer">Description</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
            culpa porro quibusdam dolore dolores, dolorem mollitia officiis
            iusto cum excepturi distinctio. Ullam eaque eius sapiente pariatur!
            In laudantium iure minus.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <a
          href="https://www.youtube.com"
          target="_blank"
          className={buttonVariants({ variant: "default", size: "sm" })}
        >
          Visit
        </a>
      </CardFooter>
    </Card>
  );
}
