// Components
import HeroDefault from "@/components/Hero/Default";
import ListLgl from "@/components/List/ListLgl";
import { LegalDocs } from "@/lib/content/legal";

// Lib
import getListLgl from "@/lib/getFullList/getListLgl";
import getLgl from "@/lib/getSingle/getLgl";

export default async function LegalCookiePage({ params }: any) {
  const awaitListLglData: Promise<any> = getListLgl();
  const awaitSingleLglData: Promise<any> = getLgl(params.slug);
  const [ListLglData, SingleLglData] = await Promise.all([
    awaitListLglData,
    awaitSingleLglData,
  ]);

  return (
    <>
      <section className="container my-16">
        <div className="flex flex-col items-center text-center">
          <HeroDefault
            Head={SingleLglData.Nome}
            Desc={SingleLglData.Descrizione}
          />
        </div>
      </section>
      <section className="container">
        <div className="max-w-prose m-auto">
          <div>Aggiornato il {SingleLglData.updated}</div>
          <div
            dangerouslySetInnerHTML={{ __html: SingleLglData.Bodycopy }}
            className="bodycopy"
          />
          <div className="flex gap-4">
            <ListLgl List={ListLglData} />
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  // const lglData = await fetch(
  //   "https://cms.liber.consulting/api/collections/Legal/records"
  // ).then((res) => {
  //   return res.json();
  // });

  return LegalDocs.map((Lgl: any) => ({
    slug: Lgl.Slug,
  }));
}

export async function generateMetadata({ params }: any) {
  // const filter = encodeURIComponent(`Slug="${params.slug}"`);
  // const SingleLglData = await fetch(
  //   `https://cms.liber.consulting/api/collections/Legal/records?filter=${filter}`
  // ).then((res) => {
  //   return res.json();
  // });
  const SingleLglData = LegalDocs.filter((item) => item.Slug === params.slug);
  return {
    title: SingleLglData[0].Nome,
    description: SingleLglData[0].Nome,
  };
}
