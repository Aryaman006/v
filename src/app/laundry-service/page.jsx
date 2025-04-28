import ServiceTemplate from "@/components/ServiceTemplate";

export default function HomePage() {
  return (
    <ServiceTemplate
      title="Best Laundry Services in Hyderabad"
      subtitle="Convenient and valued laundry partner in Hyderabad (Madhapur, Gachibowli, Kondapur)"
      description={[
        "Imagine if someone would have taken care of your laundry and done it in a highly professional way...",
        "We understand laundry doesn't have to cost you...",
        "Wash-It believes everyone deserves fresh, clean clothes...",
      ]}
      sections={[
        {
          heading: "How it Works",
          type: "list",
          items: [
            "Book using the website and schedule for the pickup.",
            "Place your items and bag.",
            "We will collect from your doorstep as per your preferred time slot.",
            "We will deliver your clothing cleaned as per your suited time. Laundry can be provided in as little as 24 hours.",
            "You are ready, set to wear your clothes.",
          ],
        },
        {
          heading: "Services We Offer",
          type: "services",
          items: [
            "Corporate and personal washing",
            "Dry cleaning services",
            "Saree rolling",
            "Dying",
            "Washing",
            "Wet cleaning",
            "Steam pressing",
          ],
        },
        {
          heading: "Why Wash It",
          type: "reasons",
          items: [
            {
              title: "Technology",
              description: "We continue investing in advanced technology for more excellent, efficient, and quality services.",
            },
            {
              title: "Facilities",
              description: "We offer you door-to-door pick and drop facilities without extra cost.",
            },
            {
              title: "Affordable",
              description: "High quality doesn’t always have to be costly. Wash and fold at Rs. 65/kg, Dry cleaning at Rs. 75 per piece.",
            },
            {
              title: "Superior quality",
              description: "Our expert cleaners prioritize washing and pressed clothes in less than 24 hours.",
            },
          ],
        },
      ]}
      footerTitle="Get your cleaning done today."
      footerDescription="Experience premium laundry service at affordable prices."
      contactAreas={["Madhapur", "Gachibowli", "Kondapur", "Hyderabad"]}
      imageUrl="/image.jpg"
    />
  );
}
