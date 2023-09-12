interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const res = await fetch(`http://localhost:3001/topics/${params.id}`);
  const topic = await res.json();
  return (
    <>
      <br />
      <hr />
      <h2>{topic.title}</h2>
      <p>parameters: {params.id}</p>
      <p>{topic.body}</p>
    </>
  );
}
