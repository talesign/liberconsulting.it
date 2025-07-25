// Components
import ListLgl from "@/components/List/ListLgl";

// Lib
import getListLgl from "@/lib/getFullList/getListLgl";

// NextJs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal - Liber",
  description: "Tutti i documenti legali di Liber Consulting.",
};

export default async function LegalPage() {
  const awaitListLglData: Promise<any> = getListLgl();
  const [ListLglData] = await Promise.all([awaitListLglData]);
  return (
    <>
      <section className="container grid text-center mt-32">
        <h1 className="pb-2">Documenti legali</h1>
        <p className="text-2xl text-gray-400 pb-6">
          Qui troverai tutti i documenti legali di Liber.
        </p>
        <div className="flex justify-center gap-4">
          <ListLgl List={ListLglData} />
        </div>
      </section>
    </>
  );
}
