import { useFormContext } from "../";
import { useStore } from "@tanstack/react-store";

type SubmitButtonProps = {
  children: React.ReactNode;
};

export const SubmitButton = ({ children }: SubmitButtonProps) => {
  const form = useFormContext();

  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);
  const canSubmit = useStore(form.store, (state) => state.canSubmit);

  return (
    <button
      className="px-8 py-2 text-g400 bg-g1100 bg-opacity-50 rounded-md text-sm border border-g1100"
      type="submit"
    // disabled={isSubmitting || !canSubmit}
    >
      {isSubmitting ? "Un secondo..." : children}
    </button>
  );
};
