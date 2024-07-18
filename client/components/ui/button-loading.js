import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonLoading(props) {
  return (
    <Button disabled {...props}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {props.title}
    </Button>
  );
}
