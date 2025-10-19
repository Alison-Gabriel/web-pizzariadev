import { RefreshCw } from "lucide-react";

import { Button } from "@/components/common/Button";

import { Orders } from "./components/Orders";

const Dashboard = () => {
  return (
    <main className="mx-auto mt-5 max-w-[720px] space-y-3 px-4">
      <div className="flex items-center gap-2">
        <h1 className="text-brand-white text-2xl font-semibold">Pedidos</h1>

        <Button.Root color="link" size="icon">
          <Button.Icon
            icon={RefreshCw}
            className="text-brand-green-900 size-5"
          />
        </Button.Root>
      </div>

      <Orders />
    </main>
  );
};

export default Dashboard;
