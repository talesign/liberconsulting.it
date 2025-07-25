import PocketBase from "pocketbase";
const url = "https://cms.liber.consulting";
export const pb = new PocketBase(url);

export async function createRichiesta(Content: any) {
  const authData = await pb.admins.authWithPassword(
    "o.taleghani@talesign.com",
    "bLaM33tj$b?xS&DhsSG&"
  );
  const data: any = {
    Nome: `${Content.Nome}`,
    Cognome: `${Content.Cognome}`,
    Email: `${Content.Email}`,
    Telefono: `${Content.Telefono}`,
    Richiesta: `${Content.Richiesta}`,
    Iscritto: Content.Iscritto,
    Consenso: `${Content.Consenso}`,
  };
  await pb.collection("Richieste").create(data);
}

export async function saveCookieConsent(Identificativo: any, Consenso: any) {
  try {
    const authData = await pb.admins.authWithPassword(
      "o.taleghani@talesign.com",
      "bLaM33tj$b?xS&DhsSG&"
    );
    const cookieData: any = {
      Identificativo: `${Identificativo}`,
      Consenso: `${Consenso}`,
    };
    const writeCookie = await pb.collection("Cookies").create(cookieData);

    return writeCookie;
  } catch (err) {
    return err;
  }
}
