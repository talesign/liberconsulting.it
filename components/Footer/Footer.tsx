"use client";
import dynamic from "next/dynamic";
const CookieBanner = dynamic(() => import("../Utility/cookie-banner"), {
  ssr: false,
});
//import CookieBanner from "../Utility/cookie-banner";
import FooterColumn from "./FooterColumn";

let Column1Title = "Liber Consulting";
let Column2Title = "Dipartimenti"; //Qui potrei fare una API call a PocketBase
let Column3Title = "Esplora";
let Column4Title = "Azienda";
let Column1Links = [
  {
    name: "Via di Grignano, 20, 50065, Pontassieve, Firenze",
    url: "https://goo.gl/maps/EyoHYc5f1iPd5Nz37",
  },
  {
    name: "Telefono: 333 265 8707",
    url: "tel:+393332658707",
  },
  {
    name: "Email: info@liber.consulting",
    url: "mailto:info@liber.consulting",
  },
];
let Column2Links = [
  {
    name: "Immobiliare",
    url: "/dipartimenti/immobiliare",
  },
  {
    name: "Ambiente",
    url: "/dipartimenti/ambiente",
  },
  {
    name: "Comunicazione",
    url: "/dipartimenti/comunicazione",
  },
];
let Column3Links = [
  {
    name: "Dipartimenti",
    url: "/dipartimenti",
  },
  {
    name: "Servizi",
    url: "/servizi",
  },
  {
    name: "Partner",
    url: "/partner",
  },
  {
    name: "Extra",
    url: "/extra",
  },
];
let Column4Links = [
  {
    name: "Chi siamo",
    url: "/chi-siamo",
  },
  {
    name: "Contatti",
    url: "/contatti",
  },
  {
    name: "Legal",
    url: "/legal",
  },
];

export default function Footer() {
  return (
    <>
      <div className="border-t text-g800 bg-g1200 border-g1100 ">
        <footer className="container grid xl:grid-cols-5 gap-4">
          <div className="py-4 xl:col-span-2">
            <FooterColumn
              FooterLinks={Column1Links}
              FooterTitle={Column1Title}
            />
          </div>
          <div className="py-4">
            <FooterColumn
              FooterLinks={Column2Links}
              FooterTitle={Column2Title}
            />
          </div>
          <div className="py-4">
            <FooterColumn
              FooterLinks={Column3Links}
              FooterTitle={Column3Title}
            />
          </div>
          <div className="py-4">
            <FooterColumn
              FooterLinks={Column4Links}
              FooterTitle={Column4Title}
            />
          </div>
        </footer>
      </div>
    </>
  );
}
