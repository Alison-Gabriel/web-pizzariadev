import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { logout } from "@/actions/logout";
import { Button } from "@/components/common/Button";

export const Header = () => {
  return (
    <header className="h-14 w-full">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/">
          <Image
            src="/logo-pizzaria.svg"
            alt="Logo Pizzaria"
            quality={100}
            width={190}
            height={60}
            priority
          />
        </Link>

        <nav className="flex items-center gap-3.5">
          <Link
            className="text-brand-white hover:text-brand-red-900 transition-all"
            href="/dashboard/categories"
          >
            Categorias
          </Link>

          <Link
            className="text-brand-white hover:text-brand-red-900 transition-all"
            href="/dashboard/products"
          >
            Produtos
          </Link>

          <form action={logout}>
            <Button.Root color="ghost" size="icon">
              <Button.Icon icon={LogOut} />
            </Button.Root>
          </form>
        </nav>
      </div>
    </header>
  );
};
