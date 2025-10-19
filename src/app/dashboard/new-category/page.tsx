import { NewCategoryForm } from "../components/NewCategoryForm";

const NewCategory = () => {
  return (
    <main className="mx-auto my-5 flex max-w-3xl flex-col justify-center gap-3 px-4">
      <h1 className="text-brand-white text-2xl font-semibold">
        Nova categoria
      </h1>

      <NewCategoryForm />
    </main>
  );
};

export default NewCategory;
