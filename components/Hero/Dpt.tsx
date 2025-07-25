import Image from "next/image";
import Link from "next/link";

export default function HeroDpt({ Head, Desc, ImageUrl }: any) {
  return (
    <>
      <header className="grid xl:grid-cols-2 gap-16 max-w-screen-2xl mx-auto items-center ">
        <div className="flex flex-col ">
          <h1 className="text-center xl:text-left">{Head}</h1>
          <p className="text-center xl:text-left pb-8">{Desc}</p>
          <div className="flex gap-4 justify-center xl:justify-start">
            <Link href={"#"} className="button-primary">
              Contattaci
            </Link>
            <Link href={"#"} className="button-secondary">
              Contattaci
            </Link>
          </div>
        </div>
        <Image
          className="object-contain w-full"
          width={812}
          height={978}
          alt="Home Image"
          src={ImageUrl}
        />
      </header>
    </>
  );
}
