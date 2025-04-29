import ServiceTemplate from "@/components/ServiceTemplate";

export default function Home() {
    return(
        <ServiceTemplate
        title="Affordable Curtains and Carpets Dry Cleaning Services in Hyderabad"
        description={[
            "Cleaning curtains and carpets mean an entire day of yours dedicated to removing, cleaning, and drying them. Although the first and last can be easy, the cleaning - the most important part can be very tedious and tiring.",
            "Since not everyone usually has the right equipment for cleaning curtains and carpets, it gets even more difficult to clean them. Why take all the effort when you can simply give them for a carpet and curtain dry cleaning service?",
            "Washhit offers affordable cleaning services for curtains and carpets at your convenient terms.",
            "We take the utmost care for each piece we receive and give it the service that it requires."
        ]}
        sections={[
            {
                heading: "How to avail Washhit dry cleaning services?",
                description: [
                    "All you have to do is get in touch with the best curtain dry cleaners near you, fix a pick-up and drop time, keep your curtains or carpets packed, and relax. Our dry cleaning experts at Washhit will take care of the rest and deliver to you your products as good as new and as fresh as daisy.",
                    "Washhit offers free pickup and free home delivery.",
                    "Washhit extends its professional dry cleaning services in various areas in Hyderabad. Choose the service near you."
                ],
                type: "list",
                items: [
                    "Uppal", "Secunderabad", "Banjara Hills", "Madhapur", "Hitech City", "Gachibowli", "Miyapur", "Pragathi Nagar", "Nijampet", "Manikonda", "Kondapur", "Ameerpet", "Moosapet", "Erragadda", "SR Nagar"
                ]
            }
        ]}
        imageUrl="/curtain.jpg"
        />
    )
}