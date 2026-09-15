import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bird,
  Clock3,
  Factory,
  House,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { productTranslations, useLanguage } from "@/lib/i18n";
import heroImage from "@/assets/kwc-hero-clean.jpg";

const whatsappQuote =
  "https://wa.me/919900578080?text=" +
  encodeURIComponent(
    "Hello Karnataka Wire Corporation, I would like to get a free quote for fencing."
  );

const whatsappEnquiry =
  "https://wa.me/919900578080?text=" +
  encodeURIComponent(
    "Hello Karnataka Wire Corporation, I would like to enquire about your fencing products."
  );

const applications = [
  {
    key: "app.farm",
    icon: Sprout,
  },
  {
    key: "app.home",
    icon: House,
  },
  {
    key: "app.industry",
    icon: Factory,
  },
  {
    key: "app.poultry",
    icon: Bird,
  },
];

const trust = [
  "trust.quality",
  "trust.supply",
  "trust.applications",
  "trust.customer",
];

const stores = [
  {
    nameKey: "store.nelamangala",
    address:
      "Sy No. 121/26A3, Arasinakunte, Near RNS Motors, Next to Manoj Dhaba, Vijaya Vittala Nagar, Nelamangala Town, Bengaluru, Karnataka - 562123",
    map:
      "https://www.google.com/maps?q=Karnataka+Wire+Corporation+Arasinakunte+Nelamangala+562123&z=17&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Karnataka+Wire+Corporation,+Arasinakunte,+Nelamangala,+Karnataka&destination_place_id=ChIJc6OSzB8lrjsRqkMVpfCXbik",
  },
  {
    nameKey: "store.hoskote",
    address:
      "Sy No. 352, Shiva Garden, Near Maruthi Saw Mill, KHB Colony, Hoskote, Bengaluru, Karnataka - 562114",
    map:
      "https://www.google.com/maps?q=Karnataka+Wire+Corporation,+Sy+No+352,+Shiva+Garden,+Near+Maruthi+Saw+Mill,+KHB+Colony,+Hoskote,+Bengaluru,+Karnataka+562114&z=17&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Karnataka+Wire+Corporation,+Sy+No+352,+Shiva+Garden,+Near+Maruthi+Saw+Mill,+KHB+Colony,+Hoskote,+Bengaluru,+Karnataka+562114",
  },
];

