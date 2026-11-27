"use client";

import { useState } from "react";
import FlexWrapper from "@/components/ui/common/FlexWrapper";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "./signin";
import SignUp from "./signup";

function AuthPage() {
  const [tabValue, setTabValue] = useState("signIn");

  return (
    <FlexWrapper className="flex-col">
      <Tabs
        className="items-center"
        value={tabValue}
        onValueChange={setTabValue}
      >
        <TabsList variant="line">
          <TabsTrigger value="signIn">SIGN IN</TabsTrigger>
          <TabsTrigger value="signUp">SIGN UP</TabsTrigger>
        </TabsList>
      </Tabs>
      {tabValue === "signIn" ? <SignIn /> : <SignUp />}
    </FlexWrapper>
  );
}

export default AuthPage;
