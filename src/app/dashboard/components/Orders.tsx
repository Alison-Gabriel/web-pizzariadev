import { ExternalLink } from "lucide-react";

import { Button } from "@/components/common/Button";

export const Orders = () => {
  return (
    <section>
      <ul className="flex flex-col gap-2">
        <li className="bg-brand-dark-900 text-brand-white flex h-11 items-center rounded-lg pr-2 shadow-md">
          <div className="bg-brand-green-900 mr-3.5 h-11 w-1 rounded-tl-lg rounded-bl-lg" />

          <div className="flex flex-1 justify-between">
            <strong className="text-lg">Mesa 10</strong>
            <Button.Root color="ghost" size="icon">
              <Button.Icon
                icon={ExternalLink}
                className="text-brand-gray-100 size-5"
              />
            </Button.Root>
          </div>
        </li>

        <li className="bg-brand-dark-900 text-brand-white flex h-11 items-center rounded-lg pr-2 shadow-md">
          <div className="bg-brand-green-900 mr-3.5 h-11 w-1 rounded-tl-lg rounded-bl-lg" />

          <div className="flex flex-1 justify-between">
            <strong className="text-lg">Mesa 10</strong>
            <Button.Root color="ghost" size="icon">
              <Button.Icon
                icon={ExternalLink}
                className="text-brand-gray-100 size-5"
              />
            </Button.Root>
          </div>
        </li>
      </ul>
    </section>
  );
};
