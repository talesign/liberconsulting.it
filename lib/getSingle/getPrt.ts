import { Partners } from "../content/partners";
import { notFound } from "next/navigation";

export default async function getPrt(slug: any) {
  //   const filter = encodeURIComponent(`Slug="${slug}"`);
  //   const SinglePrtData = await fetch(
  //     `https://cms.liber.consulting/api/collections/Partner/records?filter=${filter}&expand=Referente`
  //   ).then((res) => {
  //     return res.json();
  //   });
  //   if (SinglePrtData.items[0] == undefined) {
  //     notFound();
  //   }
  //   return SinglePrtData.items[0];

  const data = Partners.filter((item) => item.Slug == slug)[0];

  if (data === undefined) {
    notFound();
  }

  return data;
}
