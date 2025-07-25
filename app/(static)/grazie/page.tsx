// NextJs
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grazie per il Tuo Interesse - Liber",
  description:
    "Grazie per averci contattato! Un membro del nostro team ti risponderà a breve. Nel frattempo, esplora i nostri servizi e scopri come possiamo aiutarti",
};

export default function GraziePage() {
  return (
    <>
      <section className="container grid text-center mt-32">
        <h1 className="pb-2">Grazie per averci contattato</h1>
        <p className="text-2xl text-gray-400 pb-6">
          La tua richiesta è stata inviata con successo. Verrai ricontattato al
          più presto da un nostro operatore.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/servizi" className="button-primary">
            Scopri altri servizi
          </Link>
          <Link href="/" className="button-secondary">
            Torna alla home
          </Link>
        </div>
      </section>
    </>
  );
}
