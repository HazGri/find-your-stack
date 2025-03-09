"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="justify-center items-center gap-4 px-2 h-full">
      <p className="text-center text-4xl mt-4">Find your stack</p>
      <div className="flex max-w-4xl mx-auto mt-28 gap-4">
        <Input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describre your project..."
        />
        <Button type="submit">Send</Button>
      </div>
    </div>
  );
}
