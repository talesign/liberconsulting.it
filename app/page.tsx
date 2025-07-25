// Components
import HeroHome from "@/components/Hero/Home";
import HeadingDefault from "@/components/Heading/Default";
import HeadingDpt from "@/components/Heading/Dpt";
import ListSrvIcon from "@/components/List/ListSrvIcon";
import ListPrt from "@/components/List/ListPrt";

// Lib
import getListSrvDpt from "@/lib/getFilterList/getListSrvDpt";
import get2Prt from "@/lib/getFilterList/get2Prt";

// NextJs
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liber Consulting - Soluzioni per la tua azienda",
  description:
    "Un'ampia gamma di servizi aziendali. Scopri i servizi dei nostri dipartimenti.",
};

export default async function Home() {
  const awaitListPrtData: Promise<any> = get2Prt("Talesign", "Shukram");
  const awaitListSrvImmData: Promise<any> = getListSrvDpt("immobiliare");
  const awaitListSrvComData: Promise<any> = getListSrvDpt("comunicazione");
  const awaitListSrvAmbData: Promise<any> = getListSrvDpt("ambiente");

  const [ListPrtData, ListSrvImmData, ListSrvComData, ListSrvAmbData] =
    await Promise.all([
      awaitListPrtData,
      awaitListSrvImmData,
      awaitListSrvComData,
      awaitListSrvAmbData,
    ]);

  return (
    <>
      <HeroHome
        Head="Liber: Soluzioni per la tua azienda"
        Desc="Un unico partner per gestire Immobiliare, Comunicazione e Ambiente. Liber ti offre servizi su misura per il tuo business."
        ImageUrl="/images/Liber-Consulting-Illustration.jpg"
        Butt1Lab="Di cosa ci occupiamo"
        Butt1Url="#ListSrvImm"
        Butt2Lab="Richiedi info"
        Butt2Url="/contatti"
      />

      <section id="ListSrvImm" className="container my-32">
        <div className="flex flex-col xl:items-center mb-16">
          <div className="subtitle text-center">
            Esplora i nostri dipartimenti
          </div>
          <HeadingDpt
            Number="1"
            Title="Immobiliare"
            Subtitle="Gestione e ottimizzazione del tuo immobiliare"
            Paragraph="Da efficientamento energetico a property management: soluzioni concrete per valorizzare e gestire i tuoi immobili.            "
          />
        </div>
        <div className="grid xl:grid-cols-2 gap-32">
          <div>
            <Image
              className="object-contain w-full"
              width={813}
              height={978}
              alt="Home Image"
              src={"/images/homepage/Liber-Immobiliare-Display.webp"}
            />
          </div>
          <div>
            <ListSrvIcon List={ListSrvImmData} />
          </div>
        </div>
      </section>

      <section id="ListSrvCom" className="container my-32">
        <div className="flex flex-col xl:items-center mb-16">
          <HeadingDpt
            Number="2"
            Title="Comunicazione"
            Subtitle="Strategie di comunicazione per il tuo successo"
            Paragraph="Dalla realizzazione siti web alla gestione social: soluzioni digitali per una comunicazione efficace."
          />
        </div>
        <div className="grid xl:grid-cols-2 gap-32 ">
          <div>
            <ListSrvIcon List={ListSrvComData} />
          </div>
          <div className="row-start-1 xl:row-start-auto">
            <Image
              className="object-contain w-full"
              width={812}
              height={978}
              alt="Home Image"
              src={"/images/homepage/Liber-Comunicazione-Display.webp"}
            />
          </div>
        </div>
      </section>

      <section id="ListSrvAmb" className="container my-32">
        <div className="flex flex-col xl:items-center mb-16">
          <HeadingDpt
            Number="3"
            Title="Ambiente"
            Subtitle="Valutazioni e analisi per un ambiente sostenibile"
            Paragraph="Da analisi impatto olfattivo a valutazione acustica: servizi per rendere i tuoi progetti più eco-compatibili."
          />
        </div>
        <div className="grid xl:grid-cols-2 gap-32">
          <div>
            <Image
              className="object-contain w-full"
              width={812}
              height={978}
              alt="Home Image"
              src={"/images/homepage/Liber-Ambiente-Display.webp"}
            />
          </div>
          <div>
            <ListSrvIcon List={ListSrvAmbData} />
          </div>
        </div>
      </section>

      <section id="ListPrt" className="container my-32">
        <div className="pb-4 text-center xl:max-w-3xl mx-auto">
          <HeadingDefault
            Head="I nostri partner per estendere le nostre soluzioni"
            Desc="Scopri le aziende partner di Liber che arricchiscono la nostra offerta di servizi. Dal settore immobiliare alla comunicazione, collaboriamo con i migliori per fornirti soluzioni complete ed efficaci."
          />
        </div>
        <div className="grid xl:grid-cols-3 gap-4">
          <ListPrt List={ListPrtData} />
          <Link
            href="/partner"
            className="border border-g1100 rounded-lg flex flex-col justify-center p-8"
          >
            <p className="font-bold">Scopri altri partner</p>
            <p className="text-g600">Tutti i nostri collaboratori</p>
          </Link>
        </div>
      </section>
    </>
  );
}
