// next
import Image from "next/image";
import Link from "next/link";

export default function ListXrt({ List }: any) {
  return (
    
    <>
      {List.map((Xrt: any) => (
        <article className="border border-g1100 rounded-lg w-full">
          <Link href={"/extra/" + Xrt.Slug} className="flex flex-col p-8">
            <div className="flex gap-2 items-center text-xs mb-4">
              {Xrt.Evidenza == true && (
                <div className=" uppercase bg-g600 px-2 py-0.5 rounded-full text-black">
                  In evidenza
                </div>
              )}
              <div className=" uppercase text-g800">{Xrt.created}</div>
            </div>
            <h3 className="text-xl mb-2">{Xrt.Nome}</h3>
            <p className="mb-8 text-sm">{Xrt.ListDescrizione}</p>
            <div className="flex gap-2 text-xs ">
              <div className="p-2 bg-g1100 bg-opacity-50 text-g600 uppercase rounded-sm text-xs">
                {Xrt.expand.Servizio.Nome}
              </div>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}
