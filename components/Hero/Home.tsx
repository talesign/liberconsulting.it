import Image from "next/image";
import Link from "next/link";

export default function HeroHome({
  Head,
  Desc,
  ImageUrl,
  Butt1Url,
  Butt1Lab,
  Butt2Url,
  Butt2Lab,
}: any) {
  return (
    <>
      <header className="grid xl:grid-cols-2 gap-32 p-6 max-w-screen-xl mx-auto items-center ">
        <div className="flex flex-col ">
          <h1 className="text-center xl:text-left">{Head}</h1>
          <p className="text-center xl:text-left pb-8">{Desc}</p>
          <div className="flex gap-4 justify-center xl:justify-start">
            <Link href={Butt1Url} className="button-primary">
              {Butt1Lab}
            </Link>
            <Link href={Butt2Url} className="button-secondary">
              {Butt2Lab}
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
