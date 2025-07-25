"use server";

import axios from "axios";

export async function postCkc(Identificativo: any, CookieConsentRaw: any) {
  const CookieConsent = JSON.parse(CookieConsentRaw);
  const res = await axios.post(
    "https://cms.liber.consulting/api/collections/Cookies/records",
    {
      Identificativo: Identificativo,
      Consenso: CookieConsentRaw,
    }
  );
  if (res.status === 200) {
    return true;
  } else {
    return false;
  }
}
