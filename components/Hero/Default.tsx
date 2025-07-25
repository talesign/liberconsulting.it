export default function HeroDefault({ Head, Desc }: any) {
  return (
    <>
      <h1 className="text-4xl pb-4">{Head}</h1>
      <p className="text-xl">{Desc}</p>
    </>
  );
}
