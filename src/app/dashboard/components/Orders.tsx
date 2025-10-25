import { getOrders } from "@/actions/get-orders";

import { Order } from "./Order";

export const Orders = async () => {
  const { data: orders } = await getOrders();

  return (
    <section>
      <ul className="flex flex-col gap-2">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </ul>
    </section>
  );
};
