import { ReactNode } from "react";

interface InputLabelProps {
  inputId: string;
  children: ReactNode;
}

const InputLabel = ({ inputId, children }: InputLabelProps) => {
  return (
    <label
      htmlFor={inputId}
      className="text-brand-white mb-1 text-sm font-semibold"
    >
      {children}
    </label>
  );
};

export { InputLabel };
