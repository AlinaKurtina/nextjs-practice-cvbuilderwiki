"use client";

import FlexWrapper from "@/components/ui/common/FlexWrapper";
import InputField from "./components/InputField";
import { FieldDescription, FieldLegend, FieldSet } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

function SignUp() {
  return (
    <FlexWrapper className="items-center justify-center mt-[25dvh] flex-col min-w-full">
      <FieldSet className="w-full items-center">
        <FieldLegend className="text-center text-[34px]!">
          Sign up now
        </FieldLegend>
        <FieldDescription className="text-center text-[16px]!">
          Welcome! Sign up to continue
        </FieldDescription>
        <InputField placeholder="Email" type="email" />
        <InputField placeholder="Password" type="password" />
        <InputField placeholder="Confirm Password" type="password" />
        <FlexWrapper className="flex-col items-center gap-3">
          <Button className="rounded-full p-5 w-40 text-xs bg-button-primary">
            CREATE ACCOUNT
          </Button>
          <Button className="text-xs p-0" variant="ghost">
            I HAVE AN ACCOUNT
          </Button>
        </FlexWrapper>
      </FieldSet>
    </FlexWrapper>
  );
}

export default SignUp;
