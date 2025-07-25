export default async function getListXtr() {
  const ListXtrData = await fetch(
    "https://cms.liber.consulting/api/collections/Extra/records?expand=Servizio"
  ).then((res) => {
    return res.json();
  });
  return ListXtrData.items;
}
