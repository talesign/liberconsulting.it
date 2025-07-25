import Link from "next/link";

export default function FooterColumn({ FooterLinks, FooterTitle }: any) {
  return (
    <>
      <h6 className="font-bold text-g100 text-sm py-2 block">{FooterTitle}</h6>
      {FooterLinks.map((FooterLink: any) => (
        <Link
          href={`${FooterLink.url}`}
          key={FooterLink.name}
          className="py-1 block hover:text-g100 text-sm"
        >
          {FooterLink.name}
        </Link>
      ))}
    </>
  );
}
