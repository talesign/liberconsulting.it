// Components
import Breadcrumbs from "@/components/Utility/breadcrumbs";

// NextJs
import Link from "next/link";
import Image from "next/image";

// Lib
import getXtr from "@/lib/getSingle/getXtr";

export default async function XtrPage({ params }: any) {
  const awaitSingleXtrData: Promise<any> = getXtr(params.slug);
  const [SingleXtrData] = await Promise.all([awaitSingleXtrData]);
  let Data = new Date(SingleXtrData.updated);
  return (
    <>
      {
        /*IMMOBILIARE*/ SingleXtrData.expand.Servizio.Dipartimento ==
          "yflu83uue0orf32" && (
          <section className="bg-gradient-to-br from-imm100/30 to-40% to-black">
            <div id="Breadcrumbs" className="container">
              <Breadcrumbs
                url="extra"
                label="Extra"
                page={SingleXtrData.Nome}
              />
            </div>
            <div className="container grid xl:grid-cols-[2fr_1fr] gap-32 relative items-start">
              <div>
                <div className="flex flex-col xl:flex-row gap-4 items-center mb-4 text-sm">
                  <div className="px-2 py-1 rounded-full bg-immGr-50">
                    {SingleXtrData.expand.Servizio.Nome}
                  </div>
                  <div>Aggiornato il {Data.toLocaleString()}</div>
                </div>
                <h1 className="">{SingleXtrData.Nome}</h1>
              </div>
            </div>
          </section>
        )
      }
      {
        /*AMBIENTE*/ SingleXtrData.expand.Servizio.Dipartimento ==
          "jwlx90uatqukwgm" && (
          <section className="bg-gradient-to-br from-amb100/30 to-40% to-black">
            <div id="Breadcrumbs" className="container">
              <Breadcrumbs
                url="extra"
                label="Extra"
                page={SingleXtrData.Nome}
              />
            </div>
            <div className="container grid xl:grid-cols-[2fr_1fr] gap-32 relative items-start">
              <div>
                <div className="flex flex-col xl:flex-row gap-4 items-center mb-4 text-sm">
                  <div className="px-2 py-1 rounded-full bg-ambGr-50">
                    {SingleXtrData.expand.Servizio.Nome}
                  </div>
                  <div>Aggiornato il {Data.toLocaleString()}</div>
                </div>
                <h1 className="">{SingleXtrData.Nome}</h1>
              </div>
            </div>
          </section>
        )
      }
      {
        /*COMUNICAZIONE*/ SingleXtrData.expand.Servizio.Dipartimento ==
          "kzbylpnpc4jxyzm" && (
          <section className="bg-gradient-to-br from-com100/30 to-40% to-black">
            <div id="Breadcrumbs" className="container">
              <Breadcrumbs
                url="extra"
                label="Extra"
                page={SingleXtrData.Nome}
              />
            </div>
            <div className="container grid xl:grid-cols-[2fr_1fr] gap-32 relative items-start">
              <div>
                <div className="flex flex-col xl:flex-row gap-4 items-center mb-4 text-sm">
                  <div className="px-2 py-1 rounded-full bg-comGr-50">
                    {SingleXtrData.expand.Servizio.Nome}
                  </div>
                  <div>Aggiornato il {Data.toLocaleString()}</div>
                </div>
                <h1 className="">{SingleXtrData.Nome}</h1>
              </div>
            </div>
          </section>
        )
      }
      <section className="container">
        <div className="grid xl:grid-cols-[2fr_1fr] gap-32 relative items-start">
          <div>
            <Image
              className="rounded-md border border-gray-600"
              src={
                "https://cms.liber.consulting/api/files/Extra/" +
                SingleXtrData.id +
                "/" +
                SingleXtrData.ImmagineEvidenza
              }
              height={1980}
              width={1080}
              alt={SingleXtrData.TitleSeo}
            />
            <div
              dangerouslySetInnerHTML={{ __html: SingleXtrData.Bodycopy }}
              className="bodycopy"
            />
          </div>
          <div className="sticky top-16">
            <div className="p-8 rounded-md border border-g900 flex flex-col items-start">
              <div className="mb-8">
                Scopri di più su {SingleXtrData.expand.Servizio.Nome}
              </div>
              <Link
                className="button-primary"
                href={"/servizi/" + SingleXtrData.expand.Servizio.Slug}
              >
                Vai al servizio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const xrtData = await fetch(
    "https://cms.liber.consulting/api/collections/Extra/records"
  ).then((res) => {
    return res.json();
  });

  return xrtData.items.map((Dpt: any) => ({
    slug: Dpt.Slug,
  }));
}

export async function generateMetadata({ params }: any) {
  const filter = encodeURIComponent(`Slug="${params.slug}"`);
  const SingleXrtData = await fetch(
    `https://cms.liber.consulting/api/collections/Extra/records?filter=${filter}`
  ).then((res) => {
    return res.json();
  });
  return {
    title: SingleXrtData.items[0].TitleSeo,
    description: SingleXrtData.items[0].DescriptionSeo,

    openGraph: {
      title: SingleXrtData.items[0].TitleSeo,
      description: SingleXrtData.items[0].DescriptionSeo,
      url: "https://liber.consulting",
      siteName: "Liber Consulting",
      images: [
        {
          url: `https://cms.liber.consulting/api/files/Extra/${SingleXrtData.items[0].id}/${SingleXrtData.items[0].ImmagineEvidenza}`,
          width: 960,
          height: 640,
        },
      ],
      locale: "it_IT",
      type: "website",
    },
  };
}
