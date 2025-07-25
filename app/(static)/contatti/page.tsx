// NextJs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contattaci - Liber Consulting",
  description:
    "Hai domande o hai bisogno di un preventivo? Contattaci attraverso il nostro modulo online e uno dei nostri esperti ti risponderà al più presto.",
};

export default function ContattiPage() {
  return (
    <>
      <section className="container grid text-center mt-32">
        <h1 className="pb-2">Contatta il nostro team</h1>
        <p className="text-2xl text-gray-400">
          Ti aiuteremo a trovare le giuste soluzioni per il tuo business.
        </p>
      </section>
    </>
  );
}
