import { ModeToggle } from "@/components/ui/dark-mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getSession } from "@/lib/session";
import AvatarButton from "./avatar-button";

export default function Navbar() {
  //const authenticated = false;
  const authenticated = getSession();

  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="">
        <Link href="/">SATOOV LOGO</Link>
      </div>
      <div className="flex justifiy-end gap-x-2">
        {!authenticated ? (
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
        ) : null}
        <div className="flex justify-end gap-x-4">
          {authenticated && <AvatarButton></AvatarButton>}
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
