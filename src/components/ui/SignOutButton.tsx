"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/Button";
import { signOut } from "next-auth/react";
import { toast } from "./toast";

interface SignOutButtonProps {

}

export const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function signOutUser() {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later",
        type: "error"
      })
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button onClick={signOutUser} isLoading={isLoading}>
      Sign out
    </Button>
  );
};
