import { Link } from "@tanstack/react-router";
import {
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import kwcLogo from "@/assets/kwc-logo.png";

const whatsappQuote =
  "https://wa.me/919900578080?text=" +
  encodeURIComponent(
    "Hello Karnataka Wire Corporation, I would like to get a free quote for fencing."
  );

const navigation = [
  { key: "nav.home", href: "/#top" },
  { key: "nav.products", href: "/#products" },
  { key: "nav.applications", href: "/#applications" },
  { key: "nav.about", href: "/#about" },
  { key: "nav.contact", href: "/#contact" },
];

export function Brand() {
  return (
    <Link
      to="/"
      className="flex min-w-0 items-center"
      aria-label="Karnataka Wire Corporation home"
    >
      <img
        src={kwcLogo}
        alt="Karnataka Wire Corporation"
        className="h-14 w-auto object-contain sm:h-15"
      />
    </Link>
  );
}

function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <span className={className}>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={
          lang === "en"
            ? "font-bold underline"
            : "opacity-80 hover:opacity-100"
        }
      >
        EN
      </button>

      <span aria-hidden="true">&nbsp; | &nbsp;</span>

      <button
        type="button"
        onClick={() => setLang("kn")}
        aria-pressed={lang === "kn"}
        className={
          lang === "kn"
            ? "font-bold underline"
            : "opacity-80 hover:opacity-100"
        }
      >
        ಕನ್ನಡ
      </button>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header id="top" className="relative z-50">
      {/* Top information bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="site-container grid h-8 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 text-[11px] font-medium sm:grid-cols-3">
          <a
            className="flex min-w-0 items-center gap-1.5"
            href="tel:+919900578080"
          >
            <Phone className="size-3.5 shrink-0" />
            <span className="truncate">+91 99005 78080</span>
          </a>

          <span className="hidden items-center justify-center gap-1.5 sm:flex">
            <MapPin className="size-3.5" />
            {t("top.location")}
          </span>

          <div className="flex items-center justify-end gap-4">
            <span className="hidden items-center gap-1.5 lg:flex">
              <Clock3 className="size-3.5" />
              {t("top.hours")}
            </span>

            <LanguageSwitch />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-border bg-background shadow-sm">
        <div className="site-container grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <Brand />

          <div className="flex items-center gap-2">
            {/* Desktop navigation */}
            <nav
              className="hidden items-center gap-7 lg:flex"
              aria-label={t("nav.main")}
            >
              {navigation.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={
                    index === 0
                      ? "nav-link nav-link-active"
                      : "nav-link"
                  }
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>

            {/* Desktop language switch */}
            <LanguageSwitch className="hidden rounded-full border border-primary px-3 py-1.5 text-xs font-semibold text-primary xl:inline-flex" />

            {/* WhatsApp quote button */}
            <Button
              asChild
              variant="cta"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <a
                href={whatsappQuote}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle />
                {t("cta.whatsappQuote")}
              </a>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={
                open ? t("menu.close") : t("menu.open")
              }
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {open && (
          <nav
            className="site-container grid gap-1 border-t border-border py-3 lg:hidden"
            aria-label={t("nav.mobile")}
          >
            {navigation.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-muted"
              >
                {t(item.key)}
              </a>
            ))}

            <Button
              asChild
              variant="cta"
              className="mt-2 sm:hidden"
            >
              <a
                href={whatsappQuote}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle />
                {t("cta.whatsappQuote")}
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}