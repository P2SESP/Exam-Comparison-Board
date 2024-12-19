"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfilePage() {
  const { user } = useUser();
  return (
    <>
      {user && (
        <div className="flex flex-col">
          <h1>Username: {user.name!}</h1>
          <h2>Email: {user.email!}</h2>
        </div>
      )}
    </>
  );
}
