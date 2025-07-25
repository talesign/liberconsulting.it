"use-client";

import { useEffect, useRef, useState } from "react";
import { useFieldContext } from "../";
import { FieldErrors } from "./field-errors";
import type { TurnstileOptions } from "../types";

export default function Turnstile() {
  const field = useFieldContext<string>();
  const key = process.env.NEXT_PUBLIC_TURNSTILE_CLIENT_KEY;
  const ref = useRef<HTMLDivElement>(null);
  const [widgetId, setWidgetId] = useState<string | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (window.turnstile) {
      setIsScriptLoaded(true);
      return;
    }

    window.onloadTurnstileCallback = () => {
      console.log("Turnstile script loaded via callback.");
      setIsScriptLoaded(true);
    };
  }, []);

  useEffect(() => {
    if (!ref.current || !window.turnstile || !isScriptLoaded) {
      console.warn("Turnstile script not loaded.");
      return;
    }

    const turnstileOptions: TurnstileOptions = {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_CLIENT_KEY as string,
      callback: (token: string) => {
        console.log("Turnstile success. Token: ", token);
        field.handleChange(token);
      },
      "error-callback": () => {
        console.error("Turnstile challenge failed.");
        field.handleChange("");
        // TODO: set error
      },
      "expired-callback": () => {
        console.error("Failed to render Turnstile widget.");
        // TODO: set error again...
      },
    };

    const id = window.turnstile.render(ref.current, turnstileOptions);
    if (id) {
      setWidgetId(id);
    } else {
      console.error("Failed to render Turnstile widget.");
      // TODO: set error again...
    }

    return () => {
      if (widgetId && window.turnstile) {
        console.log("Removing turnstile widget: ", widgetId);
        window.turnstile.remove(widgetId);
        setWidgetId(null);
      }
    };
  }, [isScriptLoaded]);

  return (
    <>
      {key === undefined && (
        <div className="bg-red-100">
          NEXT_PUBLIC_TURNSTILE_CLIENT_KEY not defined
        </div>
      )}
      <script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onloadTurnstileCallback"
        async
        defer
      />
      <div ref={ref} id={`turnstile-container-${field.name}`}></div>
      <FieldErrors meta={field.state.meta} />
    </>
  );
}
