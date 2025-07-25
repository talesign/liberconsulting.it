// Components
import ListSrv from "@/components/List/ListSrv";
import Breadcrumbs from "@/components/Utility/breadcrumbs";

// NextJs
import Image from "next/image";
import { Metadata } from "next";

// Lib
import getPrt from "@/lib/getSingle/getPrt";
import getListSrvPrt from "@/lib/getFilterList/getListSrvPrt";
import Link from "next/link";
import HeadingDefault from "@/components/Heading/Default";

export const metadata: Metadata = {
  title: "Chi siamo, cosa facciamo - Liber",
  description:
    "Liber offre direttamente servizi di pulizie a Firenze e gestione completa di immobili. Soluzioni complete per la valorizzazione del tuo patrimonio immobiliare.",
};

export default async function ChiSiamoPage() {
  const awaitSinglePrtData: Promise<any> = getPrt("liber");
  const awaitListSrvPrtData: Promise<any> = getListSrvPrt("liber");

  const [SinglePrtData, ListSrvPrtData] = await Promise.all([
    awaitSinglePrtData,
    awaitListSrvPrtData,
  ]);

  console.log(SinglePrtData);
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
              src={
                "https://cms.liber.consulting/api/files/Partner/" +
                SinglePrtData.id +
                "/" +
                SinglePrtData.LogoSquare
              }
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
          <div className="container flex gap-4 ">
            {SinglePrtData.Galleria.map((SingleImage: any) => (
              <Image
                className="rounded-md"
                src={
                  "https://cms.liber.consulting/api/files/Partner/" +
                  SinglePrtData.id +
                  "/" +
                  SingleImage
                }
                width={480}
                height={320}
                alt="Logo circle"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid xl:grid-cols-[2fr_1fr] gap-32 relative items-start">
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: SinglePrtData.Bodycopy }}
              className="bodycopy"
            />
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
                  {SinglePrtData.expand.Referente.Nome}
                </div>
              </div>
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
