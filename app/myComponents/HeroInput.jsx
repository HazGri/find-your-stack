"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function HeroInput({onChange,onSubmit}) {
  const placeholders = [
    "I want to create a website to connect dog owners in my area.",
    "I want to build a platform for fitness enthusiasts to track their workouts.",
    "I want to create a food recipe generator based on ingredients I have at home.",
    "I want to build an app that helps people find local volunteer opportunities.",
    "I want to develop a platform for connecting pet sitters with pet owners.",
    "I want to create an online marketplace for handmade crafts.",
    "I want to build an app that helps people learn new languages through games.",
    "I want to develop a website for booking local home cleaning services.",
    "I want to create a platform for sharing educational resources with teachers.",
    "I want to make a website that helps people plan their dream vacations."
  ];

  return (
    (<div className="h-[30rem] flex flex-col justify-center  items-center px-4">
      <h2
        className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Find the best stack for your project
      </h2>
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={onChange} onSubmit={onSubmit} />
    </div>)
  );
}
