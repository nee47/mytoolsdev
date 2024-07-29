import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function CategoryBar(props) {
  const path = props.path || "/";

  const navs = [
    {
      label: "Graphic Design",
      path: "/",
    },
    {
      label: "Editing",
      path: "/",
    },
    {
      label: "Downloaders",
      path: "/",
    },
    {
      label: "Games",
      path: "/",
    },
    {
      label: "AI",
      path: "/",
    },
  ];

  return (
    <div className="flex gap-x-2">
      {navs.map((n) => (
        <Link
          key={n.label}
          href={n.path}
          className={
            buttonVariants({ variant: "outline", size: "sm" }) + " text-xs "
          }
        >
          {n.label}
        </Link>
      ))}
    </div>
  );
}
