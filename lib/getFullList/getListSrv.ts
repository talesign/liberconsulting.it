import { Services } from "../content/services";
import { Partners } from "../content/partners";
export default async function getListSrv() {
  // const ListSrvData = await fetch(
  //   "https://cms.liber.consulting/api/collections/Servizi/records?expand=Partner"
  // ).then((res) => {
  //   return res.json();
  // });
  // return ListSrvData.items;
  const data = Services.map((item) => {
    return {
      ...item,
      expand: {
        Partner: Partners.filter((prt) => prt.Slug === item.Partner)[0],
      }
    }
  });
  return data;
}
