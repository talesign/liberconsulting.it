import { notFound } from "next/navigation";
import { Referents } from "../content/referents";
import { Services } from "../content/services";
import { Partners } from "../content/partners";

export default async function getSrv(slug: any) {
  // const filter = encodeURIComponent(`Slug="${slug}"`);
  // const SingleSrvData = await fetch(
  //   `https://cms.liber.consulting/api/collections/Servizi/records?filter=${filter}&expand=Partner,Partner.Referente`,
  // ).then((res) => {
  //   return res.json();
  // });
  // if (SingleSrvData.items[0] == undefined) {
  //   notFound();
  // }
  // return SingleSrvData.items[0];

  const data = Services.filter((item) => item.Slug === slug).map((item) => {
    return {
      ...item,
      expand: {
        Referente: Referents.filter((ref) => ref.Slug === item.Referente)[0],
        Partner: Partners.filter((ref) => ref.Slug === item.Partner)[0],
      },
    };
  })[0];

  if (data === undefined) {
    notFound();
  }

  return data;
}
