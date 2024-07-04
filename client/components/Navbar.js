import { ModeToggle } from "@/components/ui/dark-mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="">SATOOV LOGO</div>
      <div className="flex justify-end gap-x-2">
        <div className="flex gap-x-2">
          <Link href="login" className={buttonVariants({ variant: "" })}>
            Login
          </Link>
          <Link
            href="register"
            className={buttonVariants({ variant: "outline" })}
            variant="outline"
          >
            Register
          </Link>
        </div>

        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
