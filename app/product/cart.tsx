import { getCart } from "@/app/actions/cart";
import Content from "@/components/nav/cart";
export default async function Cart() {
  const dataCart = await getCart();

  return (
    <>
      <Content data={dataCart} />
    </>
  );
}
