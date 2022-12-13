"use client";
import { useEffect } from "react";

export default function AboutError({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <p>Somthin&apos; &apos;sploded</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </>
  );
}
