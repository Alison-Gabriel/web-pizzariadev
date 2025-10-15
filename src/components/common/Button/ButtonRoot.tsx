import { ReactNode } from "react";

interface ButtonRootProps {
  children: ReactNode;
}

const ButtonRoot = ({ children }: ButtonRootProps) => {
  return (
    <button className="bg-brand-red-900 text-brand-white flex items-center justify-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-semibold shadow-lg transition-all hover:opacity-85">
      {children}
    </button>
  );
};

export { ButtonRoot };
