// next
import Image from "next/image";
import Link from "next/link";

export default function ListDpt({ List }: any) {
  return (
    <>
      {List.map((Dpt: any) => (
        <article
          key={Dpt.Nome}
          className="border border-g1100 rounded-lg w-full"
        >
          <Link href={"/dipartimenti/" + Dpt.Slug} className="p-8 block">
            <Image
              src={Dpt.ListingImage}
              height={50}
              width={50}
              alt="Icon"
              className="mb-1"
            />
            <h3 id={Dpt.Nome} className="text-lg mb-2">
              Liber {Dpt.Nome}
            </h3>
            <p className="text-sm">{Dpt.ListingSubtitle}</p>
          </Link>
        </article>
      ))}
    </>
  );
}
