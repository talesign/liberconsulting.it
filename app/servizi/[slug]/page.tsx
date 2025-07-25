// Components
// import ListXrt from "@/components/List/ListXtr";
// import getListXrtSrv from "@/lib/getFilterList/getListXrtSrv";

// NextJs
import Link from "next/link";
import Image from "next/image";

// Lib
import getSrv from "@/lib/getSingle/getSrv";
import Breadcrumbs from "@/components/Utility/breadcrumbs";
import { Services } from "@/lib/content/services";

export default async function SrvPage({ params }: any) {
  const awaitSingleSrvData: Promise<any> = getSrv(params.slug);
  // const awaitListXrtSrvData: Promise<any> = getListXrtSrv(params.slug);

  const [SingleSrvData] = await Promise.all([
    awaitSingleSrvData,
    // awaitListXrtSrvData,
  ]);

  return (
    <>
      <section className="container">
        <Breadcrumbs url="servizi" label="Servizi" page={SingleSrvData.Nome} />
      </section>
      <section className="container xl:mt-8">
        <div className="grid xl:grid-cols-[1fr_2fr] xl:gap-32 gap-4 relative items-start">
          <div className="xl:sticky xl:top-16">
            <Image
              className="mb-4"
              src={SingleSrvData.ListIcon}
              height={50}
              width={50}
              alt={SingleSrvData.TitleSeo}
            />
            <h1 className="text-4xl">{SingleSrvData.Nome}</h1>
            <div className="flex justify-between py-4 border-b border-t border-g900">
              <div className="font-bold text-sm">Partner</div>
              <Link href={"https://liberconsulting.it/partner/" + SingleSrvData.expand.Partner.Slug} className="text-sm">
                {SingleSrvData.expand.Partner.Nome}
              </Link>
            </div>
            <div className="grid items-start">
              <div className="flex justify-between py-4 border-b border-g900">
                <div className="font-bold text-sm">Referente</div>
                <div className="text-sm">
                  {SingleSrvData.expand.Referente.Nome}
                </div>
              </div>
              {/**
              <div className="flex justify-between py-4 border-b border-g900">
                <div className="font-bold text-sm">Telefono</div>
                <Link
                  href={
                    "tel:39" +
                    SingleSrvData.expand.Partner.expand.Referente.Numero
                  }
                  className="text-sm"
                >
                  {SingleSrvData.expand.Partner.expand.Referente.Numero}
                </Link>
              </div>
              <div className="flex justify-between py-4 ">
                <div className="font-bold text-sm">Email</div>
                <Link
                  href={
                    "mailto:" +
                    SingleSrvData.expand.Partner.expand.Referente.Email
                  }
                  className="text-sm"
                >
                  {SingleSrvData.expand.Partner.expand.Referente.Email}
                </Link>
              </div>

                */}
            </div>
            <div className="flex gap-4 justify-between mt-8">
              <Link
                className="button-primary w-full justify-center"
                href="#contatti"
              >
                Richiedi info
              </Link>
              {/**
              <Link
                className="button-secondary w-full justify-center"
                href="#extra"
              >
                Servizi extra
              </Link>
              */}
            </div>
          </div>
          <div>
            <Image
              className="rounded-md border border-gray-600"
              src={SingleSrvData.ImmagineEvidenza}
              height={1980}
              width={1080}
              alt={SingleSrvData.TitleSeo}
            />
            <div
              dangerouslySetInnerHTML={{ __html: SingleSrvData.Bodycopy }}
              className="bodycopy"
            />
            {/**
            <div id="extra" className="grid gap-4 pt-16">
              <h2>Extra</h2>
              {Object.keys(ListXrtSrvData).length === 0 && (
                <p>Al momento questo servizio non ha extra.</p>
              )}
              <ListXrt List={ListXrtSrvData} />
            </div>
            */}
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  // const srvData = await fetch(
  //   "https://cms.liber.consulting/api/collections/Servizi/records",
  // ).then((res) => {
  //   return res.json();
  // });

  return Services.map((Srv: any) => ({
    slug: Srv.Slug,
  }));
}

export async function generateMetadata({ params }: any) {
  // const filter = encodeURIComponent(`Slug="${params.slug}"`);
  // const SingleSrvData = await fetch(
  //   `https://cms.liber.consulting/api/collections/Servizi/records?filter=${filter}`,
  // ).then((res) => {
  //   return res.json();
  // });
  const SingleSrvData = Services.filter((item) => item.Slug == params.slug)[0];

  return {
    title: SingleSrvData.TitleSeo,
    description: SingleSrvData.DescriptionSeo,

    openGraph: {
      title: SingleSrvData.TitleSeo,
      description: SingleSrvData.DescriptionSeo,
      url: "https://liberconsulting.it",
      siteName: "Liber Consulting",
      images: [
        {
          url: `https://liberconsulting.it${SingleSrvData.ImmagineEvidenza}`,
          width: 960,
          height: 640,
        },
      ],
      locale: "it_IT",
      type: "website",
    },
  };
}
