import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container grid text-center content-center h-screen -mt-16">
      <h1 className="pb-2">Errore 404</h1>
      <p className="text-2xl text-gray-400 pb-4">
        Non abbiamo trovato quello che stavi cercando.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/servizi" className="button-primary">
          Scopri i servizi
        </Link>
        <Link href="/" className="button-secondary">
          Torna alla home
        </Link>
      </div>
    </section>
  );
}
