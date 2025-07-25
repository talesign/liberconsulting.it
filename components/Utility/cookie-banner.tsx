"use client";

import { useState, useEffect } from "react";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";
import Link from "next/link";
import { postCkc } from "@/lib/post/postCkc";
import axios from "axios";

let ConsentIdentifier: string;

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(!hasCookie("consent"));
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const cookieConsent = hasCookie("consent");
    if (!cookieConsent) {
      setShowBanner(true);
      document.body.classList.add("overflow-y-hidden");
    }
  }, []);

  const PreferencesOn = () => {
    setShowPreferences(true);
  };
  const PreferencesOff = () => {
    setShowPreferences(false);
  };

  const AcceptCookies = () => {
    createIdentifier();
    setCookie(
      "consent",
      `{ID: ${ConsentIdentifier}, TECHNICAL: true, ANALYTICS_ANON: true, EXPERIENCE: true, ANALYTICS: true, MARKETING: false}`,
      {
        maxAge: 60 * 60 * 24 * 365,
      }
    );
    SaveCookieConsent();
  };

  async function RefuseCookies() {
    createIdentifier();
    setCookie(
      "consent",
      `{ID: ${ConsentIdentifier}, TECHNICAL: true, ANALYTICS_ANON: true, EXPERIENCE: false, ANALYTICS: false, MARKETING: false}`,
      {
        maxAge: 60 * 60 * 24 * 365,
      }
    );
    SaveCookieConsent();
  }

  const CookiePreferences = () => {
    createIdentifier();
    const ana = document.getElementById("analytics") as HTMLInputElement;
    const exp = document.getElementById("experience") as HTMLInputElement;

    setCookie(
      "consent",
      `{ID: ${ConsentIdentifier}, TECHNICAL: true, ANALYTICS_ANON: true, EXPERIENCE: ${exp?.checked}, ANALYTICS: ${ana?.checked}, MARKETING: false}`,
      {
        maxAge: 60 * 60 * 24 * 365,
      }
    );
    SaveCookieConsent();
  };

  const createIdentifier = () => {
    const randomNumber = new String(
      Math.floor(Math.random() * (999 - 101)) + 101
    );
    const currentDate = new Date().toISOString();
    ConsentIdentifier = currentDate.concat("-", randomNumber.toString());
  };

  async function SaveCookieConsent() {
    const ConsentRecord = JSON.stringify({
      SCOPED_ID: ConsentIdentifier,
      LEGAL_NOTICES: "cookie-policy",
      PREFERENCES: JSON.parse(JSON.stringify(getCookie("consent"))),
      PROOFS: {
        CONTENT: getCookie("consent"),
        FORM_BANNER: String(document.getElementById("banner")?.outerHTML),
        FORM_PREFERENCES: String(
          document.getElementById("preferenze")?.outerHTML
        ),
        PAGE_URL: window.location,
        IP_ADDRESS: "",
        USER_AGENT: navigator.userAgent,
      },
    });
    const res = await axios.post(
      "https://cms.liber.consulting/api/collections/Cookies/records",
      {
        Identificativo: ConsentIdentifier,
        Consenso: ConsentRecord,
      }
    );

    if (res.status === 200) {
      console.log("Cookie salvato correttamente");
    } else {
      alert(
        "Le tue preferenze sono state salvete in locale, ma non sui nostri server."
      );
    }
    setShowBanner(false);
    setShowPreferences(false);
    document.body.classList.remove("overflow-y-hidden");
  }

  const ResetCookiePreferences = () => {
    deleteCookie("consent");
    window.location.reload();
  };

  return (
    <>
      <div id="credits" className=" bg-g1200 text-g800 ">
        <div className="container text-xs flex flex-col xl:flex-row gap-4">
          <Link href="https://talesign.com" className="hover:text-white">
            Made with love by Talesign
          </Link>
          <Link href="/legal/privacy" className="hover:text-white">
            Privacy policy
          </Link>
          <Link href="/legal/cookie" className="hover:text-white">
            Cookie policy
          </Link>
          <button
            onClick={ResetCookiePreferences}
            className="text-left hover:text-white"
          >
            Cambia le tue preferenze
          </button>
        </div>
      </div>
      {showBanner && (
        <>
          <div
            id="banner"
            className=" fixed bottom-0 left-0 pt-16 w-screen h-screen xl:m-4 bg-black bg-opacity-50 z-20 grid items-end"
          >
            <div className="text-white xl:max-w-xl bg-black p-8 xl:border xl:border-white xl:rounded-lg col-start-1 row-start-1">
              <p className="text-xs xl:text-sm font-bold">
                Non stiamo parlando di quelli buoni e croccanti. Questi cookie
                ci aiutano a mantenere il nostro sito sicuro, regalarti
                un'esperienza migliore e mostrarti annunci più pertinenti. Non
                li attiveremo se non accetti. Vuoi saperne di più o modificare
                le tue preferenze? Clicca su Personalizza cookie Questo sito
                utilizza i cookie per misurare e migliorare la tua esperienza.
                Puoi decidere a quali cookie (divisi per categoria) prestare,
                rifiutare o revocare il tuo consenso in qualsiasi momento
                accedendo all'apposita sezione, cliccando su "Personalizza
                cookie". Cliccando su “Accetta”, accetti di memorizzare tutti i
                cookie sul tuo dispositivo. Il tasto “Rifiuta” chiude il banner,
                continuerai la navigazione in assenza di cookie o altri
                strumenti di tracciamento diversi da quelli tecnici. Negando il
                consenso alcune funzionalità del sito verranno disattivate. Per
                ulteriori informazioni sui cookie consulta la nostra Cookie
                policy.
              </p>
              <div className="flex flex-col-reverse items-center justify-between gap-2 mt-8">
                <button
                  className="font-bold block w-full py-2 px-8 bg-g1100 bg-opacity-30 rounded-lg text-white text-sm text-center"
                  onClick={PreferencesOn}
                >
                  Personalizza cookie
                </button>
                <div className="flex items-center justify-between gap-2 w-full">
                  <button
                    className="font-bold block w-full py-2 px-8 bg-com100 rounded-lg text-white text-sm"
                    onClick={RefuseCookies}
                  >
                    Solo i cookie necessari
                  </button>
                  <button
                    className="font-bold block w-full py-2 px-8 bg-com100 rounded-lg text-white text-sm"
                    onClick={AcceptCookies}
                  >
                    Accetta tutti i cookie
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {showPreferences && (
        <div
          id="banner"
          className=" fixed bottom-0 left-0 pt-16 w-screen h-screen xl:m-4 z-20 grid items-end overflow-scroll xl:overflow-auto"
        >
          <div
            id="preferenze"
            className="text-white xl:max-w-xl bg-black p-8 xl:border xl:border-white xl:rounded-lg col-start-1 row-start-1"
          >
            <div className="">
              <div className="xl:max-w-xl">
                <div>
                  <button
                    className="font-bold block py-2 px-8 border border-white rounded-lg text-white text-sm mb-8"
                    onClick={PreferencesOff}
                  >
                    Indietro
                  </button>
                  <p className="text-xl font-bold my-2">
                    Le tue preferenze relative alla privacy
                  </p>
                  <p className="text-xs xl:text-sm">
                    Questo pannello ti permette di esprimere alcune preferenze
                    relative al trattamento delle tue informazioni personali.
                    Puoi rivedere e modificare le tue scelte in qualsiasi
                    momento accedendo al presente pannello tramite l’apposito
                    link presente nel footer del sito. Per rifiutare il tuo
                    consenso alle attività di trattamento descritte di seguito,
                    disattiva i singoli comandi o utilizza il pulsante “Rifiuta
                    tutto” e conferma di voler salvare le scelte effettuate.
                  </p>
                  <div className="flex items-center justify-between gap-2 w-full mt-4 mb-16">
                    <button
                      className="font-bold block w-full py-2 px-8 border border-white rounded-lg text-white text-sm"
                      onClick={RefuseCookies}
                    >
                      Solo cookie necessari
                    </button>
                    <button
                      className="font-bold block w-full py-2 px-8 border border-white rounded-lg text-white text-sm"
                      onClick={AcceptCookies}
                    >
                      Accetta tutti i cookie
                    </button>
                  </div>
                  <p className="text-xl font-bold mb-2">
                    Le tue preferenze relative al tracciamento
                  </p>
                  <div className="text-xs xl:text-sm">
                    Questo pannello ti permette di esprimere alcune preferenze
                    relative al trattamento delle tue informazioni personali.
                    Puoi rivedere e modificare le tue scelte in qualsiasi
                    momento accedendo al presente pannello tramite l’apposito
                    link presente nel footer del sito. Per rifiutare il tuo
                    consenso alle attività di trattamento descritte di seguito,
                    disattiva i singoli comandi o utilizza il pulsante “Rifiuta
                    tutto” e conferma di voler salvare le scelte effettuate.
                    <div className="my-4">
                      {/* NECESSARY */}
                      <div className="py-4 border-y border-g900">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-sm">Necessari</p>
                          <div className="flex items-center gap-4 text-xs">
                            <button
                              onClick={() =>
                                document
                                  .getElementById("desc-nec")
                                  ?.classList.toggle("hidden")
                              }
                            >
                              Mostra descrizione ▾
                            </button>

                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked
                                disabled
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-g200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-com100 dark:peer-focus:ring-com100 rounded-full peer dark:bg-g900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-g100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-g600 peer-checked:bg-com100 peer-checked:bg-opacity-50"></div>
                            </label>
                          </div>
                        </div>
                        <div>
                          <p id="desc-nec" className="text-xs my-2 hidden">
                            Questi strumenti di tracciamento sono strettamente
                            necessari per garantire il funzionamento e la
                            fornitura del servizio che ci hai richiesto e,
                            pertanto, non richiedono il tuo consenso.
                          </p>
                        </div>
                      </div>

                      {/* ANALYTICS ANON */}
                      <div className=" py-4 border-y border-g900">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-sm">
                            Misurazione (in forma anonima e aggregata)
                          </p>
                          <div className="flex items-center gap-4 text-xs">
                            <button
                              onClick={() =>
                                document
                                  .getElementById("desc-ana-anon")
                                  ?.classList.toggle("hidden")
                              }
                            >
                              Mostra descrizione ▾
                            </button>

                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked
                                disabled
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-g200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-com100 dark:peer-focus:ring-com100 rounded-full peer dark:bg-g900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-g100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-g600 peer-checked:bg-com100 peer-checked:bg-opacity-50"></div>
                            </label>
                          </div>
                        </div>
                        <div>
                          <p id="desc-ana-anon" className="text-xs my-2 hidden">
                            Utilizzati unicamente in forma aggregata e anonima
                            per ottenere dati statistici in merito alle visite
                            al nostro sito. In particolare, l’indirizzo IP
                            raccolto tramite questi Cookie viene opportunamente
                            anonimizzato, in modo da escluderne la
                            riconducibilità al singolo utente. Questi tipi di
                            Cookie sono equiparabili ai Cookie tecnici e
                            pertanto non è necessario il previo consenso da
                            parte dell’utente.
                          </p>
                        </div>
                      </div>

                      {/* EXPERIENCE */}
                      <div className="py-4 border-b border-g900">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-sm">Esperienza</p>
                          <div className="flex items-center gap-4 text-xs">
                            <button
                              onClick={() =>
                                document
                                  .getElementById("desc-esp")
                                  ?.classList.toggle("hidden")
                              }
                            >
                              Mostra descrizione ▾
                            </button>

                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                id="experience"
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-g200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-com200 dark:peer-focus:ring-com100 rounded-full peer dark:bg-g900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-g100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-g600 peer-checked:bg-com100"></div>
                            </label>
                          </div>
                        </div>
                        <div>
                          <p id="desc-esp" className="text-xs my-2 hidden">
                            Questi strumenti di tracciamento ci permettono di
                            migliorare la qualità della tua esperienza utente e
                            consentono le interazioni con piattaforme, reti e
                            contenuti esterni.
                          </p>
                        </div>
                      </div>

                      {/* ANALYTIC */}
                      <div className="py-4 border-b border-g900">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-sm">Misurazione</p>
                          <div className="flex items-center gap-4 text-xs">
                            <button
                              onClick={() =>
                                document
                                  .getElementById("desc-mis")
                                  ?.classList.toggle("hidden")
                              }
                            >
                              Mostra descrizione ▾
                            </button>

                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                id="analytics"
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-g200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-com200 dark:peer-focus:ring-com100 rounded-full peer dark:bg-g900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-g100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-g600 peer-checked:bg-com100"></div>
                            </label>
                          </div>
                        </div>
                        <div>
                          <p id="desc-mis" className="text-xs my-2 hidden">
                            Questi strumenti di tracciamento ci permettono di
                            misurare il traffico e analizzare il tuo
                            comportamento per migliorare il nostro servizio.
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      className="font-bold block w-full py-2 px-8 bg-com100 rounded-lg text-white text-sm"
                      onClick={CookiePreferences}
                    >
                      Conferma le tue preferenze
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
