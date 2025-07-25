export default async function getListXrtSrv(slug: any) {
  const filter = encodeURIComponent(`Servizio.Slug="${slug}"`);
  const xrtData = await fetch(
    `https://cms.liber.consulting/api/collections/Extra/records?filter=${filter}&expand=Servizio&sort=-Evidenza`
  ).then((res) => {
    return res.json();
  });
  return xrtData.items;
}
