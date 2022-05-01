import Router from "next/router";

import HomePage from "../components/HomePages/homepage";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  const loading = status === "loading";

  if (loading) return null;
  return (
    <>
      <HomePage />

      {session ? (
        <p>
          <span>Signed in as {session?.user?.email}</span>
          <button onClick={signOut}>Sign out</button>
        </p>
      ) : (
        <>
          <button onClick={signIn}>Sign in</button>
        </>
      )}
    </>
  );
}
