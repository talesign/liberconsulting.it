import { Services } from "../content/services";
import { Partners } from "../content/partners";
import { Referents } from "../content/referents";
export default async function getListSrvPrt(slug: any) {
  // const filter = encodeURIComponent(`Partner.Slug="${slug}"`);
  // const srvData = await fetch(
  //   `https://cms.liber.consulting/api/collections/Servizi/records?filter=${filter}&expand=Partner`,
  // ).then((res) => {
  //   return res.json();
  // });
  // return srvData.items;
  const data = Services.filter((item) => item.Partner === slug).map((srv) => {
    return {
      ...srv,
      expand: {
        Partner: Partners.filter((prt) => prt.Slug === srv.Partner)[0],
        Referente: Referents.filter((rfr) => rfr.Slug === srv.Referente)[0],
      },
    };
  });
  return data;
}
