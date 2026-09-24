import car4 from "../../assets/images/cars-image/bentley.webp";
import car5 from "../../assets/images/cars-image/benzg63.webp";
import car2 from "../../assets/images/cars-image/ferrari.webp";
import car1 from "../../assets/images/cars-image/lamborghini.webp";
import car3 from "../../assets/images/cars-image/porche.webp";


const cars = [
  {
    id: 1,
    brand: "Lamborghini",
    model: "Revuelto",
    price: 6500,
    year: 2024,
    engine: "6.5-L V12",
    engineSize: "6.5-L V12",
    engineType: "Petrol",
    acceleration: "2.5 Seconds",
    seats: 2,
    color: "Grey",
    horsepower: "1001 HP",
    topSpeed: "350 km/h",
    image: car1,

    description:
      "Lamborghini Revuelto combines a powerful V12 engine with modern hybrid technology.",

    bookingInfo: [
      "This Revuelto is carefully prepared before every rental. You can enjoy a comfortable, powerful and premium driving experience in Dubai.",
      "The Revuelto is suitable for special occasions, business trips, holidays and luxury driving experiences."
    ],

    pricingInfo: [
      "The rental price for this car is AED 6,500 per day. Availability depends on the selected rental dates, so book early if you have a specific date in mind.",
      "Members of our no-deposit membership program can skip the standard security deposit and get priority access to this specific unit when demand is high."
    ],

    whyChoose: [
      "The Revuelto combines luxury, performance and modern design. It provides a premium experience for customers looking for a high-performance car.",
      "Whether you are driving around Dubai or attending a special event, this car provides an excellent luxury driving experience."
    ],

    drivingFeel:
      "With 1,001 HP split between a naturally aspirated V12 and three electric motors, this Revuelto doesn't drive like a conventional supercar. The electric motors bolted on to the front axle mean the throttle response feels immediate, even when the V12 has not yet fully spun up."
  },

  {
    id: 2,
    brand: "Ferrari",
    model: "12Cilindri",
    price: 6000,
    year: 2025,
    engine: "6.5-L V12",
    engineSize: "6.5-L V12",
    engineType: "Petrol",
    acceleration: "2.9 Seconds",
    seats: 2,
    color: "Blue",
    horsepower: "830 HP",
    topSpeed: "340 km/h",
    image: car2,

    description:
      "Ferrari 12Cilindri is a powerful V12 car with a beautiful Italian design.",

    bookingInfo: [
      "This 12Cilindri is carefully prepared before every rental. You can enjoy a comfortable, powerful and premium driving experience in Dubai.",
      "The 12Cilindri is suitable for special occasions, business trips, holidays and luxury driving experiences."
    ],

    pricingInfo: [
      "The rental price for this car is AED 6,000 per day. Availability depends on the selected rental dates, so book early if you have a specific date in mind.",
      "Members of our no-deposit membership program can skip the standard security deposit and get priority access to this specific unit when demand is high."
    ],

    whyChoose: [
      "The 12Cilindri combines luxury, performance and modern design. It provides a premium experience for customers looking for a high-performance car.",
      "Whether you are driving around Dubai or attending a special event, this car provides an excellent luxury driving experience."
    ],

    drivingFeel:
      "The naturally aspirated V12 revs all the way to 9,500 rpm and makes a completely different sound to anything turbocharged or hybrid. It's a driving experience built around the engine itself, not just the numbers it produces."
  },

  {
    id: 3,
    brand: "Aston Martin",
    model: "DB12",
    price: 4500,
    year: 2024,
    engine: "4.0-L V8",
    engineSize: "4.0-L V8",
    engineType: "Petrol",
    acceleration: "3.5 Seconds",
    seats: 4,
    color: "Black",
    horsepower: "671 HP",
    topSpeed: "325 km/h",
    image: car3,

    description:
      "Aston Martin DB12 gives a good combination of luxury, comfort and performance.",

    bookingInfo: [
      "This DB12 is carefully prepared before every rental. You can enjoy a comfortable, powerful and premium driving experience in Dubai.",
      "The DB12 is suitable for special occasions, business trips, holidays and luxury driving experiences."
    ],

    pricingInfo: [
      "The rental price for this car is AED 4,500 per day. Availability depends on the selected rental dates, so book early if you have a specific date in mind.",
      "Members of our no-deposit membership program can skip the standard security deposit and get priority access to this specific unit when demand is high."
    ],

    whyChoose: [
      "The DB12 combines luxury, performance and modern design. It provides a premium experience for customers looking for a high-performance car.",
      "Whether you are driving around Dubai or attending a special event, this car provides an excellent luxury driving experience."
    ],

    drivingFeel:
      "The DB12 is a proper grand tourer, so it's built to feel relaxed on a long highway run and still tighten up when you want it to. Four seats mean you can actually bring people along instead of just showing off."
  },

  {
    id: 4,
    brand: "Bentley",
    model: "Continental GTC",
    price: 2950,
    year: 2025,
    engine: "4.0L V8",
    engineSize: "4.0L V8",
    engineType: "Petrol",
    acceleration: "3.4 Seconds",
    seats: 4,
    color: "Black",
    horsepower: "771 HP",
    topSpeed: "285 km/h",

    // no real photo yet, so using car1 (lamborghini) as a placeholder
    // swap this to the real Bentley image once it's ready
    image: car4,

    description:
      "Bentley Continental GTC is a hybrid-assisted V8 convertible, combining 771 hp with Bentley's grand-touring comfort.",

    bookingInfo: [
      "This Continental GTC is a specific 2025 unit finished in Black over a four-seat convertible cabin, carrying Bentley's most powerful current GTC specification at 771 hp.",
      "This particular unit has passed our full multi-point inspection before being listed for rental, and is prepped fresh before every booking."
    ],

    pricingInfo: [
      "The rental price for this car is AED 2,950 per day. As one of the most in-demand convertibles in our fleet, it books out quickly during peak season and on weekends, so book 3-5 days in advance.",
      "Members of our no-deposit membership program can skip the standard security deposit and get priority access to this specific unit when demand is high."
    ],

    whyChoose: [
      "Black brings out the Continental GTC's long bonnet and sweeping roofline, giving it a grand-touring elegance rather than an aggressive look.",
      "With the roof down, the Black exterior frames the cabin's lighter leather trim beautifully under Dubai's evening lighting at waterfront venues and hotel arrivals."
    ],

    drivingFeel:
      "The hybrid-assisted V8 blends immediate low-rev torque fill from its electric assistance with the deep growl of Bentley's twin-turbo V8, reaching 100 km/h in 3.4 seconds through an all-wheel-drive system built for year-round use. With the roof down it settles into effortless high-speed cruising, and with it up, wind and road noise stay remarkably well suppressed for a convertible."
  },

  {
    id: 5,
    brand: "Mercedes Benz",
    model: "G63 AMG",
    price: 1700,
    year: 2025,
    engine: "4.0L V8",
    engineSize: "4.0L V8",
    engineType: "Petrol",
    acceleration: "4.5 Seconds",
    seats: 5,
    color: "White",
    horsepower: "577 HP",
    topSpeed: "200 km/h",

    // no real photo yet, so using car1 (lamborghini) as a placeholder
    // swap this to the real G63 image once it's ready
    image: car5,

    description: 
      "White Mercedes Benz G63 AMG with the full AMG specification, 577 hp and 22-inch alloy wheels, equally at home on city streets and desert trails.",

    bookingInfo: [
      "This G63 AMG is a specific 2025 unit finished in White over a Nappa leather five-seat cabin, popular for landmark tours thanks to its clean finish photographing well against both desert and city skyline.",
      "This particular car has been detailed and safety-checked ahead of every booking, and it's one of our most popular Mercedes Benz Rent choices."
    ],

    pricingInfo: [
      "The rental price for this car is AED 1,700 per day. As a favourite for sightseeing and desert safari itineraries, this unit is in steady demand, so book 3-5 days in advance.",
      "Members of our no-deposit membership program can skip the standard security deposit and get priority access to this specific unit when demand is high."
    ],

    whyChoose: [
      "White paintwork over the flared wheel arches and stainless steel skid plates gives this unit a clean, striking presence outside the Burj Khalifa or Dubai Mall.",
      "The same off-road hardware makes it a genuinely capable choice for a run out to the Dubai Desert Conservation Reserve, with high ground clearance and a multi-terrain system."
    ],

    drivingFeel:
      "With 577 hp and 850 Nm of torque from the twin-turbo V8, this G63 AMG reaches 100 km/h in 4.5 seconds. AMG Performance 4MATIC all-wheel drive and adaptive suspension adjust automatically between smooth highway cruising and rougher desert terrain, giving this White unit genuine versatility across a full day of sightseeing and adventure."
}
];

export default cars;