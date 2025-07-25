// nextjs
import Image from "next/image";
import Link from "next/link";

export default function ListPrt({ List }: any) {
  return (
    <>
      {List.map((Prt: any) => (
        <article className="border border-g1100 rounded-lg flex justify-center">
          <Link href={"/partner/" + Prt.Slug}>
            <Image
              className=" py-16 px-28 w-full max-w-sm"
              src={Prt.LogoListing}
              alt={Prt.Nome}
              height={100}
              width={100}
            />
          </Link>
        </article>
      ))}
    </>
  );
}
