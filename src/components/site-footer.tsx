import { MapPin, MessageCircle, Phone } from "lucide-react";
import { Brand } from "./site-header";
import { useLanguage } from "@/lib/i18n";

const links = [
  { key: "nav.home", hash: "top" },
  { key: "nav.products", hash: "products" },
  { key: "nav.applications", hash: "applications" },
  { key: "nav.about", hash: "about" },
  { key: "nav.contact", hash: "contact" },
];

const whatsappEnquiry =
  "https://wa.me/919900578080?text=" +
  encodeURIComponent(
    "Hello Karnataka Wire Corporation, I would like to enquire about your fencing products."
  );

const nelamangalaDirections =
  "https://www.google.com/maps/dir/?api=1&destination=Karnataka+Wire+Corporation,+Sy+No.+121/26A3,+Arasinakunte,+Near+RNS+Motors,+Next+to+Manoj+Dhaba,+Vijaya+Vittala+Nagar,+Nelamangala+Town,+Bengaluru,+Karnataka+562123";

const hoskoteDirections =
  "https://www.google.com/maps/dir/?api=1&destination=Karnataka+Wire+Corporation,+Sy+No+352,+Shiva+Garden,+Near+Maruthi+Saw+Mill,+KHB+Colony,+Hoskote,+Bengaluru,+Karnataka+562114";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="site-container grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1.2fr]">
        {/* BRAND */}
        <div>
          <div className="footer-brand">
            <Brand />
          </div>

          <p className="mt-3 max-w-sm text-sm text-primary-foreground/75">
            {t("footer.tagline")}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-sm font-bold uppercase">
            {t("footer.quickLinks")}
          </h2>

          <nav className="mt-3 grid grid-cols-2 gap-2 text-sm text-primary-foreground/75">
            {links.map((link) => (
              <a
                key={link.key}
                href={`/#${link.hash}`}
                className="hover:text-primary-foreground"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>
        </div>

        {/* CONTACT / STORES */}
        <div>
          <h2 className="text-sm font-bold uppercase">
            {t("footer.contact")}
          </h2>

          <div className="mt-3 grid gap-4 text-sm text-primary-foreground/75">
            <a
              href="tel:+919900578080"
              className="flex items-center gap-2 hover:text-primary-foreground"
            >
              <Phone className="size-4 shrink-0" />
              +91 99005 78080
            </a>

            <a
              href={nelamangalaDirections}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 hover:text-primary-foreground"
            >
              <MapPin className="mt-0.5 size-4 shrink-0" />

              <span>
                <strong className="block text-primary-foreground">
                  Nelamangala
                </strong>
                Sy No. 121/26A3, Arasinakunte, Near RNS Motors, Next to Manoj
                Dhaba, Vijaya Vittala Nagar, Nelamangala Town, Bengaluru -
                562123
              </span>
            </a>

            <a
              href={hoskoteDirections}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 hover:text-primary-foreground"
            >
              <MapPin className="mt-0.5 size-4 shrink-0" />

              <span>
                <strong className="block text-primary-foreground">
                  Hoskote
                </strong>
                Sy No. 352, Shiva Garden, Near Maruthi Saw Mill, KHB Colony,
                Hoskote, Bengaluru - 562114
              </span>
            </a>

            <div className="flex gap-2">
              <a
                className="footer-icon"
                href={whatsappEnquiry}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-4" />
              </a>

              <a
                className="footer-icon"
                href={nelamangalaDirections}
                target="_blank"
                rel="noreferrer"
                aria-label="Nelamangala Google Maps"
              >
                <MapPin className="size-4" />
              </a>

              <a
                className="footer-icon"
                href={hoskoteDirections}
                target="_blank"
                rel="noreferrer"
                aria-label="Hoskote Google Maps"
              >
                <MapPin className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-4 text-center text-xs text-primary-foreground/65">
        {t("footer.rights")}
      </div>
    </footer>
  );
}