// Components
import ListSrv from "@/components/List/ListSrv";

// NextJs
import { Metadata } from "next";

// Lib
import getListSrv from "@/lib/getFullList/getListSrv";

export const metadata: Metadata = {
  title: "Servizi Offerti da Liber - Soluzioni Aziendali a 360 Gradi",
  description:
    "Dalla pulizia industriale alla certificazione energetica, esplora l'ampia gamma di servizi che Liber offre per migliorare la tua azienda.",
};

export default async function PageListSrv() {
  const awaitSrvListData = getListSrv();
  const [SrvListData] = await Promise.all([awaitSrvListData]);

  return (
    <>
      <section className="container grid my-16">
        <h1 className="pb-2">I nostri servizi</h1>
        <p className="text-2xl text-gray-400 pb-6">
          Scopri tutti i servizi per Liber. Cosa possiamo fare per la tua
          azienda.
        </p>
      </section>
      <section className="container">
        <div className="grid xl:grid-cols-4 gap-4">
          <ListSrv List={SrvListData} />
        </div>
      </section>
    </>
  );
}
