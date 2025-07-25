import { notFound } from "next/navigation";
import { Departments } from "../content/departments";

export default async function getDpt(slug: any) {
  //   const filter = encodeURIComponent(`Slug="${slug}"`);
  //   const SingleDptData = await fetch(
  //     `https://cms.liber.consulting/api/collections/Dipartimenti/records?filter=${filter}`
  //   ).then((res) => {
  //     return res.json();
  //   });
  //   if (SingleDptData.items[0] == undefined) {
  //     notFound();
  //   }
  //   return SingleDptData.items[0];
  const data = Departments.filter((item) => item.Slug === slug)[0];

  if (data === undefined) {
    notFound();
  }

  return data;
}
