import { Partners } from "../content/partners";
import { Services } from "../content/services";

export default async function getListSrvDpt(slug: any) {
  // const filter = encodeURIComponent(`Dipartimento.Slug="${slug}"`);
  // const srvData = await fetch(
  //   `https://cms.liber.consulting/api/collections/Servizi/records?filter=${filter}&expand=Partner`,
  // ).then((res) => {
  //   return res.json();
  // });
  // return srvData.items;

  const data = Services.filter((item) => item.Dipartimento == slug).map((srv) => {
    return {
      ...srv,
      expand: {
        Partner: Partners.filter((prt) => prt.Slug === srv.Partner)[0]
      }
    }
  });
  return data;
}
