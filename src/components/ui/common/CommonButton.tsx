import type { PropsWithChildren } from "react";
import { Button } from "../button";

function CommonButton({ children }: PropsWithChildren) {
  return (
    <Button className="rounded-full p-5 w-40 text-xs bg-button-primary">
      {children}
    </Button>
  );
}

export default CommonButton;
