import ServiceTemplate from "@/components/ServiceTemplate";
import { headers } from "next/headers";

export default function Home() {
    return(
        <ServiceTemplate
        title="Premium Fabric Care"
        description={[
            "Delicate fabrics require specialized care to maintain their softness, elegance, and durability. MR.V offers premium fabric care services tailored to high-end materials, ensuring gentle yet effective cleaning without damage.",
            "At MR.V, we use advanced fabric treatment techniques, eco-friendly solutions, and precise handling to preserve the texture and integrity of luxury garments. Whether it's silk, velvet, or linen, our expert care keeps them fresh and flawless."
        ]}
        sections={[
            {
                heading: "Why choose MR.V?",
                type: "list",
                items : [
                    "Gentle cleaning for delicate fabrics",
                    "Preserves texture & softness",
                    "Eco-friendly washing techniques",
                    "Long-lasting freshness & quality",
                    "Doorstep collection & delivery",
                    "Affordable yet premium care"
                ]
            },
            {
                type: "para",
                items: [
                    "MR.V understands that some fabrics need extra attention. From silk dresses to designer linen, we ensure deep cleaning and preservation without harsh chemicals.",
                    "Our specialized techniques maintain color vibrancy and fabric strength, giving your wardrobe the care it deserves."
                ]
            },
            {
                heading: "How it works:",
                type: "list",
                items: [
                    "Select your fabric care service",
                    "Schedule a convenient pickup",
                    "Receive freshly cleaned garments with premium care",
                ]
            }
        ]}
        footerDescription="Experience expert care for your delicate fabrics with MR.V. Our premium fabric care service ensures gentle yet effective cleaning while preserving quality. Book your service today!"
        imageUrl="/fabric-care.jpg"
        />
    )
}