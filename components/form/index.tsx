import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

import { TextField } from "./fields/text-field";
import { SubmitButton } from "./fields/submit-button";
import Turnstile from "./fields/turnstile";

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    Turnstile,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
