import ServiceTemplate from "@/components/ServiceTemplate";
import { headers } from "next/headers";

export default function Home() {
    return(
        <ServiceTemplate
        title="Saree Rolling Service Hyderabad"
        description={[
            "Saree is an exquisite piece of seven yards that requires intelligence care and pressed adequately. There is nothing perfect that draping a pristine saree to a ceremony or function. A small carelessness at home can lead to run the risk of damaging your saree. Leave the daunting task of Saree Rolling Hyderabad on Washh IT. Your saree needs roll polishing that preserves the inherent shining of the garment without affecting its natural beauty.",
            "At Washh It, we cater to the demands of the customer, whether it be for cotton saree, silk saree, embroidery saree, etc. We can also roll press half sarees, skirt blouses, curtains, drapes, light carpets, shawls and much more. You would relatively notice the revival in the fabric that adds smooth and lustrous texture to it."
        ]}
        sections={[
            {
                heading: "Why choose Washh IT?",
                type: "list",
                items : [
                    "Quality",
                    "Hygiene",
                    "Fast",
                    "Personalize",
                    "Door to door services",
                    "Guaranteed Savings"
                ]
            },
            {
                // heading: ""
                type: "para",
                items: [
                    "We can deliver unparalleled services of Saree Rolling Hyderabad to our customers. Your saree is pristine to you, and you are valuable to us. That is why we always offer a fresh and crisp finish to your garments with advanced machines specifically designed for it. Sarees tend to lose their shine while washing along with time. With best saree rolling services you would get enhanced natural beauty and durability at your doorstep.",
                    "We pick up clothes from your doorstep and process with extra caution and care. We will not compromise the quality of your garment with harsh chemicals and do our best in when it comes to rolling press. We assure you that there would be no burden on your pocket with our affordable rates along with pick up and delivery option."
                ]
            },
            {
                heading: "All you need is to",
                type: "list",
                items: [
                    "Log in to our website",
                    "Select services",
                    "Make it ready for pick up",
                ]
            }
        ]}
        footerDescription= "Washh It is online demand laundry service company with five-star laundry, dry cleaning, ironing, and steamrolling services. We endeavor to gain high customer satisfaction by providing best services exceeding your expectations."
        imageUrl="/saree.jpg"
        />
    )
}