export function HomePage() {
  const { lang, t } = useLanguage();

  const productName = (slug: string, fallback: string) =>
    lang === "kn"
      ? productTranslations[slug]?.name ?? fallback
      : fallback;

  return (
    <main>
      {/* HERO */}
      <section className="hero-section">
        <img
          src={heroImage}
          width={1920}
          height={768}
          alt={t("hero.alt")}
          className="hero-image"
          fetchPriority="high"
        />

        <div className="hero-overlay" />

        <div className="site-container relative z-10 flex h-full items-center justify-between gap-8 py-7">
          <div className="max-w-2xl text-primary-foreground">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em]">
              {t("hero.eyebrow")}
            </p>

            <h1 className="text-4xl font-black leading-[1.03] sm:text-5xl lg:text-[3.35rem]">
              {t("hero.title1")}
              <br />
              {t("hero.title2")}
            </h1>

            <p className="mt-3 max-w-xl text-sm font-medium text-primary-foreground/90 sm:text-base">
              {t("hero.subtitle")}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="lg">
                <a
                  href={whatsappQuote}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle />
                  {t("hero.quote")}
                </a>
              </Button>

              <Button
                asChild
                variant="hero-outline"
                size="lg"
              >
                <a href="#products">
                  {t("hero.viewProducts")}
                </a>
              </Button>
            </div>

            <p className="mt-4 flex items-center gap-2 text-xs font-semibold">
              <MapPin className="size-4" />
              {t("hero.serving")}
            </p>
          </div>

          <p className="hidden border-l-2 border-cta pl-4 font-serif text-2xl italic leading-tight text-primary-foreground/80 lg:block">
            {t("hero.tagline")}
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="bg-background py-5 sm:py-7"
      >
        <div className="site-container">
          <div className="section-heading">
            <h2>{t("products.heading")}</h2>
            <span />
          </div>

          <div className="product-row mt-5">
            {products.map((product) => (
              <Link
                key={product.slug}
                to="/products/$slug"
                params={{ slug: product.slug }}
                className="product-card group"
              >
                <img
                  src={product.image}
                  width={1024}
                  height={512}
                  loading="lazy"
                  alt={productName(
                    product.slug,
                    product.name
                  )}
                />

                <span>
                  <strong>
                    {productName(
                      product.slug,
                      product.name
                    )}
                  </strong>

                  <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section
        id="applications"
        className="bg-muted py-5"
      >
        <div className="site-container grid items-center gap-4 lg:grid-cols-[180px_1fr]">
          <div>
            <h2 className="text-2xl font-extrabold">
              {t("applications.heading")}
            </h2>

            <p className="mt-1 text-sm leading-snug text-muted-foreground">
              {t("applications.copy")}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {applications.map(
              ({ key, icon: Icon }) => (
                <div
                  key={key}
                  className="application-card"
                >
                  <Icon
                    className="size-9 shrink-0 text-primary"
                    strokeWidth={1.8}
                  />

                  <div className="min-w-0">
                    <h3 className="text-sm font-bold leading-tight">
                      {t(key)}
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {t(`${key}.copy`)}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mesh-banner bg-primary text-primary-foreground">
        <div className="site-container relative grid items-center gap-4 py-4 md:grid-cols-[1.2fr_1fr_auto]">
          <div className="flex items-center gap-3">
            <MessageCircle className="size-8 shrink-0" />

            <h2 className="text-lg font-bold sm:text-xl">
              {t("banner.title")}
            </h2>
          </div>

          <p className="text-sm text-primary-foreground/75">
            {t("banner.copy")}
          </p>

          <Button asChild variant="cta">
            <a
              href={whatsappEnquiry}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle />
              {t("banner.cta")}
            </a>
          </Button>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-b border-border bg-background py-9"
      >
        <div className="site-container grid gap-7 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">
              {t("about.eyebrow")}
            </p>

            <h2 className="mt-1 text-3xl font-black">
              {t("about.heading")}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              {t("about.p1")}
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              {t("about.p2")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
            {trust.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 bg-background p-4 text-sm font-bold"
              >
                <ShieldCheck className="size-5 shrink-0 text-primary" />
                {t(item)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORES */}
      <section
        id="contact"
        className="bg-background py-7 sm:py-9"
      >
        <div className="site-container">
          <div className="mb-6">
            <h2 className="text-2xl font-black">
              {t("store.heading")}
            </h2>

            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              {t("store.copy")}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {stores.map((store) => (
              <div
                key={store.nameKey}
                className="overflow-hidden rounded-lg border border-border bg-background shadow-sm"
              >
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-primary">
                    {t(store.nameKey)}
                  </h3>

                  <div className="mt-4 grid gap-4">
                    <Info
                      icon={Phone}
                      title="+91 99005 78080"
                      copy={t("store.callOrWhatsapp")}
                      href="tel:+919900578080"
                    />

                    <Info
                      icon={MapPin}
                      title="Karnataka Wire Corporation"
                      copy={store.address}
                      href={store.directions}
                    />

                    <Info
                      icon={Clock3}
                      title={t("store.hoursTitle")}
                      copy={t("store.hoursCopy")}
                    />
                  </div>
                </div>

                <div className="map-wrap">
                  <iframe
                    title={`${t(store.nameKey)} - ${t(
                      "store.mapTitle"
                    )}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={store.map}
                  />

                  <Button
                    asChild
                    className="map-button"
                  >
                    <a
                      href={store.directions}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MapPin />
                      {t("store.directions")}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({
  icon: Icon,
  title,
  copy,
  href,
}: {
  icon: typeof Phone;
  title: string;
  copy: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon className="mt-0.5 size-6 shrink-0 text-primary" />

      <span className="min-w-0">
        <strong className="block text-sm leading-snug">
          {title}
        </strong>

        <small className="mt-1 block text-xs text-muted-foreground">
          {copy}
        </small>
      </span>
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex min-w-0 gap-3"
    >
      {content}
    </a>
  ) : (
    <div className="flex min-w-0 gap-3">
      {content}
    </div>
  );
}