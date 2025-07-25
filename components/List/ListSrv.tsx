// nextjs
import Image from "next/image";
import Link from "next/link";

export default function ListSrv({ List }: any) {
  return (
    <>
      {List.map((Srv: any) => (
        <article className=" border border-g1100 rounded-lg">
          <Link href={"/servizi/" + Srv.Slug} className="h-full grid">
            <div className="absolute mt-4 ml-4">
              <Image
                className="mb-4 w-10"
                width={50}
                height={50}
                alt={Srv.Nome}
                src={Srv.ListIcon}
              />
            </div>
            <div className="h-48">
              <Image
                className="w-full rounded-lg h-full object-cover"
                src={Srv.ImmagineEvidenza}
                height={960}
                width={640}
                alt={Srv.ListDescription}
              ></Image>
            </div>

            <div className="p-8">
              <h3 className="text-xl mb-2">{Srv.Nome}</h3>
              <p className="text-sm mb-8">{Srv.ListDescription}</p>
            </div>
            <div className="justify-self-end p-8">
              {Srv.expand.Partner.Nome}
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}
