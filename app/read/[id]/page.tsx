interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <>
      <h2>read</h2>
      <p>parameters: {params.id}</p>
    </>
  );
}
