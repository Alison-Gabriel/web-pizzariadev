import Link from "next/link";

import { AuthenticationForm } from "./components/AuthenticationForm";

const Authentication = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 py-5">
      <section className="flex max-w-full min-w-2xl flex-col items-center gap-6">
        <AuthenticationForm />
        <p>
          <Link href="/account/create">Crie sua conta</Link>
        </p>
      </section>
    </div>
  );
};

export default Authentication;
