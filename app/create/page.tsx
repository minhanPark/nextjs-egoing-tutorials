"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <h1>Create</h1>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, body }),
          };
          fetch("http://localhost:3001/topics", options)
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              const lastId = result.id;
              router.refresh();
              router.push(`/read/${lastId}`);
            });
        }}
      >
        <hr />
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <input type="text" name="body" placeholder="body" />
        </p>
        <p>
          <input type="submit" value="create" />
        </p>
        <hr />
      </form>
    </>
  );
}
