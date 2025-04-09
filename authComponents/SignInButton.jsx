"use client";
import { signIn } from "next-auth/react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandGoogle } from "@tabler/icons-react";

const SignInButton = ({ provider, name }) => {
  const handleSignIn = async () => {
    try {
      await signIn(provider, { redirectTo: "/dashboard" });
    } catch (error) {
      console.error(`Erreur lors de la connexion ${provider}`, error);
    }
  };
  return (
    <button
      onClick={handleSignIn}
      className=" relative group/btn flex space-x-2 items-center justify-st art px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
    >
      {
        (name == "GitHub" ? (
          <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        ) : (
          <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        ))
      }

      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        {name}
      </span>
      <BottomGradient />
    </button>
  );
};
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default SignInButton;
