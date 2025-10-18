import { ReactNode } from "react";

import { Header } from "./components/Header";

interface DashboardLayout {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayout) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DashboardLayout;
