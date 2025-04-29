import ServiceTemplate from "@/components/ServiceTemplate";
import { headers } from "next/headers";

export default function Home() {
    return(
        <ServiceTemplate
        title="Dry Cleaning"
        description={[
                        "A professional dry-cleaning service ensures that your garments are treated with specialized care, maintaining fabric integrity and freshness. Dry cleaning is ideal for delicate materials that require expert attention beyond regular washing.",
            "At 'Washh IT', we offer high-quality dry-cleaning services designed to remove stains, preserve the texture of premium fabrics, and provide a crisp, polished look. Whether it's suits, dresses, or everyday wear, our dry-cleaning process ensures long-lasting fabric quality while making your clothes look brand new."
        ]}
        sections={[
            {
                heading: "Why MR.V ?",
                type: "para",
                items: [
                    "MR.V proper fabric care is essential for maintaining the longevity of your clothes. Our dry-cleaning services use advanced techniques and eco-friendly solutions to ensure your garments are treated with the highest standards."
                ]
            },
            {
                heading: "Why Dry cleaning?",
                type: "list",
                items: [
                    "Door to door collection of clothes",
                    "Fast and convenient",
                    "Quality services",
                    "Cost-effective rates",
                    "pecial care is provided for your clothes."
                ]
            },
        ]}
         footerTitle="Dry Cleaning "
         footerDescription="We provide expert dry-cleaning services designed to handle various fabric types with precision. Whether it's removing stubborn stains or keeping your luxury garments in top condition, trust us to deliver outstanding results. Contact us today to experience premium laundry care." 
      imageUrl="/iron.jpg"
        />
    )
}