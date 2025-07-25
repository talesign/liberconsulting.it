import Link from "next/link";

export default function HeadingCTA({
  titolo,
  descrizione,
  labelCTA,
  pathCTA,
}: any) {
  return (
    <div>
      <h2 className="mb-8">{titolo}</h2>
      <p className="mb-4">{descrizione}</p>
      <Link
        className="bg-white text-black text-sm px-4 py-2 rounded-md"
        href={pathCTA}
      >
        {labelCTA}
      </Link>
    </div>
  );
}
