import { notFound } from "next/dist/client/components/navigation";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string; reviewid: string }>;
}) {
  const { id } = await params;
  const { reviewid } = await params;
  if (parseInt(reviewid) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Product Details for Product ID: {id} review ID: {reviewid}
      </h1>
    </>
  );
}
