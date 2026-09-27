"use client";
import { usePathname } from "next/navigation";
export default function notFound() {
  const pathname = usePathname();

  const productId = pathname.split("/")[2];

  const reviewId = pathname.split("/")[4];
  return (
    <>
      <div>
        <h1>Review not found</h1>
        <p>
          Review: {reviewId} not found for Product ID: {productId}
        </p>
      </div>
    </>
  );
}
