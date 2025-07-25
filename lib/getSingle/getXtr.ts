import { notFound } from "next/navigation";

export default async function getXtr(slug: any) {
  const filter = encodeURIComponent(`Slug="${slug}"`);
  const SingleXtrData = await fetch(
    `https://cms.liber.consulting/api/collections/Extra/records?filter=${filter}&expand=Servizio`
  ).then((res) => {
    return res.json();
  });
  if (SingleXtrData.items[0] == undefined) {
    notFound();
  }
  return SingleXtrData.items[0];
}
