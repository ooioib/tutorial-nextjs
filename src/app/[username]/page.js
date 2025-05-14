"use client";

import AppHeader from "@/components/app-header";

export default async function UserIndexPage({ params }) {
  const { username } = await params;

  return (
    <>
      <AppHeader target={username} />
      <h1>UserIndexPage - {username} </h1>
    </>
  );
}
