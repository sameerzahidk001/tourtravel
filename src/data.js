export const PHONE = { whatsapp: "923092619096", display: "0309-2619096" };

export const contacts = [
  { label: "WhatsApp", value: "0309-2619096", href: "https://wa.me/923092619096", note: "Tour desk" },
  { label: "WhatsApp", value: "0324-4216936", href: "https://wa.me/923244216936", note: "Second WhatsApp" },
  { label: "Call", value: "0349-4127214", href: "tel:+923494127214", note: "Voice line" },
];

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/people/Star-tour-Rent-a-car/61561128629925/" },
  { label: "TikTok", href: "https://www.tiktok.com/@startourrentacar" },
  { label: "Instagram", href: "https://www.instagram.com/star_tours_and_travel/" },
];

export const places = [
  { id: "Any", label: "Any trip" },
  { id: "Hunza", label: "Hunza" },
  { id: "Skardu", label: "Skardu" },
  { id: "Naran Kaghan", label: "Naran Kaghan" },
  { id: "Swat", label: "Swat" },
  { id: "Kalam", label: "Kalam" },
  { id: "Family", label: "Family coach" },
];

export const categories = ["All", "Hunza", "Skardu", "Naran Kaghan", "Swat", "Kalam", "Family"];

export const tours = [
  {
    slug: "hunza",
    title: "Hunza tour",
    place: "Hunza",
    category: "Hunza",
    days: "Dates on quotation",
    rate: null,
    unit: "with driver",
    image: "/media/reel-road.jpg",
    line: "A private car and driver toward Hunza.",
    summary: "Hunza is one of the trips most guests ask for. The vehicle and driver leave from Islamabad. Days, stops, and the fare are set in the quotation before you travel.",
    includes: ["Vehicle with driver", "Islamabad pickup and the return drop", "Stops you name on the Hunza road", "Fare confirmed before departure"],
    plan: [
      { day: "Quotation", text: "Send the dates and headcount. Sikender Hayat replies with the car and the price." },
      { day: "On the road", text: "The driver stays with the group for the days on that quotation." },
      { day: "Return", text: "Drop in Islamabad, or add another valley if it is written into the fare first." },
    ],
  },
  {
    slug: "skardu",
    title: "Skardu road tour",
    place: "Skardu",
    category: "Skardu",
    days: "4 to 7 days",
    rate: 22000,
    unit: "day with driver",
    image: "/media/reel-valley.jpg",
    line: "Skardu these days, if you want to explore.",
    summary: "The trip on our reels. A private vehicle and driver from Islamabad toward Skardu, with the days and photo stops set by you.",
    includes: ["Vehicle with driver", "Islamabad pickup and the return drop", "Stops you name on the Skardu road", "Fare confirmed by quotation before travel"],
    plan: [
      { day: "Before you go", text: "Sikender Hayat confirms the car class, the dates, the pickup point, and the fare on WhatsApp." },
      { day: "On the road", text: "Drive north. Pace follows the weather, the same way the reels do." },
      { day: "In Skardu", text: "The vehicle stays with the group for the valleys you want that week." },
      { day: "Return", text: "Drop in Islamabad, or extend if you add another valley before the return day." },
    ],
  },
  {
    slug: "naran-kaghan",
    title: "Naran Kaghan tour",
    place: "Naran Kaghan",
    category: "Naran Kaghan",
    days: "Dates on quotation",
    rate: null,
    unit: "with driver",
    image: "/media/photo4.jpg",
    line: "Naran and Kaghan, with a driver for the whole run.",
    summary: "A private vehicle and driver for Naran Kaghan. The season, the nights, and the price are confirmed on WhatsApp before the car is booked.",
    includes: ["Vehicle with driver", "Pickup in Islamabad or Rawalpindi", "The Naran Kaghan route you agree", "Quotation before booking"],
    plan: [
      { day: "Quotation", text: "Tell us the month and how many people. The fare comes back before you commit." },
      { day: "Drive", text: "The driver keeps the car for the days on the quotation." },
      { day: "Return", text: "Same-city drop, unless an extra night was added to the price first." },
    ],
  },
  {
    slug: "swat",
    title: "Swat heritage tour",
    place: "Swat",
    category: "Swat",
    days: "1 to 2 days",
    rate: 14000,
    unit: "day with driver",
    image: "/media/photo2.jpg",
    line: "Swat Museum and the valley around it.",
    summary: "A slower out-station day built around Swat, including the museum stop in our own photo album.",
    includes: ["Vehicle with driver", "Museum time", "Same-day return or one night", "Quotation before booking"],
    plan: [
      { day: "Morning", text: "Pickup in Islamabad or Rawalpindi and the drive into Swat." },
      { day: "Midday", text: "Swat Museum and the valley time you booked." },
      { day: "Evening", text: "Return the same day, or stay if the second day is on the fare." },
    ],
  },
  {
    slug: "kalam",
    title: "Kalam tour",
    place: "Kalam",
    category: "Kalam",
    days: "Dates on quotation",
    rate: null,
    unit: "with driver",
    image: "/media/reel-river.jpg",
    line: "Kalam with a driver, often paired with Swat.",
    summary: "Kalam is booked as its own trip or added to Swat. The car always comes with a driver. Ask for the quotation before you treat any figure as the fare.",
    includes: ["Vehicle with driver", "Kalam, or Kalam plus Swat", "Islamabad pickup", "Price confirmed before booking"],
    plan: [
      { day: "Quotation", text: "Say if you want Kalam only or Kalam with Swat. The price follows that route." },
      { day: "On the road", text: "The driver stays with the group for the booked days." },
      { day: "Return", text: "Drop where the quotation says, usually Islamabad." },
    ],
  },
  {
    slug: "family-coach",
    title: "Family and group tour",
    place: "Your route",
    category: "Family",
    days: "Your dates",
    rate: 25000,
    unit: "day in the coach",
    image: "/media/photo4.jpg",
    line: "One coach for the whole family.",
    summary: "Weddings, families, and friend groups travel together in the mini coach on the service card.",
    includes: ["Mini coach with driver", "Wedding or family timing", "Hunza, Skardu, Naran Kaghan, Swat, or Kalam", "One contact for the group"],
    plan: [
      { day: "Headcount", text: "Send people and luggage so the coach is the right size." },
      { day: "Route", text: "Hunza, Skardu, Naran Kaghan, Swat, Kalam, or a mix of those." },
      { day: "Travel day", text: "Pickup on time, with a backup car if the group needs a second vehicle." },
    ],
  },
];

