"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendContactMessage } from "@/app/actions/contact";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    const result = await sendContactMessage(data);

    if (!result.success) {
      setStatus("error");
      setErrorMsg(result.error);
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <p className="text-base text-muted-foreground max-w-md">
        Thanks for reaching out — I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      {/* Honeypot: hidden from real users via CSS, bots fill it in anyway. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <Input name="name" placeholder="Your name" required maxLength={100} />
      <Input name="email" type="email" placeholder="Your email" required maxLength={200} />
      <Textarea
        name="message"
        placeholder="What would you like to say?"
        required
        maxLength={5000}
        rows={5}
      />

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" && <Loader2 className="size-4 animate-spin" />}
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-destructive">{errorMsg}</p>
      )}
    </form>
  );
}