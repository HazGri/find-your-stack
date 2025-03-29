"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";


export default function DashboardPage() {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user? <button onClick={()=>{signOut()}}>Logout</button> : <Link href={"/"}>SignIn</Link>}
    </div>
  );
}
