import ServiceTemplate from "@/components/ServiceTemplate";

export default function Home() {
    return(
        <ServiceTemplate
        title="About Us"
        sections={[
            {
                type: "list",
                items: [
                    "Precision in Every Stitch. Care in Every Wash.",
                    "At MR.V, cleaning is an art.",
                    "We specialize in professional laundry, dry cleaning, shoe and bag restoration, and carpet cleaning — offering care tailored to the unique needs of each item.",
                    "Our team combines modern techniques with personalized attention, ensuring your belongings always look and feel their best.",
                    "Trusted by thousands, MR.V is redefining what it means to be truly clean.",
                ]
            }
        ]}
        footerTitle="At MR.V, it’s not just cleaned. It’s Signature Clean."
        imageUrl="/logo.svg"
        />
    )
}