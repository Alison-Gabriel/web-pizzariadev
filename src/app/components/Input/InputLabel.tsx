import { ComponentProps, ReactNode } from "react";

interface InputLabelProps {
  htmlFor: ComponentProps<"label">["htmlFor"];
  children: ReactNode;
}

const InputLabel = ({ htmlFor, children }: InputLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-brand-white mb-1 text-sm font-semibold"
    >
      {children}
    </label>
  );
};

export { InputLabel };
