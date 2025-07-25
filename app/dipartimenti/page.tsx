// Components
import ListDpt from "@/components/List/ListDpt";
import HeadingDefault from "@/components/Heading/Default";
import ListSrv from "@/components/List/ListSrv";

// Lib
import getListDpt from "@/lib/getFullList/getListDpt";
import get4Srv from "@/lib/getFilterList/get4Srv";

// Next
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dipartimenti - Comunicazione, Immobiliare, Ambiente",
  description:
    "Scopri i nostri tre dipartimenti: Comunicazione, Immobiliare e Ambiente. Ciascuno offre servizi specializzati per soddisfare tutte le tue esigenze aziendali.",
};

export default async function PageListDpt() {
  const awaitDptListData: Promise<any> = getListDpt();
  const awaitSrvListData: Promise<any> = get4Srv(
    "Servizio pulizie Firenze",
    "Property management",
    "Realizzazione siti web",
    "Efficientamento energetico",
  );

  const [DptListData, SrvListData] = await Promise.all([
    awaitDptListData,
    awaitSrvListData,
  ]);

  return (
    <>
      <header className="container flex flex-col justify-center items-center">
        <div className="grid xl:grid-cols-2 py-16 gap-4">
          <div className="p-8 border border-gray-600 rounded-md">
            <h1 className="text-4xl pb-4">I Nostri Dipartimenti</h1>
            <p className="text-sm">
              Esplora i dipartimenti di Liber e scopri una gamma completa di
              servizi pensati per rispondere a tutte le tue esigenze aziendali.
              Dall'immobiliare alla comunicazione, passando per soluzioni
              ambientali, offriamo un portafoglio completo per rendere il tuo
              business più efficace ed eco-sostenibile. Ogni dipartimento è
              specializzato in servizi mirati, garantendo qualità e competenza
              in ogni settore.
            </p>
          </div>
          <div className="grid gap-4 w-full">
            <ListDpt List={DptListData} />
          </div>
        </div>
      </header>

      <section id="ListSrv" className="container my-32">
        <div className="pb-4 text-center">
          <HeadingDefault
            Head="I servizi più apprezzati"
            Desc="Alcuni dei servizi più richiesti dai clienti di Liber."
          />
        </div>
        <div className="grid xl:grid-cols-4 gap-4 ">
          <ListSrv List={SrvListData} />
          <div className="border border-g1100 rounded-lg flex justify-between items-center p-8 xl:col-span-4">
            <span className="font-bold">Scopri tutti i servizi</span>
            <Link href="/servizi" className="button-primary">
              Scopri di più
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
