import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonRoot = tv({
  base: "flex items-center justify-center gap-1 rounded-lg  text-sm font-semibold shadow-lg transition-all hover:opacity-85",
  variants: {
    variant: {
      primary: "px-2.5 py-1.5 bg-brand-red-900 text-brand-white",
      icon: "p-1.5 shadow-none bg-transparent text-brand-white shadow-0 hover:bg-brand-gray-100/10",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonRootProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonRoot> {
  children: ReactNode;
}

const ButtonRoot = ({ children, variant, ...props }: ButtonRootProps) => {
  return (
    <button {...props} className={buttonRoot({ variant })}>
      {children}
    </button>
  );
};

export { ButtonRoot };
