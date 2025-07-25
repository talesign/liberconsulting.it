// Components
import ListPrt from "@/components/List/ListPrt";

// Lib
import getListPrt from "@/lib/getFullList/getListPrt";

// NextJs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Nostri Partner - Liber Firenze",
  description:
    "Incontra i nostri partner esperti nei campi dell'efficienza energetica, pulizia industriale e molto altro. Trova il giusto partner per le tue esigenze aziendali.",
};

export default async function PageListPrt() {
  const awaitListPrtData: Promise<any> = getListPrt();
  const [ListPrtData] = await Promise.all([awaitListPrtData]);

  return (
    <>
      <section className="container grid my-16">
        <h1 className="pb-2">I nostri partner</h1>
        <p className="text-2xl text-gray-400 pb-6">
          Scopri tutti i partner di Liber. Chi supporta la tua azienda.
        </p>
      </section>
      <section className="container">
        <div className="grid xl:grid-cols-3 gap-4">
          <ListPrt List={ListPrtData} />
        </div>
      </section>
    </>
  );
}
