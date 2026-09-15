import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "kn";

const STORAGE_KEY = "kwc-lang";

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // BRAND
    "brand.full": "Karnataka Wire Corporation",

    // TOP BAR
    "top.location": "Nelamangala & Hoskote, Bengaluru",
    "top.hours": "Mon - Sat, 9:00 AM - 6:00 PM",

    // NAVIGATION
    "nav.main": "Main navigation",
    "nav.mobile": "Mobile navigation",
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.applications": "Applications",
    "nav.about": "About Us",
    "nav.contact": "Contact",

    // CTA
    "cta.whatsappQuote": "WhatsApp for Quote",

    // MENU
    "menu.open": "Open menu",
    "menu.close": "Close menu",

    // HERO
    "hero.alt": "Fencing protecting agricultural land",
    "hero.eyebrow": "Quality fencing solutions",
    "hero.title1": "Strong Fencing.",
    "hero.title2": "Trusted Protection.",
    "hero.subtitle":
      "Reliable fencing solutions for farms, homes, plots, poultry and industrial spaces.",
    "hero.quote": "Get a Free Quote",
    "hero.viewProducts": "View Products",
    "hero.serving": "Serving Nelamangala, Hoskote & Bengaluru",
    "hero.tagline": "Stronger Land. Safer Tomorrow.",

    // PRODUCTS
    "products.heading": "Our Products",

    // APPLICATIONS
    "applications.heading": "Applications",
    "applications.copy":
      "Fencing solutions for different land, property and business needs.",

    "app.farm": "Farm & Agriculture",
    "app.farm.copy":
      "Durable fencing for agricultural land, plantations and farm boundaries.",

    "app.home": "Homes & Plots",
    "app.home.copy":
      "Secure boundaries for homes, residential plots and open properties.",

    "app.industry": "Warehouses & Industry",
    "app.industry.copy":
      "Strong fencing solutions for warehouses, factories and industrial areas.",

    "app.poultry": "Poultry & Animal Enclosures",
    "app.poultry.copy":
      "Practical mesh and fencing for poultry farms and animal enclosures.",

    // BANNER
    "banner.title": "Not sure which fencing is right for you?",
    "banner.copy":
      "Tell us about your requirement and our team will help you choose.",
    "banner.cta": "Talk to Our Team",

    // ABOUT
    "about.eyebrow": "About KWC",
    "about.heading": "Fencing you can depend on.",
    "about.p1":
      "Karnataka Wire Corporation provides reliable fencing and wire solutions for farms, homes, plots, poultry, warehouses and industrial applications.",
    "about.p2":
      "With a focus on quality products, dependable supply and practical solutions, we help customers protect their land and property with confidence.",

    // TRUST
    "trust.quality": "Quality Products",
    "trust.supply": "Reliable Supply",
    "trust.applications": "Multiple Applications",
    "trust.customer": "Customer Focused",

    // STORES
    "store.heading": "Visit Our Stores",
    "store.copy":
      "Visit either of our stores in Nelamangala or Hoskote for expert advice and the right fencing solution.",
    "store.nelamangala": "Nelamangala Store",
    "store.hoskote": "Hoskote Store",
    "store.callOrWhatsapp": "Call or WhatsApp",
    "store.hoursTitle": "Mon - Sat",
    "store.hoursCopy": "9:00 AM - 6:00 PM",
    "store.directions": "Get Directions",
    "store.mapTitle":
      "Map showing Karnataka Wire Corporation shop location",

    // FOOTER
    "footer.tagline":
      "Reliable fencing and wire solutions for farms, homes, plots, poultry and industry.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact & Stores",
    "footer.rights":
      "© 2026 Karnataka Wire Corporation. All rights reserved.",
  },

  kn: {
    // BRAND
    "brand.full": "ಕರ್ನಾಟಕ ವೈರ್ ಕಾರ್ಪೊರೇಷನ್",

    // TOP BAR
    "top.location": "ನೆಲಮಂಗಲ ಮತ್ತು ಹೊಸಕೋಟೆ, ಬೆಂಗಳೂರು",
    "top.hours": "ಸೋಮ - ಶನಿ, ಬೆಳಿಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00",

    // NAVIGATION
    "nav.main": "ಮುಖ್ಯ ನ್ಯಾವಿಗೇಶನ್",
    "nav.mobile": "ಮೊಬೈಲ್ ನ್ಯಾವಿಗೇಶನ್",
    "nav.home": "ಮುಖಪುಟ",
    "nav.products": "ಉತ್ಪನ್ನಗಳು",
    "nav.applications": "ಬಳಕೆಗಳು",
    "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",
    "nav.contact": "ಸಂಪರ್ಕಿಸಿ",

    // CTA
    "cta.whatsappQuote": "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಬೆಲೆ ಕೇಳಿ",

    // MENU
    "menu.open": "ಮೆನು ತೆರೆಯಿರಿ",
    "menu.close": "ಮೆನು ಮುಚ್ಚಿರಿ",

    // HERO
    "hero.alt": "ಕೃಷಿ ಭೂಮಿಯನ್ನು ರಕ್ಷಿಸುವ ಬೇಲಿ",
    "hero.eyebrow": "ಗುಣಮಟ್ಟದ ಬೇಲಿ ಪರಿಹಾರಗಳು",
    "hero.title1": "ಬಲವಾದ ಬೇಲಿ.",
    "hero.title2": "ವಿಶ್ವಾಸಾರ್ಹ ರಕ್ಷಣೆ.",
    "hero.subtitle":
      "ಕೃಷಿ, ಮನೆಗಳು, ನಿವೇಶನಗಳು, ಕೋಳಿ ಫಾರ್ಮ್ ಮತ್ತು ಕೈಗಾರಿಕಾ ಪ್ರದೇಶಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಬೇಲಿ ಪರಿಹಾರಗಳು.",
    "hero.quote": "ಉಚಿತ ಬೆಲೆ ಪಡೆಯಿರಿ",
    "hero.viewProducts": "ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
    "hero.serving": "ನೆಲಮಂಗಲ, ಹೊಸಕೋಟೆ ಮತ್ತು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸೇವೆ",
    "hero.tagline": "ಬಲವಾದ ಭೂಮಿ. ಸುರಕ್ಷಿತ ಭವಿಷ್ಯ.",

    // PRODUCTS
    "products.heading": "ನಮ್ಮ ಉತ್ಪನ್ನಗಳು",

    // APPLICATIONS
    "applications.heading": "ಬಳಕೆಗಳು",
    "applications.copy":
      "ವಿವಿಧ ಭೂಮಿ, ಆಸ್ತಿ ಮತ್ತು ವ್ಯವಹಾರ ಅಗತ್ಯಗಳಿಗೆ ಸೂಕ್ತವಾದ ಬೇಲಿ ಪರಿಹಾರಗಳು.",

    "app.farm": "ಕೃಷಿ ಮತ್ತು ಫಾರ್ಮ್",
    "app.farm.copy":
      "ಕೃಷಿ ಭೂಮಿ, ತೋಟಗಳು ಮತ್ತು ಫಾರ್ಮ್ ಗಡಿಗಳಿಗೆ ಬಾಳಿಕೆ ಬರುವ ಬೇಲಿ.",

    "app.home": "ಮನೆಗಳು ಮತ್ತು ನಿವೇಶನಗಳು",
    "app.home.copy":
      "ಮನೆಗಳು, ವಸತಿ ನಿವೇಶನಗಳು ಮತ್ತು ಖಾಲಿ ಜಾಗಗಳಿಗೆ ಸುರಕ್ಷಿತ ಗಡಿ ಬೇಲಿ.",

    "app.industry": "ಗೋದಾಮುಗಳು ಮತ್ತು ಕೈಗಾರಿಕೆ",
    "app.industry.copy":
      "ಗೋದಾಮುಗಳು, ಕಾರ್ಖಾನೆಗಳು ಮತ್ತು ಕೈಗಾರಿಕಾ ಪ್ರದೇಶಗಳಿಗೆ ಬಲವಾದ ಬೇಲಿ ಪರಿಹಾರಗಳು.",

    "app.poultry": "ಕೋಳಿ ಫಾರ್ಮ್ ಮತ್ತು ಪ್ರಾಣಿ ಆವರಣಗಳು",
    "app.poultry.copy":
      "ಕೋಳಿ ಫಾರ್ಮ್ ಮತ್ತು ಪ್ರಾಣಿ ಆವರಣಗಳಿಗೆ ಸೂಕ್ತವಾದ ಮೆಶ್ ಮತ್ತು ಬೇಲಿ.",

    // BANNER
    "banner.title": "ಯಾವ ಬೇಲಿ ನಿಮಗೆ ಸೂಕ್ತವೆಂದು ತಿಳಿಯುತ್ತಿಲ್ಲವೇ?",
    "banner.copy":
      "ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ನಮಗೆ ತಿಳಿಸಿ. ಸರಿಯಾದ ಬೇಲಿ ಆಯ್ಕೆ ಮಾಡಲು ನಮ್ಮ ತಂಡ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    "banner.cta": "ನಮ್ಮ ತಂಡದೊಂದಿಗೆ ಮಾತನಾಡಿ",

    // ABOUT
    "about.eyebrow": "KWC ಬಗ್ಗೆ",
    "about.heading": "ನೀವು ನಂಬಬಹುದಾದ ಬೇಲಿ.",
    "about.p1":
      "ಕರ್ನಾಟಕ ವೈರ್ ಕಾರ್ಪೊರೇಷನ್ ಕೃಷಿ, ಮನೆಗಳು, ನಿವೇಶನಗಳು, ಕೋಳಿ ಫಾರ್ಮ್, ಗೋದಾಮುಗಳು ಮತ್ತು ಕೈಗಾರಿಕಾ ಬಳಕೆಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಬೇಲಿ ಮತ್ತು ವೈರ್ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    "about.p2":
      "ಗುಣಮಟ್ಟದ ಉತ್ಪನ್ನಗಳು, ವಿಶ್ವಾಸಾರ್ಹ ಪೂರೈಕೆ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಪರಿಹಾರಗಳ ಮೇಲೆ ಗಮನಹರಿಸಿ, ನಿಮ್ಮ ಭೂಮಿ ಮತ್ತು ಆಸ್ತಿಯನ್ನು ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ರಕ್ಷಿಸಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",

    // TRUST
    "trust.quality": "ಗುಣಮಟ್ಟದ ಉತ್ಪನ್ನಗಳು",
    "trust.supply": "ವಿಶ್ವಾಸಾರ್ಹ ಪೂರೈಕೆ",
    "trust.applications": "ಬಹು ಬಳಕೆಗಳು",
    "trust.customer": "ಗ್ರಾಹಕ ಕೇಂದ್ರಿತ ಸೇವೆ",

    // STORES
    "store.heading": "ನಮ್ಮ ಅಂಗಡಿಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ",
    "store.copy":
      "ನೆಲಮಂಗಲ ಅಥವಾ ಹೊಸಕೋಟೆಯ ನಮ್ಮ ಯಾವುದೇ ಅಂಗಡಿಗೆ ಭೇಟಿ ನೀಡಿ, ತಜ್ಞರ ಸಲಹೆ ಪಡೆದು ಸೂಕ್ತ ಬೇಲಿ ಪರಿಹಾರ ಆಯ್ಕೆ ಮಾಡಿ.",
    "store.nelamangala": "ನೆಲಮಂಗಲ ಅಂಗಡಿ",
    "store.hoskote": "ಹೊಸಕೋಟೆ ಅಂಗಡಿ",
    "store.callOrWhatsapp": "ಕರೆ ಅಥವಾ ವಾಟ್ಸಾಪ್",
    "store.hoursTitle": "ಸೋಮ - ಶನಿ",
    "store.hoursCopy": "ಬೆಳಿಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00",
    "store.directions": "ದಾರಿ ತೋರಿಸಿ",
    "store.mapTitle":
      "ಕರ್ನಾಟಕ ವೈರ್ ಕಾರ್ಪೊರೇಷನ್ ಅಂಗಡಿಯ ಸ್ಥಳವನ್ನು ತೋರಿಸುವ ನಕ್ಷೆ",

    // FOOTER
    "footer.tagline":
      "ಕೃಷಿ, ಮನೆಗಳು, ನಿವೇಶನಗಳು, ಕೋಳಿ ಫಾರ್ಮ್ ಮತ್ತು ಕೈಗಾರಿಕೆಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಬೇಲಿ ಮತ್ತು ವೈರ್ ಪರಿಹಾರಗಳು.",
    "footer.quickLinks": "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
    "footer.contact": "ಸಂಪರ್ಕ ಮತ್ತು ಅಂಗಡಿಗಳು",
    "footer.rights":
      "© 2026 ಕರ್ನಾಟಕ ವೈರ್ ಕಾರ್ಪೊರೇಷನ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
  },
};

