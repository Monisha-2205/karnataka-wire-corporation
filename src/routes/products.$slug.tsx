import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProductPage } from "@/components/product-page";
import { products } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.name} | KWC` : "Product | KWC" },
      { name: "description", content: loaderData?.description ?? "Quality fencing products from Karnataka Wire Corporation." },
      { property: "og:title", content: loaderData ? `${loaderData.name} | Karnataka Wire Corporation` : "KWC Product" },
      { property: "og:description", content: loaderData?.description ?? "Quality fencing products from Karnataka Wire Corporation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductRoute,
});

function ProductRoute() { return <ProductPage product={Route.useLoaderData()} />; }