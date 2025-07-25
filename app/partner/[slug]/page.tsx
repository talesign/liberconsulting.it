// Components
import ListSrv from "@/components/List/ListSrv";
import Breadcrumbs from "@/components/Utility/breadcrumbs";

// NextJs
import Image from "next/image";
import { redirect } from "next/navigation";

// Lib
import getPrt from "@/lib/getSingle/getPrt";
import getListSrvPrt from "@/lib/getFilterList/getListSrvPrt";
import Link from "next/link";
import HeadingDefault from "@/components/Heading/Default";
import { Partners } from "@/lib/content/partners";

export default async function PrtPage({ params }: any) {
  // if (params.slug === "liber") {
  //   redirect("/chi-siamo");
  // }
  
  const awaitSinglePrtData: Promise<any> = getPrt(params.slug);
  const awaitListSrvPrtData: Promise<any> = getListSrvPrt(params.slug);

  const [SinglePrtData, ListSrvPrtData] = await Promise.all([
    awaitSinglePrtData,
    awaitListSrvPrtData,
  ]);

  return (
    <>
      <section className="container">
        <Breadcrumbs url="partner" label="Partner" page={SinglePrtData.Nome} />
      </section>

      <section className="container">
        <div className="grid xl:grid-cols-2 xl:justify-end items-center gap-4 ">
          <div className="flex gap-4 items-center">
            <Image
              className="rounded-full w-12 h-12"
              src={SinglePrtData.LogoSquare}
              height={100}
              width={100}
              alt="Logo circle"
            />
            <h1 className="text-4xl p-0">{SinglePrtData.Nome}</h1>
          </div>
          <div className="xl:justify-self-end flex gap-4">
            <Link href="#servizi" className="button-secondary">
              Servizi offerti
            </Link>
            <Link href="#contatti" className="button-primary">
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-g1100">
        <div className="py-16 overflow-x-scroll">
          <div className="container flex gap-4">
            {SinglePrtData.Gallery.map((SingleImage: any) => (
              <img
                className="rounded-md"
                src={`/images/partner/${SingleImage}`}
                width={480}
                height={320}
                alt="Galleria immagini"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid xl:grid-cols-[2fr_1fr] xl:gap-32 gap-4 relative items-start">
          <div>
          {SinglePrtData.Bodycopy && (
            <div
              dangerouslySetInnerHTML={{ __html: SinglePrtData.Bodycopy }}
              className="bodycopy"
            />

          )}
          </div>
          <div className="sticky top-16">
            <h2 className="text-2xl mt-8">Contatti</h2>
            <div className="flex justify-between py-6 border-b border-g900">
              <div className="font-bold text-sm">Sito web</div>
              <Link
                href={"https://" + SinglePrtData.Website}
                className="text-sm"
              >
                {SinglePrtData.Website}
              </Link>
            </div>
            <div className="grid items-start">
              <div className="flex justify-between py-6 border-b border-g900">
                <div className="font-bold text-sm">Referente</div>
                <div className="text-sm">
                  {ListSrvPrtData[0] === undefined ? "Marco Sassi" : ListSrvPrtData[0].expand.Referente.Nome}
                </div>
              </div>
              {/**
              <div className="flex justify-between py-6 border-b border-g900">
                <div className="font-bold text-sm">Telefono</div>
                <Link
                  href={"tel:39" + SinglePrtData.expand.Referente.Numero}
                  className="text-sm"
                >
                  {SinglePrtData.expand.Referente.Numero}
                </Link>
              </div>
              <div className="flex justify-between py-6 ">
                <div className="font-bold text-sm">Email</div>
                <Link
                  href={"mailto:" + SinglePrtData.expand.Referente.Email}
                  className="text-sm"
                >
                  {SinglePrtData.expand.Referente.Email}
                </Link>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>

      <section id="servizi" className="container my-32">
        <div className="grid justify-center text-center mb-8">
          <HeadingDefault
            Head={"I servizi di " + SinglePrtData.Nome}
            Desc={"Scopri cosa " + SinglePrtData.Nome + " può fare per te."}
          />
        </div>
        <div className="grid xl:grid-cols-4 gap-4">
          <ListSrv List={ListSrvPrtData} />
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return Partners.map((item) => {
    return { slug: item.Slug }
  });
  // const prtData = await fetch(
  //   "https://cms.liber.consulting/api/collections/Partner/records"
  // ).then((res) => {
  //   return res.json();
  // });
  //
  // return prtData.items.map((Prt: any) => ({
  //   slug: Prt.Slug,
  // }));
}

export async function generateMetadata({ params }: any) {
  // const filter = encodeURIComponent(`Slug="${params.slug}"`);
  // const SinglePrtData = await fetch(
  //   `https://cms.liber.consulting/api/collections/Partner/records?filter=${filter}`
  // ).then((res) => {
  //   return res.json();
  // });
  const SinglePrtData = Partners.filter((item) => item.Slug == params.slug);

  return {
    title: SinglePrtData[0].Nome,
    description: SinglePrtData[0].Nome,

    openGraph: {
      title: SinglePrtData[0].Nome,
      description: SinglePrtData[0].Nome,
      url: "https://liberconsulting.it",
      siteName: "Liber Consulting",
      images: [
        {
          url: `https://liberconsulting.it${SinglePrtData[0].LogoSquare}`,
          width: 640,
          height: 427,
        },
      ],
      locale: "it_IT",
      type: "website",
    },
  };
}