export const productTranslations: Record<
  string,
  {
    name: string;
    description: string;
  }
> = {
  "barbed-wire": {
    name: "ಬಾರ್ಬ್ಡ್ ವೈರ್",
    description:
      "ಭೂಮಿ ಮತ್ತು ಆಸ್ತಿಯ ಗಡಿಗಳನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಲು ಬಲವಾದ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಬಾರ್ಬ್ಡ್ ವೈರ್.",
  },

  "chain-link-fencing": {
    name: "ಚೈನ್ ಲಿಂಕ್ ಫೆನ್ಸಿಂಗ್",
    description:
      "ಮನೆಗಳು, ನಿವೇಶನಗಳು, ಕೃಷಿ ಭೂಮಿ ಮತ್ತು ಕೈಗಾರಿಕಾ ಪ್ರದೇಶಗಳಿಗೆ ಬಾಳಿಕೆ ಬರುವ ಚೈನ್ ಲಿಂಕ್ ಬೇಲಿ.",
  },

  "knotted-fence": {
    name: "ನಾಟೆಡ್ ಫೆನ್ಸ್",
    description:
      "ಕೃಷಿ ಭೂಮಿ ಮತ್ತು ಪ್ರಾಣಿ ಆವರಣಗಳಿಗೆ ಸೂಕ್ತವಾದ ಬಲವಾದ ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ನಾಟೆಡ್ ಫೆನ್ಸ್.",
  },

  "poultry-mesh": {
    name: "ಕೋಳಿ ಫಾರ್ಮ್ ಮೆಶ್",
    description:
      "ಕೋಳಿ ಫಾರ್ಮ್ ಮತ್ತು ಸಣ್ಣ ಪ್ರಾಣಿ ಆವರಣಗಳಿಗೆ ಸೂಕ್ತವಾದ ಮೆಶ್.",
  },

  "binding-wire": {
    name: "ಬೈಂಡಿಂಗ್ ಮತ್ತು GI ವೈರ್",
    description:
      "ನಿರ್ಮಾಣ, ಕೃಷಿ ಮತ್ತು ವಿವಿಧ ಸಾಮಾನ್ಯ ಬಳಕೆಗಳಿಗೆ ಉಪಯುಕ್ತವಾದ ಗುಣಮಟ್ಟದ ವೈರ್.",
  },

  "3d-welded-mesh": {
    name: "3D ವೆಲ್ಡೆಡ್ ಮೆಶ್",
    description:
      "ಮನೆಗಳು, ವಾಣಿಜ್ಯ ಪ್ರದೇಶಗಳು ಮತ್ತು ಕೈಗಾರಿಕಾ ಸ್ಥಳಗಳಿಗೆ ಆಧುನಿಕ ಮತ್ತು ಬಲವಾದ ವೆಲ್ಡೆಡ್ ಮೆಶ್ ಬೇಲಿ.",
  },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);

    return saved === "kn" ? "kn" : "en";
  });

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextLang);
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === "kn" ? "kn" : "en";
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: string) => {
      return translations[lang][key] ?? translations.en[key] ?? key;
    };

    return {
      lang,
      setLang,
      t,
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside a LanguageProvider"
    );
  }

  return context;
}