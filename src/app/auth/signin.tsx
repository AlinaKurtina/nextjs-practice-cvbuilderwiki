"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CommonButton from "@/components/ui/common/CommonButton";
import FlexWrapper from "@/components/ui/common/FlexWrapper";
import { FieldDescription, FieldLegend, FieldSet } from "@/components/ui/field";
import InputField from "./components/InputField";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FlexWrapper className="items-center justify-center mt-[25dvh] flex-col min-w-full">
      <FieldSet className="w-full items-center">
        <FieldLegend className="text-center text-[34px]!">
          Welcome back
        </FieldLegend>
        <FieldDescription className="text-center text-[16px]!">
          Hello again! Sign in to continue
        </FieldDescription>
        <InputField
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <InputField
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <FlexWrapper className="flex-col items-center gap-3">
          <CommonButton>SIGN IN</CommonButton>
          <Button className="text-xs p-0" variant="ghost">
            FORGOT PASSWORD
          </Button>
        </FlexWrapper>
      </FieldSet>
    </FlexWrapper>
  );
}

export default SignIn;
