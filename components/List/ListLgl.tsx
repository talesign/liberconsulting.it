import Link from "next/link";

export default function ListLgl({ List }: any) {
  return (
    <>
      {List.map((Item: any) => (
        <Link
          className="p-4 border border-g600 rounded-md"
          href={"/legal/" + Item.Slug}
          key={Item.Slug}
        >
          {Item.Nome}
        </Link>
      ))}
    </>
  );
}
