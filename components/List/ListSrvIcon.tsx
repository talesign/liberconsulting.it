// nextjs
import Image from "next/image";
import Link from "next/link";

export default function ListSrvIcon({ List }: any) {
  return (
    <>
      {List.map((Item: any) => (
        <div className="py-8" key={Item.Nome}>
          <Image
            src={Item.ListIcon}
            className="mb-4 w-10"
            width={50}
            height={50}
            alt="Home Image"
          />
          <h4 className="mb-2 text-xl">{Item.Nome}</h4>
          <p className="mb-6">{Item.ListDescription}</p>
          <Link href={"/servizi/" + Item.Slug} className="button-secondary-sm">
            Scopri {Item.Nome}
          </Link>
        </div>
      ))}
    </>
  );
}
