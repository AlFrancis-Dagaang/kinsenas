"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/client";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-xl border bg-surface p-8 text-center">
        <Image src="/icon-192.png" alt="" width={64} height={64} priority className="mx-auto mb-5 rounded-xl" />
        <h1 className="font-serif text-2xl">Keep tabs on</h1>
        <p className="mt-2 mb-6 text-muted-foreground">Track your money across every account.</p>
        <Button className="w-full" onClick={() => authClient.signIn.social({ provider: "google", callbackURL: "/" })}>
          Continue with Google
        </Button>
      </div>
    </main>
  );
}
