"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function Providers({ children }: any) {
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey="6Lc9hrInAAAAAHMB_v7KmZrDOUYU_30apJo2AtgG"
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "body",
          nonce: undefined,
        }}
      >
        {children}
      </GoogleReCaptchaProvider>
    </>
  );
}
