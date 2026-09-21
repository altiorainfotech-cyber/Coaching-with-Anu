import AnnouncementBar from "@/components/webinar/AnnouncementBar";
import Header from "@/components/webinar/Header";
import Hero from "@/components/webinar/Hero";
import LearningSection from "@/components/webinar/LearningSection";
import AudienceSection from "@/components/webinar/AudienceSection";
import NotForSection from "@/components/webinar/NotForSection";
import SpeakerStory from "@/components/webinar/SpeakerStory";
import Registration from "@/components/webinar/Registration";
import Footer from "@/components/webinar/Footer";
import { BRAND, SITE_URL, WEBINAR } from "@/components/webinar/content";

function jsonLd() {
  const organization = {
    "@type": "Organization",
    name: BRAND,
    url: SITE_URL,
  };
  const graph: Record<string, unknown>[] = [
    { "@context": "https://schema.org", ...organization },
  ];
  // Only publish Event data once a real date is configured.
  if (WEBINAR.startISO) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Free Live Webinar: From $50K in Debt to $212K+ Online With Digital Products",
      startDate: WEBINAR.startISO,
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: { "@type": "VirtualLocation", url: `${SITE_URL}/webinar` },
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/webinar#register`,
      },
      organizer: organization,
    });
  }
  return JSON.stringify(graph).replace(/</g, "\\u003c");
}

export default function WebinarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd() }}
      />
      <AnnouncementBar />
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <LearningSection />
        <AudienceSection />
        <NotForSection />
        <SpeakerStory />
        <Registration />
      </main>
      <Footer />
    </>
  );
}
