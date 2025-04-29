import ServiceTemplate from "@/components/ServiceTemplate";
import { headers } from "next/headers";

export default function Home() {
    return(
        <ServiceTemplate
        title="Shoe Cleaning & Restoration"
        description={[
            "Your shoes carry you through every step of your journey—keeping them clean and well-maintained is essential. Whether it’s premium leather, suede, or everyday sneakers, MR.V offers expert shoe cleaning and restoration services to bring back their shine.",
            "At MR.V, we specialize in deep cleaning, stain removal, and refurbishing worn-out shoes. From polishing to repairing minor damages, our service ensures your footwear stays fresh and stylish for every occasion."
        ]}
        sections={[
            {
                heading: "Why choose MR.V?",
                type: "list",
                items : [
                    "Premium shoe care",
                    "Deep cleaning & stain removal",
                    "Expert handling for luxury brands",
                    "Convenient pick-up & delivery",
                    "Eco-friendly cleaning solutions",
                    "Affordable rates with guaranteed satisfaction"
                ]
            },
            {
                type: "para",
                items: [
                    "We at MR.V understand that shoes are an integral part of your personality. That’s why we use advanced techniques and high-quality products to clean, restore, and protect your footwear.",
                    "Our process ensures every pair is treated with precision, whether it’s leather conditioning, sole repairs, or bringing back the original texture. Plus, with our doorstep service, professional care has never been more convenient."
                ]
            },
            {
                heading: "All you need to do:",
                type: "list",
                items: [
                    "Log in to our website",
                    "Select shoe cleaning service",
                    "Schedule a pick-up",
                ]
            }
        ]}
        footerDescription="MR.V offers top-tier shoe cleaning and restoration services, ensuring every step you take looks clean and fresh. Whether it’s luxury footwear or everyday sneakers, we bring them back to life with expert care. Book your service today!"
        imageUrl="/shoe-cleaning.jpg"
        />
    )
}