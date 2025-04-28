import ServiceTemplate from "@/components/ServiceTemplate";

export default function HomePage() {
    return(
       <ServiceTemplate
       title="Wash & Fold Laundry Service Hyderabad"
       description="In the fast-paced world, every person is busy with their chores that they merely get time to deal with their regular personal tasks like washing and folding clothes. Washing clothes involves enormous time and effort, many people DIY while others choose Wash and Fold services Hyderabad. The cleaning and sorting haul is a never-ending chore, and it is so tedious that many people prefer to avoid it. Laundry is far more than just hours of work; you need to take care of clothes, dry it, and fold it back to prevent crumply, wrinkly mess. You won't believe, but you can substantially add up hours to your chores by skipping a wash and fold services. You can also potentially save your running electricity bills by hiring someone for this work."
       sections={[
        {
         heading: "What is Wash and Fold services?",
          type: "para",
          items: [
            "Wash and Fold Services Hyderabad is a basic laundry service. Your clothes are washed in advanced washing machines and tumble dried in a drier better than your home. Later, it is folded and returned to the customer and a bright and beautiful way. It makes your day less hectic and saves a massive amount of electricity bills. Most importantly, all the clothes are returned within the time frame of a day or two."
          ],
        },
        {
         heading: "Benefits of Wash and Fold Services",
          type: "list",
          items: [
            "Saves Plenty of time, you have to place clothes in your wardrobe",
            "Proper hygiene that takes adequate care of sanitization and perfectly washed clothes",
            "Cost-effective, save money off your machine bills",
            "Stain removal, you would get stainless clothes with proper care of your garment",
            "Clean even more substantial items, comforters, rugs, linens, blankets all could be cleaned easily by professional"
          ],
        },
        {
            // heading: "What is Wash and Fold services?",
             type: "para",
             items: [
                "Wash and Fold benefits are not limited. WashhIt is on-demand laundry, dry cleaning service tailored as per demands of the customers. Whether you are looking laundry services for convenience, time saving or peace of mind, Washh It understand and attend your needs at its best. Don't hate your laundry, give it to us. We are obsessed with laundry and care for your clothes with perfection."
             ],
           },
        {
            // heading: "What is Wash and Fold services?",
             type: "para",
             items: [
                "Invest your valuable time in your business or with your loved ones, let the laundry work on us. Contact our representative for wiping laundry off from your weekly to-do-list that has been stressful and hectic exercise."
             ],
           },
       ]}
       imageUrl="/fold.jpg"
       />
    )
}