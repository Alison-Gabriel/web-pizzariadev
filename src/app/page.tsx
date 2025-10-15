import Image from "next/image";
import Link from "next/link";

import { AuthenticationForm } from "./components/AuthenticationForm";

const Authentication = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-5">
      <Image
        src="/logo-pizzaria.svg"
        height={90}
        width={335}
        alt="Logo Pizzaria"
      />

      <section className="flex w-2xl max-w-full flex-col items-center gap-6">
        <AuthenticationForm />
        <p className="text-brand-white flex items-center justify-center gap-1 text-sm">
          Ainda não possui uma conta?
          <Link
            href="/account/create"
            className="text-brand-red-900 font-semibold hover:underline"
          >
            Crie sua conta
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Authentication;