export const gallery = [
  { src: "/media/cover.jpg", title: "Northern lake", caption: "Cover photo from the Facebook page." },
  { src: "/media/reel-valley.jpg", title: "High road", caption: "From the Skardu road reels." },
  { src: "/media/reel-skardu.jpg", title: "Skardu these days", caption: "If you want to explore." },
  { src: "/media/reel-road.jpg", title: "Valley highway", caption: "Out-station driving." },
  { src: "/media/reel-river.jpg", title: "River crossing", caption: "A stop on the same run." },
  { src: "/media/photo2.jpg", title: "Swat Museum", caption: "A place we visit." },
  { src: "/media/photo4.jpg", title: "Pine shade", caption: "A slower hour on tour." },
  { src: "/media/photo3.jpg", title: "Garden walk", caption: "Guests on a day out." },
  { src: "/media/logo.jpg", title: "Service card", caption: "Vehicles and phone numbers from the page." },
];

export const faqs = [
  {
    q: "Do I need a quotation before I book?",
    a: "Yes. Ask for a quotation first. Nothing on this site is a confirmed fare. Sikender Hayat sends the price on WhatsApp, and the tour or the car is booked only after you accept it.",
  },
  {
    q: "Is the driver included?",
    a: "Yes. Every tour and every rental car comes with a driver. Self-drive is not available.",
  },
  {
    q: "Where do tours start?",
    a: "Islamabad and the airport are the usual pickup. The trips on the list are Hunza, Skardu, Naran Kaghan, Swat, and Kalam. The exact pickup point is set with Sikender Hayat.",
  },
  {
    q: "Can I change the days?",
    a: "Yes. Tell us the dates in the quotation. Extra nights are added to the price before you travel, not after.",
  },
  {
    q: "What is not included?",
    a: "Hotels, meals, and entry tickets stay with you unless you ask us to arrange them in the same chat. The vehicle, driver, and the agreed route are what the tour fare covers.",
  },
  {
    q: "What if the weather closes the road?",
    a: "We say so before you leave when we already know. If a vehicle fails on the way, the backup policy sends another car.",
  },
];

export const slides = [
  {
    image: "/media/cover.jpg",
    kicker: "Tour trips · Skardu and Swat",
    title: "The long road north, arranged for you.",
    text: "Private vehicle, driver, and a fare agreed on WhatsApp before the pickup.",
  },
  {
    image: "/media/reel-valley.jpg",
    kicker: "From our own reels",
    title: "Skardu these days, if you want to explore.",
    text: "The high road we film. Tell us the dates and how many people are in the car.",
  },
  {
    image: "/media/photo2.jpg",
    kicker: "Swat",
    title: "Museum, valley, and a same-day return if you want it.",
    text: "A shorter tour for families who do not want a full Skardu week.",
  },
];

export function money(amount) {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

export function waLink(text) {
  return `https://wa.me/${PHONE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const SITE_URL = "https://startour.travel";
export const TRAVEL_PUBLIC = "https://hartford-blocks-contemporary-freebsd.trycloudflare.com";

export function travelSite() {
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host.startsWith("192.168.")) {
    return `${window.location.protocol}//${host}:5174`;
  }
  if (host.endsWith("trycloudflare.com")) return TRAVEL_PUBLIC;
  return `${SITE_URL}/rental`;
}
