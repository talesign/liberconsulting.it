"use client";

// import { useRouter } from "next/navigation";
import { useState } from "react";
import { Check, X } from  "lucide-react";

// CAPTCHA
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import { verifyCaptchaAction } from "@/lib/post/recaptcha";
// import { postRcs } from "@/lib/post/postRcs";
import z from "zod";
import { useAppForm } from "../form";
import { SubmitData, submit } from "../form/actions";

// export default function Form() {
//   const router = useRouter();
//   const [Nome, setNome] = useState("");
//   const [Cognome, setCognome] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Telefono, setTelefono] = useState("");
//   const [Richiesta, setRichiesta] = useState("");
//   const [Iscritto, setIscritto] = useState(false);
//
//   const handleChangeNome = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNome(event?.target?.value);
//   };
//   const handleChangeCognome = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCognome(event?.currentTarget?.value);
//   };
//   const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.target.value);
//   };
//   const handleChangeTelefono = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setTelefono(event.target.value);
//   };
//   const handleChangeRichiesta = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setRichiesta(event.target.value);
//   };
//   const handleChangeIscritto = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setIscritto(!Iscritto);
//   };
//
//   const { executeRecaptcha } = useGoogleReCaptcha();
//
//   async function handleSubmit(e: any) {
//     e.preventDefault();
//     if (!executeRecaptcha) {
//       alert("ReCaptcha non è disponibile. Riprova più tardi.");
//       return;
//     }
//
//     const token = await executeRecaptcha("onSubmit");
//     const verified = await verifyCaptchaAction(token);
//
//     if (verified) {
//       const randomNumber = new String(
//         Math.floor(Math.random() * (999 - 101)) + 101
//       );
//       const currentDate = new Date().toISOString();
//       const ConsentIdentifier = currentDate.concat(
//         "-",
//         randomNumber.toString()
//       );
//       const ConsentRecord = {
//         SCOPED_ID: ConsentIdentifier,
//         LEGAL_NOTICES: "privacy-policy",
//         PREFERENCES: {
//           MARKETING: Iscritto,
//         },
//         PROOFS: {
//           FORM: String(document.getElementById("form")?.outerHTML),
//           PAGE_URL: window.location,
//           IP_ADDRESS: "",
//           USER_AGENT: navigator.userAgent,
//         },
//       };
//       const writeRichiesta = JSON.stringify({
//         Nome: Nome,
//         Cognome: Cognome,
//         Email: Email,
//         Telefono: Telefono,
//         Richiesta: Richiesta,
//         Pagina: window.location.pathname,
//         Iscritto: Iscritto,
//         Consenso: JSON.stringify(ConsentRecord),
//       });
//
//       const postResponse = await postRcs(writeRichiesta);
//       if (postResponse) {
//         router.push("/grazie");
//       } else {
//         alert(
//           "Errore: I nostri server sono al momento occupati. Riprova più tardi o usa un metodo di contatto alternativo."
//         );
//       }
//     } else {
//       alert(
//         "Errore: richiesta non inviata in quanto non siamo riusciti a capire se sei umano o meno."
//       );
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit} className="grid gap-8" id="form">
//       <div className="col-start-1 row-start-1 bg-gradient-to-r from-com100 via-com200 to-70% to-black rounded-2xl"></div>
//       <div className=" p-8 m-0.5 rounded-2xl col-start-1 row-start-1 bg-black">
//         <div className="mb-4 block">
//           <label htmlFor="Nome" className="block text-sm text-g600 mb-1">
//             Nome
//           </label>
//           <input
//             className="w-full py-2 px-4 bg-g1200 border border-g1100 rounded-md text-g600 text-sm focus:text-white"
//             type="text"
//             id="Nome"
//             name="Nome"
//             value={Nome}
//             onChange={handleChangeNome}
//             onBlur={handleChangeNome}
//             maxLength={30}
//             required
//           />
//         </div>
//         <div className="mb-4 block">
//           <label htmlFor="Cognome" className="block text-sm text-g600 mb-1">
//             Cognome
//           </label>
//           <input
//             className="w-full py-2 px-4 bg-g1200 border border-g1100 rounded-md text-g600 text-sm focus:text-white"
//             type="text"
//             id="Cognome"
//             name="Cognome"
//             value={Cognome}
//             onChange={handleChangeCognome}
//             onBlur={handleChangeCognome}
//             maxLength={30}
//             required
//           />
//         </div>
//         <div className="mb-4 block">
//           <label htmlFor="Email" className="block text-sm text-g600 mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             name="Email"
//             value={Email}
//             onChange={handleChangeEmail}
//             onBlur={handleChangeEmail}
//             id="Email"
//             className="w-full py-2 px-4 bg-g1200 border border-g1100 rounded-md text-g600 text-sm focus:text-white"
//             required
//           />
//         </div>
//         <div className="mb-4 block">
//           <label htmlFor="Telefono" className="block text-sm text-g600 mb-1">
//             Telefono
//           </label>
//           <input
//             className="w-full py-2 px-4 bg-g1200 border border-g1100 rounded-md text-g600 text-sm focus:text-white"
//             type="text"
//             id="Telefono"
//             name="Telefono"
//             value={Telefono}
//             onChange={handleChangeTelefono}
//             onBlur={handleChangeTelefono}
//             maxLength={15}
//             minLength={6}
//             pattern="[0-9.+]+"
//             required
//           />
//         </div>
//         <div className="mb-4 block">
//           <label htmlFor="Richiesta" className="block text-sm text-g600 mb-1">
//             Richiesta
//           </label>
//           <input
//             className="w-full py-2 px-4 bg-g1200 border border-g1100 rounded-md text-g600 text-sm focus:text-white"
//             type="text"
//             id="Richiesta"
//             name="Richiesta"
//             value={Richiesta}
//             onChange={handleChangeRichiesta}
//             onBlur={handleChangeRichiesta}
//             required
//           />
//           <input type="hidden" name="URL" data-name="URL" id="URL" />
//           <input type="hidden" name="Pagina" data-name="Pagina" id="Pagina" />
//         </div>
//         <div className="mb-4 flex items-center justify-start gap-4">
//           <input
//             className=""
//             type="checkbox"
//             id="Iscritto"
//             name="Iscritto"
//             onChange={handleChangeIscritto}
//           />
//           <label htmlFor="Iscritto" className="tet-sm text-g600">
//             Sì, desidero ricevere offerte speciali e essere informato su
//             promozioni e novità (facoltativo)
//           </label>
//         </div>
//         <button
//           className="px-8 py-2 text-g400 bg-g1100 bg-opacity-50 rounded-md text-sm border border-g1100"
//           type="submit"
//         >
//           Invia
//         </button>
//       </div>
//
//       <div className="text-g600">
//         <p className="text-sm">
//           Cliccando sul pulsante "Invia" si accetta le{" "}
//           <a className="underline" href="https://policies.google.com/privacy">
//             Norme sulla privacy
//           </a>{" "}
//           di questo sito.
//         </p>
//         <p className="text-sm">
//           Questo sito è protetto da reCAPTCHA. Si applicano le{" "}
//           <a className="underline" href="https://policies.google.com/privacy">
//             Norme sulla privacy
//           </a>{" "}
//           e i{" "}
//           <a className="underline" href="https://policies.google.com/terms">
//             Termini di servizio
//           </a>{" "}
//           di Google.
//         </p>
//       </div>
//     </form>
//   );
// }

const dataSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email("Inserisci un'email valida"),
  phone: z.string(),
  body: z.string(),
  cf_turnstile_response: z.string(),
})
type DataType = z.infer<typeof dataSchema>;
const defaultData: DataType = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  body: "",
  cf_turnstile_response: "",
}

export default function Form() {
  const [success, setSuccess] = useState<boolean | undefined>();
  const form = useAppForm({
    defaultValues: defaultData,
    validators: {
      onSubmit: dataSchema,
    },
    onSubmit: async ({ value }) => {
      const submitData: SubmitData = {
        data: {
          Nome: value.name,
          Cognome: value.surname,
          Email: value.email,
          Telefono: value.phone,
          Informazioni: value.body,
        },
        options: {
          timestamp: new Date().toISOString(),
          form_id: "default_contact_form",
          documents: [],
          evidences: [],
        },
        token: value.cf_turnstile_response,
      };
      const response = await submit(submitData);

      if (response.success) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    },
  });

    return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="grid"
    >
       <div className="col-start-1 row-start-1 bg-gradient-to-r from-com100 via-com200 to-70% to-black rounded-2xl"></div>
       <div className="p-8 m-0.5 rounded-2xl col-start-1 row-start-1 bg-black grid">
        <form.AppField
          name="name"
          children={(field: any) => (
            <field.TextField
              label="Nome"
              placeholder="Inserisci il tuo nome"
            />
          )}
        />

        <form.AppField
          name="surname"
          children={(field: any) => (
            <field.TextField
              label="Cognome"
              placeholder="Inserisci il tuo cognome"
            />
          )}
        />
        <form.AppField
          name="email"
          children={(field: any) => (
            <field.TextField
              label="Email"
              placeholder="La tua email..."
            />
          )}
        />
        <form.AppField
          name="phone"
          children={(field: any) => (
            <field.TextField
              label="Telefono"
              placeholder="Inserisci il tuo telefono"
            />
          )}
        />
      <form.AppField
        name="body"
        children={(field: any) => (
          <field.TextField label="Informationi" placeholder="Di cosa hai bisogno?" />
        )}
      />
      <form.AppField
        name="cf_turnstile_response"
        children={(field: any) => <field.Turnstile />}
      />
      <form.AppForm>
        <form.SubmitButton>Invia</form.SubmitButton>
      </form.AppForm>
      {success !== undefined && success === true && (
        <div className="bg-green-100 p-4 rounded-2xl flex flex-col text-center items-center gap-4 mt-8">
          <Check className="text-green-500 h-4 w-4" />
          <span className="text-green-500">Form inviato con successo!</span>
        </div>
      )}
      {success !== undefined && success === false && (
        <div className="bg-red-100 p-4 rounded-2xl flex flex-col text-center items-center gap-4 mt-8">
          <X className="text-red-500 h-4 w-4" />
          <span className="text-red-500">Errore nell'invio del form. Utilizza un altro metodo per contattarci.</span>
        </div>
      )}

       </div>
    </form>
  );

}
