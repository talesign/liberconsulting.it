"use client";

// React
import { useState } from "react";

// NextJs
import Image from "next/image";
import Link from "next/link";

let dropdownList = [
  {
    name: "Realizzazione siti web",
    description: "Proefessionali e scalabili",
    url: "/servizi/realizzazione-siti-web",
  },
  {
    name: "Inbound Marketing",
    description: "Comunicazione digitale per la tua azienda",
    url: "/servizi/inbound-marketing",
  },
  {
    name: "Property management",
    description: "Gestione del tuo immobile",
    url: "/servizi/property-management",
  },
  {
    name: "Pulizie Firenze",
    description: "Ordinarie, straordinarie e post-ristrutturazione",
    url: "/servizi/pulizie-firenze",
  },
  {
    name: "Efficientamento energetico",
    description: "Energia per il tuo immobile",
    url: "/servizi/efficientamento-energetico",
  },
  {
    name: "Valutazione acustica",
    description: "Valutazione dell'impatto acustico",
    url: "/servizi/valutazione-acustica",
  },
  {
    name: "Altro",
    description: "Scopri tutti i nostri servizi",
    url: "/servizi",
  },
];
let navbarItems = [
  { name: "Dipartimenti", url: "/dipartimenti" },
  { name: "Partner", url: "/partner" },
  { name: "Chi siamo", url: "/partner/liber" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showDropdown, setshowDropdown] = useState(true);

  function toggleNav() {
    let navbarIcon = document.getElementById("navbarIcon") as HTMLImageElement;
    if (showNavbar === true) {
      navbarIcon.src = "/images/Hamburger-Closed.svg";
      document.getElementById("navbar")!.classList.remove("hidden");
      setShowNavbar(!showNavbar);
    } else {
      navbarIcon.src = "/images/Hamburger.svg";
      document.getElementById("navbar")!.classList.add("hidden");
      setShowNavbar(!showNavbar);
    }
  }

  function toggleDropdown() {
    let dropdownImage = document.getElementById(
      "dropdownImage",
    ) as HTMLImageElement;
    setshowDropdown(!showDropdown);
    if (showDropdown === true) {
      document.getElementById("dropdown")!.classList.add("showDropdown");
      dropdownImage.src = "/images/Dropdown-Icon-Closed.svg";
    } else {
      document.getElementById("dropdown")!.classList.remove("showDropdown");
      dropdownImage.src = "/images/Dropdown-Icon.svg";
    }
  }

  function closeAll() {
    toggleDropdown();
    toggleNav();
  }

  return (
    <div className="border-b border-g1100 bg-black/[.8] backdrop-blur-sm backdrop-saturate-150 relative z-50">
      <header className="z-10 navbar-container sticky top-0 ">
        <Link className="flex px-6 py-4" href="/">
          <Image
            className="w-16"
            src="/images/Liber-Logo-White.svg"
            width={115}
            height={41}
            alt="Liber Logo"
          />
        </Link>
        <div className="px-6 py-4 flex justify-end h-full w-full xl:hidden">
          <Image
            className="w-6"
            id="navbarIcon"
            src="/images/Hamburger.svg"
            width={30}
            height={41}
            alt="Hamburger"
            onClick={toggleNav}
          />
        </div>
        <div
          id="navbar"
          className="pr-0 xl:pr-6 overflow-y-scroll xl:overflow-visible pb-96 xl:pb-0 h-screen xl:h-auto col-span-2 xl:col-span-9 xl:flex justify-between items-center hidden"
        >
          <nav className=" xl:flex xl:gap-10 xl:flex-row items-center">
            <div>
              <button
                className="border-t xl:border-0 border-g1100 flex items-center justify-between text-g500 hover:text-white px-6 py-4 xl:py-2 text-sm w-full"
                onClick={toggleDropdown}
              >
                Servizi
                <Image
                  alt="lol"
                  height="10"
                  width="10"
                  id="dropdownImage"
                  src="/images/Dropdown-Icon.svg"
                  className="xl:ml-2"
                ></Image>
              </button>
              <div
                id="dropdown"
                className="bg-g1200 xl:bg-black hidden xl:absolute xl:grid-cols-2 xl:gap-2 xl:p-4 xl:mt-6 text-sm xl:border xl:border-g1100 xl:rounded-xl"
              >
                {dropdownList.map((navbarItem: any) => (
                  <Link
                    key={navbarItem.name}
                    href={`${navbarItem.url}`}
                    onClick={closeAll}
                    className="px-10 py-4 bg-g1200 xl:bg-black hover:bg-white/[.06] border-t xl:border-0 border-g1100 xl:rounded-lg"
                  >
                    <div className="font-bold">{navbarItem.name}</div>
                    <div className="hidden xl:block">
                      {navbarItem.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <>
              {navbarItems.map((NavLink: any) => (
                <Link
                  //onClick={console.log("ayy")}
                  href={`${NavLink.url}`}
                  key={NavLink.name}
                  className="block text-g500 hover:text-white border-t xl:border-0 border-g1100 text-sm xl:rounded-full px-6 py-4 xl:py-2 "
                >
                  {NavLink.name}
                </Link>
              ))}
            </>
          </nav>
          <div className="hidden xl:block">
            <Link
              href={"/contatti"}
              className="text-sm bg-white text-black p-2 rounded-md font-bold tracking-wide"
            >
              Contatti
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
