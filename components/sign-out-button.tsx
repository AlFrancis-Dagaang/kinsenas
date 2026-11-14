"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/client";

export function SignOutButton() {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      className="text-muted-foreground max-md:size-9 max-md:px-0 md:justify-start"
      aria-label="Sign out"
      onClick={async () => {
        await authClient.signOut();
        router.replace("/auth/sign-in");
        router.refresh(); // drops cached signed-in pages
      }}
    >
      <LogOut />
      <span className="max-md:hidden">Sign out</span>
    </Button>
  );
}
