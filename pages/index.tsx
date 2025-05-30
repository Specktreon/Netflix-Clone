import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";

import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="inline-block mt-5 border-solid border-4 border-red-500 p-4 text-green-500 text-2xl">
        Netflix Clone 1600
      </h1>
      <p className="text-white">Logged in as : {user?.email}</p>
      <button className="h-18 w-full bg-white" onClick={() => signOut()}>
        Log out
      </button>
    </>
  );
}
