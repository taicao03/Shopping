import DetailProduct from "@/components/pages/product";
import { getOneProduct } from "../api/product/product";
export default async function Product() {
  const product = await getOneProduct();
  return (
    <div className="main_container">
      <DetailProduct props={product} />
    </div>
  );
}
