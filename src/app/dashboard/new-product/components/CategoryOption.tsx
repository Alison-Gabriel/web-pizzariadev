"use client";

import { CategoryResponse } from "@/types/api";

interface CategoryOptionProps {
  category: CategoryResponse;
}

export const CategoryOption = ({ category }: CategoryOptionProps) => {
  return <option value={category.id}>{category.name}</option>;
};
