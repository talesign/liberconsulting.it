import { Services } from "../content/services";
import { Partners } from "../content/partners";

export default async function getListSrv4(
  srv1: any,
  srv2: any,
  srv3: any,
  srv4: any,
) {
  // const filter = encodeURIComponent(
  //   `(Nome="${srv1}"||Nome="${srv2}"||Nome="${srv3}"||Nome="${srv4}")`
  // );
  // const srvData = await fetch(
  //   `https://cms.liber.consulting/api/collections/Servizi/records?filter=${filter}&expand=Partner`
  // ).then((res) => {
  //   return res.json();
  // });
  // return srvData.items;

  const data = Services.filter(
    (item) =>
      item.Nome == srv1 ||
      item.Nome == srv2 ||
      item.Nome == srv3 ||
      item.Nome == srv4,
  ).map((item) => {
    return {
      ...item,
      expand: {
        Partner: Partners.filter((prt) => prt.Slug === item.Partner)[0],
      },
    };
  });
  return data;
}
