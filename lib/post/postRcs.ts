"use server";

import axios from "axios";

export async function postRcs(richiestaRaw: any) {
  const richiesta = JSON.parse(richiestaRaw);
  const res = await axios.post(
    "https://cms.liber.consulting/api/collections/Richieste/records",
    {
      Nome: richiesta.Nome,
      Cognome: richiesta.Cognome,
      Email: richiesta.Email,
      Telefono: richiesta.Telefono,
      Richiesta: richiesta.Richiesta,
      Pagina: richiesta.Pagina,
      Iscritto: richiesta.Iscritto,
      Consenso: richiesta.Consenso,
    }
  );
  if (res.status === 200) {
    return true;
  } else {
    return false;
  }
}
