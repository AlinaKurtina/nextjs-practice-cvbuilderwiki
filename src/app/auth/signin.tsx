"use client";

import FlexWrapper from "@/components/ui/common/FlexWrapper";
import InputField from "./components/InputField";
import { FieldDescription, FieldLegend, FieldSet } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

function SignIn() {
  return (
    <FlexWrapper className="items-center justify-center mt-[25dvh] flex-col min-w-full">
      <FieldSet className="w-full items-center">
        <FieldLegend className="text-center text-[34px]!">
          Welcome back
        </FieldLegend>
        <FieldDescription className="text-center text-[16px]!">
          Hello again! Sign in to continue
        </FieldDescription>
        <InputField placeholder="Email" type="email" />
        <InputField placeholder="Password" type="password" />
        <FlexWrapper className="flex-col items-center gap-3">
          <Button className="rounded-full p-5 w-40 text-xs bg-button-primary">
            SIGN IN
          </Button>
          <Button className="text-xs p-0" variant="ghost">
            FORGOT PASSWORD
          </Button>
        </FlexWrapper>
      </FieldSet>
    </FlexWrapper>
  );
}

export default SignIn;
