import Link from "next/link";

export default function Breadcrumbs({ url, label, page }: any) {
  return (
    <>
      <nav className="text-xs flex gap-2 ">
        <span className="font-bold">Sei in: </span>
        <Link href="/" className="font-bold">
          Home
        </Link>
        <span>/</span>
        <Link href={"/" + url} className="font-bold">
          {label}
        </Link>
        <span>/</span>
        <span>{page}</span>
      </nav>
    </>
  );
}
