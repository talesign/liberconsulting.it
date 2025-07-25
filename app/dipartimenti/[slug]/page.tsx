// Components
import HeadingDefault from "@/components/Heading/Default";
import ListSrv from "@/components/List/ListSrv";
import Breadcrumbs from "@/components/Utility/breadcrumbs";
import { Departments } from "@/lib/content/departments";

// Lib
import getListSrvDpt from "@/lib/getFilterList/getListSrvDpt";
import getDpt from "@/lib/getSingle/getDpt";

// NextJs
import Image from "next/image";

export default async function DptPage({ params }: any) {
  const awaitSingleDptData: Promise<any> = getDpt(params.slug);
  const awaitListSrvDptData: Promise<any> = getListSrvDpt(params.slug);

  const [SingleDptData, ListSrvDptData] = await Promise.all([
    awaitSingleDptData,
    awaitListSrvDptData,
  ]);

  return (
    <>
      <section id="Breadcrumbs" className="container">
        <Breadcrumbs
          url="dipartimenti"
          label="Dipartimenti"
          page={SingleDptData.Nome}
        />
      </section>
      <header id="Hero" className="grid justify-center min-h-96 ">
        <Image
          className="col-start-1 row-start-1 block object-cover h-96 xl:h-full opacity-50 z-0"
          alt="Pattern"
          width={3000}
          height={1000}
          src={SingleDptData.HeroImage}
        />
        <div className="container col-start-1 row-start-1 grid grid-cols-1 gap-4 py-64 content-center text-center z-10">
          <h1>{SingleDptData.Nome}</h1>
          <p className=" text-xl -mt-8 mb-4">{SingleDptData.ListingSubtitle}</p>
        </div>
      </header>

      <section className="container my-16">
        <div className="grid justify-center text-center mb-8">
          <HeadingDefault
            Head={"I servizi del dipartimento " + SingleDptData.Nome}
            Desc={"Curati per garantirti il massimo "}
          />
        </div>
        <div className="grid xl:grid-cols-4 gap-4">
          <ListSrv List={ListSrvDptData} />
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  // const dptData = await fetch(
  //   "https://cms.liber.consulting/api/collections/Dipartimenti/records",
  // ).then((res) => {
  //   return res.json();
  // });

  return Departments.map((Dpt: any) => ({
    slug: Dpt.Slug,
  }));
}

export async function generateMetadata({ params }: any) {
  // const filter = encodeURIComponent(`Slug="${params.slug}"`);
  // const SingleDptData = await fetch(
  //   `https://cms.liber.consulting/api/collections/Dipartimenti/records?filter=${filter}`,
  // ).then((res) => {
  //   return res.json();
  // });
  const SingleDptData = await getDpt(params.slug);
  return {
    title: SingleDptData.TitleSeo,
    description: SingleDptData.DescriptionSeo,

    openGraph: {
      title: SingleDptData.TitleSeo,
      description: SingleDptData.DescriptionSeo,
      url: "https://liberconsulting.it",
      siteName: "Liber Consulting",
      images: [
        {
          url: `https://liberconsulting.it/${SingleDptData.ListingImage}`,
          width: 2048,
          height: 672,
        },
      ],
      locale: "it_IT",
      type: "website",
    },
  };
}
