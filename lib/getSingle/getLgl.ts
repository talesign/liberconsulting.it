import { LegalDocs } from "../content/legal";
import { notFound } from "next/navigation";

export default async function getLgl(slug: any) {
  // const filter = encodeURIComponent(`Slug="${slug}"`);
  // const SingleLglData = await fetch(
  //   `https://cms.liber.consulting/api/collections/Legal/records?filter=${filter}`
  // ).then((res) => {
  //   return res.json();
  // });
  // if (SingleLglData.items[0] == undefined) {
  //   notFound();
  // }
  // return SingleLglData.items[0];
  const data = LegalDocs.filter((item) => item.Slug === slug)[0];
  if (data === undefined) {
    notFound();
  }
  return data;
}
