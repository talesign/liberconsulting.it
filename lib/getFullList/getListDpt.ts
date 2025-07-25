import { Departments } from "../content/departments";
export default async function getListDpt() {
  // const ListDptData = await fetch(
  //   "https://cms.liber.consulting/api/collections/Dipartimenti/records"
  // ).then((res) => {
  //   return res.json();
  // });
  // return ListDptData.items;
  return Departments;
}
