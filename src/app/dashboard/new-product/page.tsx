import { getCategories } from "@/actions/get-categories";

import { NewProductForm } from "./components/NewProductForm";

const NewProduct = async () => {
  const { data: categories } = await getCategories();

  return (
    <main className="mx-auto my-5 flex max-w-3xl flex-col justify-center gap-3 px-4">
      <h1 className="text-brand-white text-2xl font-semibold">Novo produto</h1>
      <NewProductForm categories={categories} />
    </main>
  );
};

export default NewProduct;
