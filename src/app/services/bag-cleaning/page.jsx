import ServiceTemplate from "@/components/ServiceTemplate";
import { headers } from "next/headers";

export default function Home() {
    return(
        <ServiceTemplate
        title="Bag Cleaning & Refurbishment"
        description={[
            "Your luxury bags deserve expert care to maintain their beauty and longevity. Whether it's leather, suede, or designer handbags, MR.V provides specialized cleaning and refurbishment services to restore them to their original condition.",
            "At MR.V, we take pride in giving your bags a fresh, polished look by removing stains, repairing wear and tear, and enhancing their overall appearance. Our meticulous cleaning process ensures every detail is perfected for a renewed, stylish look."
        ]}
        sections={[
            {
                heading: "Why choose MR.V?",
                type: "list",
                items : [
                    "Premium cleaning for luxury bags",
                    "Stain removal & deep conditioning",
                    "Expert restoration for worn-out leather",
                    "Eco-friendly cleaning solutions",
                    "Convenient doorstep service",
                    "Affordable pricing with guaranteed quality"
                ]
            },
            {
                type: "para",
                items: [
                    "MR.V understands that handbags are more than just accessories—they’re an essential part of your style. That's why we use industry-grade products and techniques to clean, condition, and protect your bags.",
                    "From deep cleaning to restoring faded leather, we ensure your handbags look brand new while preserving their original material integrity."
                ]
            },
            {
                heading: "How it works:",
                type: "list",
                items: [
                    "Schedule a pickup online",
                    "Select your bag cleaning service",
                    "Enjoy expert care and restoration",
                ]
            }
        ]}
        footerDescription="MR.V offers premium bag cleaning and refurbishment services to restore elegance to your luxury handbags. Whether it's stain removal, leather conditioning, or deep cleaning, trust us for expert care. Book your service today!"
        imageUrl="/bag-cleaning.jpg"
        />
    )
}