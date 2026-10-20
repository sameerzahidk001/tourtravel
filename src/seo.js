import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { faqs, tours } from "./data";

export const SITE = "https://startour.travel";

const pages = {
  "/": {
    title: "Star Tour | Rent a Car with Driver & Pakistan Tours",
    description:
      "Rent a car with driver in Islamabad. Tours to Hunza, Skardu, Naran Kaghan, Swat and Kalam. Star Tour, 24/7. Quotation first. Call 0309-2619096.",
    path: "/",
  },
  "/tours": {
    title: "Hunza, Skardu, Naran Kaghan, Swat & Kalam Tours | Star Tour",
    description:
      "Private tours with a driver from Islamabad to Hunza, Skardu, Naran Kaghan, Swat and Kalam. Request a quotation before you book.",
    path: "/tours",
  },
  "/rental": {
    title: "Rent a Car with Driver in Islamabad | Star Tour",
    description:
      "Rent a car with driver in Islamabad and Rawalpindi. Sedan, BR-V, Land Cruiser and mini coach. Self-drive is not available. Ask for a quotation.",
    path: "/rental",
  },
  "/gallery": {
    title: "Tour Photos | Star Tour Skardu, Swat & Northern Roads",
    description:
      "Photos from Star Tour trips: northern lakes, the Skardu road, and Swat Museum. Tours and rent a car with driver from Islamabad.",
    path: "/gallery",
  },
  "/about": {
    title: "About Star Tour & Rent a Car | Sikender Hayat",
    description:
      "Star Tour & Rent a Car is a travel company in Islamabad. Sikender Hayat. Tours and cars with a driver, 24/7. Quotation before booking.",
    path: "/about",
  },
  "/book": {
    title: "Request a Quotation | Star Tour Rent a Car & Tours",
    description:
      "Request a quotation for a tour or a car with driver. Star Tour confirms the price on WhatsApp before any booking. Call 0309-2619096.",
    path: "/book",
  },
};

export function pageMeta(pathname) {
  if (pages[pathname]) return pages[pathname];
  const slug = pathname.match(/^\/tours\/([^/]+)$/)?.[1];
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) return { ...pages["/"], path: pathname };
  return {
    title: `${tour.title} with Driver | Star Tour`,
    description: `${tour.line} Private vehicle with a driver from Islamabad. Request a quotation before booking. 0309-2619096.`,
    path: `/tours/${tour.slug}`,
  };
}

function setMeta(name, content, attr = "name") {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setJsonLd(data) {
  let el = document.getElementById("page-ld");
  if (!el) {
    el = document.createElement("script");
    el.id = "page-ld";
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = pageMeta(pathname);
    const url = `${SITE}${meta.path === "/" ? "/" : meta.path}`;
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
    setMeta("og:url", url, "property");
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const slug = pathname.match(/^\/tours\/([^/]+)$/)?.[1];
    const tour = tours.find((item) => item.slug === slug);
    if (tour) {
      setJsonLd({
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: tour.title,
        description: tour.summary,
        url,
        provider: { "@id": `${SITE}/#business` },
        touristType: "Private tour with driver",
      });
    } else if (pathname === "/about") {
      setJsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      });
    } else if (pathname === "/rental") {
      setJsonLd({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Rent a car with driver",
        serviceType: "Car rental with driver",
        url,
        provider: { "@id": `${SITE}/#business` },
        areaServed: "Islamabad",
        description: meta.description,
      });
    }
  }, [pathname]);
  return null;
}
