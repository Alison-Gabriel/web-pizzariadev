"use client";

import { ChevronDown } from "lucide-react";
import { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CategoriesSelectorProps extends ComponentPropsWithRef<"select"> {
  children: ReactNode;
}

export const CategoriesSelector = ({
  ref,
  name,
  children,
  ...props
}: CategoriesSelectorProps) => {
  return (
    <div className="bg-brand-dark-900 relative flex w-full items-center justify-between rounded-lg shadow-md">
      <select
        {...props}
        ref={ref}
        name={name}
        className={twMerge(
          "text-brand-white focus:outline-brand-white/20 border-brand-gray-100 focus:border-brand-white placeholder:text-brand-gray-100 size-full appearance-none rounded-lg border px-2.5 py-1.5 focus:outline-2",
          props.className,
        )}
      >
        {children}
      </select>

      <ChevronDown className="text-brand-gray-100 absolute right-2.5 size-5" />
    </div>
  );
};
