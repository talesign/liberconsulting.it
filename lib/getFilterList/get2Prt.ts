import { Partners } from "../content/partners";
export default async function getListPrt2(prt1: any, prt2: any) {
  // const filter = encodeURIComponent(`Nome="${prt1}"||Nome="${prt2}"`);
  // const prtData = await fetch(
  //   `https://cms.liber.consulting/api/collections/Partner/records?filter=${filter}`,
  // ).then((res) => {
  //   return res.json();
  // });
  // return prtData.items;
  const data = Partners.filter((item) => item.Nome == prt1 || item.Nome == prt2);
  return data;
}
