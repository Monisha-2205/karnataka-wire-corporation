import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";
import { productTranslations, useLanguage } from "@/lib/i18n";

export function ProductPage({ product }: { product: Product }) {
  const { lang, t } = useLanguage();
  const kn = lang === "kn" ? productTranslations[product.slug] : undefined;
  const name = kn?.name ?? product.name;
  const description = kn?.description ?? product.description;
  const uses: readonly string[] = kn?.uses ?? product.uses;
  const features: readonly string[] = kn?.features ?? product.features;

  return (
    <main className="bg-background">
      <div className="site-container py-8 sm:py-12">
        <Link to="/" hash="products" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="size-4" />{t("product.allProducts")}</Link>
        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
          <img src={product.image} width={1024} height={512} alt={name} className="aspect-[2/1] w-full rounded-lg border border-border object-cover shadow-sm" />
          <div><p className="eyebrow">{t("product.eyebrow")}</p><h1 className="mt-2 text-4xl font-black sm:text-5xl">{name}</h1><p className="mt-4 max-w-xl leading-7 text-muted-foreground">{description}</p><Button asChild variant="cta" size="lg" className="mt-6"><a href={`https://wa.me/919900578080?text=${encodeURIComponent(`Hello KWC, I would like to enquire about ${product.name}.`)}`} target="_blank" rel="noreferrer"><MessageCircle />{t("product.enquire")}</a></Button></div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2"><DetailList title={t("product.uses")} items={uses} /><DetailList title={t("product.features")} items={features} /></div>
      </div>
    </main>
  );
}

function DetailList({ title, items }: { title: string; items: readonly string[] }) {
  return <section className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-bold">{title}</h2><ul className="mt-4 grid gap-3">{items.map((item) => <li key={item} className="flex items-center gap-3 text-sm"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-primary"><Check className="size-4" /></span>{item}</li>)}</ul></section>;
}
