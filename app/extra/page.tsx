// Components
import ListXrt from "@/components/List/ListXtr";

// Lib
import getListXtr from "@/lib/getFullList/getListXtr";

// NextJs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "I nostri servizi Extra",
  description:
    "Scopri i servizi extra di Liber, da pulizie specializzate al noleggio di biancheria. Aggiungi valore e comfort alla tua attività con i nostri servizi.",
};

export default async function PageListXtr() {
  const awaitXrtListData: Promise<any> = getListXtr();
  const [XrtListData] = await Promise.all([awaitXrtListData]);

  return (
    <>
      <section className="container grid my-16">
        <h1 className="pb-2">I nostri extra</h1>
        <p className="text-2xl text-gray-400 pb-6">
          Scopri tutti i servizi extra di Liber. Il servizio completo.
        </p>
      </section>
      <section className="container grid gap-4">
        <ListXrt List={XrtListData} />
      </section>
    </>
  );
}
