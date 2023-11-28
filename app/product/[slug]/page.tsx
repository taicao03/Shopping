import DetailProduct from "@/components/pages/product";
import { getOneProduct } from "@/app/api/product/product";

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getOneProduct({
    productId: params?.slug,
  });

  return (
    <div className="main_container">
      <DetailProduct props={product} />
    </div>
  );
}
