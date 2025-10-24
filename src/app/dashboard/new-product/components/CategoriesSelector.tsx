"use client";

import { ChevronDown } from "lucide-react";
import { ComponentPropsWithRef, ReactNode } from "react";

interface CategoriesSelectorProps extends ComponentPropsWithRef<"select"> {
  children: ReactNode;
}

export const CategoriesSelector = ({
  children,
  ...props
}: CategoriesSelectorProps) => {
  return (
    <div className="bg-brand-dark-900 relative flex w-full items-center justify-between rounded-lg shadow-md">
      <select
        {...props}
        className="text-brand-white focus:outline-brand-white/20 border-brand-gray-100 focus:border-brand-white placeholder:text-brand-gray-100 size-full appearance-none rounded-lg border px-2.5 py-1.5 focus:outline-2"
      >
        {children}
      </select>
      <ChevronDown className="text-brand-gray-100 absolute right-2.5 size-5" />
    </div>
  );
};
