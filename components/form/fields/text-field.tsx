import React from "react";
import { useFieldContext } from "../";
import { FieldErrors } from "./field-errors";

type TextFieldProps = {
  label: string;
  tooltip?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({
  label,
  tooltip,
  ...inputProps
}: TextFieldProps) => {
  const field = useFieldContext<string>();

  return (
    <div className="space-y-2 mb-4">
      <div className="space-y-1">
        <label className="block text-sm text-g600 mb-1" htmlFor={field.name}>
          {label}
        </label>
        <input
          className="w-full py-2 px-4 bg-g1200 border border-g1100 rounded-md text-g600 text-sm focus:text-white"
          id={field.name}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          {...inputProps}
        />
      </div>
      <FieldErrors meta={field.state.meta} />
    </div>
  );
};
