import { Partners } from "../content/partners";

export default async function getListPrt() {
  // const ListPrtData = await fetch(
  //   "https://cms.liber.consulting/api/collections/Partner/records"
  // ).then((res) => {
  //   return res.json();
  // });
  // return ListPrtData.items;

  return Partners;
}
