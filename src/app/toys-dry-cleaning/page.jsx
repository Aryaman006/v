import ServiceTemplate from "@/components/ServiceTemplate";
import { headers } from "next/headers";

export default function Home() {
    return(
        <ServiceTemplate
        title="Toys Dry Cleaning Services in Hyderabad"
        description={[
            "A right laundry service can ease your work by cleaning and ironing clothes, Steam ironing services Hyderabad is one of them. In the corporate world and our daily lives, we must wear freshly iron clothes complimenting neat and tidy looks. Since ages, people have been practicing ironing clothes to avoid shrinkage and giving it wrinkle-free look.",
            "Here at 'Washh IT', we understand that not everyone has ample time to launder and steam iron their shirts and other garments at their homes. There are a lot of people who involve most of their time in business or job; they can't find time to wash and iron clothes. We are here to serve with the best quality of ironing and washing services that you would not be able to get from your local laundry walas. The old traditional way of ironing can damage your clothes and even adds up discoloration. We are expert that handles your ironed clothes makes you look smarter and more professional. Your clothes judge a lot about your fashion and add a statement to your personality"
        ]}
        sections={[
            {
                heading: "Why WashhIt?",
                type: "para",
                items: [
                    "Washh It recognizes that ironing can be a daunting task and it is pushed to the back of your priority list. We offer reliable and flexible services to our customer in Hyderabad at an affordable rate. Our services are carried out with the utmost care and attention. Your wardrobe beauty is vital to us; we assure that all the delicate fabrics and unique fabrics are ironed with extra care."
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
         footerTitle="Steam Ironing in Hyderabad "
      footerDescription="We offers quick and reliable services that assess your laundry needs from washing, dry cleaning, steam ironing, saree rolling, dying, and much more. If your shirts looking worse for wear or your favorite dress is creased, leave the job on us. Just fill the form below or contact our representative."
      imageUrl="/toy.jpg"
        />
    )
}