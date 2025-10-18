import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonRoot = tv({
  base: "flex items-center justify-center gap-1 text-sm transition-all",
  variants: {
    color: {
      ghost: "bg-transparent text-brand-white hover:bg-brand-gray-100/10",
      link: "bg-transparent text-brand-white hover:brightness-70",
      primary:
        "shadow-md bg-brand-red-900 hover:opacity-90 text-brand-white  font-semibold",
    },
    size: {
      default: "px-2.5 py-1.5 rounded-lg",
      icon: "p-1.5 rounded-md",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "default",
  },
});

interface ButtonRootProps
  extends Omit<ComponentProps<"button">, "color">,
    VariantProps<typeof buttonRoot> {
  children: ReactNode;
}

const ButtonRoot = ({ children, color, size, ...props }: ButtonRootProps) => {
  return (
    <button {...props} className={buttonRoot({ color, size })}>
      {children}
    </button>
  );
};

export { ButtonRoot };
