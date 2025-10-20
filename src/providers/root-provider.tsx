"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "sonner";

interface RootProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-right" theme="system" closeButton richColors />
      {children}
    </QueryClientProvider>
  );
};

export default RootProvider;
