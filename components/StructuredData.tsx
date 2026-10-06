import { site } from "@/data/site";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: "https://ceramicse.ir",
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.text,
      addressLocality: site.address.city,
      addressCountry: "IR",
    },
    hasMap: site.links.googleMaps,
    sameAs: [site.links.rubika],
    areaServed: {
      "@type": "City",
      name: site.address.city,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}