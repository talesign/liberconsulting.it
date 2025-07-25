export default function HeadingDpt({
  Number,
  Title,
  Subtitle,
  Paragraph,
}: any) {
  return (
    <div className="xl:max-w-3xl flex flex-col items-center text-center">
      {Title == "Ambiente" && (
        <>
          <div>
            <div className="bg-ambGr rounded-full w-10 h-10 flex items-center justify-center mb-4">
              <div className=" text-black font-bold">{Number}</div>
            </div>
          </div>
          <h2 className="text-ambGr mb-4 text-2xl font-bold">{Title}</h2>
        </>
      )}
      {Title == "Comunicazione" && (
        <>
          <div className="bg-comGr rounded-full w-10 h-10 flex items-center justify-center mb-4">
            <div className=" text-black font-bold">{Number}</div>
          </div>
          <h2 className="text-comGr mb-4 text-2xl font-bold">{Title}</h2>
        </>
      )}
      {Title == "Immobiliare" && (
        <>
          <div className="bg-immGr rounded-full w-10 h-10 grid items-center justify-center mb-4">
            <div className=" text-black font-bold">{Number}</div>
          </div>

          <h2 className="text-immGr mb-4 text-2xl font-bold">{Title}</h2>
        </>
      )}

      <h3 className="text-4xl mb-6 xl:text-5xl">{Subtitle}</h3>
      <p className="text-xl mb-4">{Paragraph}</p>
    </div>
  );
}
