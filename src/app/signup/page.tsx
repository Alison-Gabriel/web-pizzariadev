import Image from "next/image";
import Link from "next/link";

import { SignUpForm } from "./components/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-5">
      <Image
        src="/logo-pizzaria.svg"
        height={90}
        width={335}
        alt="Logo Pizzaria"
      />

      <section className="flex w-2xl max-w-full flex-col items-center gap-6">
        <SignUpForm />

        <p className="text-brand-white flex items-center justify-center gap-1 text-sm">
          Já possui uma conta?
          <Link
            href="/"
            className="text-brand-red-900 font-semibold hover:underline"
          >
            Entre por aqui
          </Link>
        </p>
      </section>
    </div>
  );
};

export default SignUp;
