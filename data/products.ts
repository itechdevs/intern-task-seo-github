export type Product = {
  id: string;
  name: string;
  category: "Sensors" | "Antivirus & Security";
  price: number; // NPR, VAT included
  summary: string;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "cmhx5z0gl001jmw01vcj8gibj",
    name: "Day / Night Sensor",
    category: "Sensors",
    price: 650,
    summary:
      "230V AC automatic day/night sensor for industrial use. Switches on and off with daylight.",
    description:
      "The 230V AC Automatic Day Night Sensor is a semi-automatic device made from high-quality plastic that detects daylight and switches on or off accordingly. It has an adjustable built-in timer, an adjustable sensitivity setting, and a manual override switch. Easy to install and backed by a manufacturer's warranty.",
    image: "/images/product-sensor.svg",
  },
  {
    id: "cmbuaogax001gpv01zghlbirt",
    name: "Magnetic Sensor - for Water Level Controller",
    category: "Sensors",
    price: 650,
    summary: "Shock proof, rust proof, dust proof and maintenance free.",
    description:
      "A magnetic sensor for water level controllers. Features: shock proof, never rusts, never dusts, never needs maintenance.",
    image: "/images/product-sensor.svg",
  },
  {
    id: "cmei4r9m7000epf01ab32i20c",
    name: "eScan Antivirus - 2 User (Limited Time Offer)",
    category: "Antivirus & Security",
    price: 670,
    summary: "Protect two computers with a single eScan Antivirus license.",
    description:
      "eScan Anti-Virus with a 2 User license protects two separate computers or devices with a single purchase. Install and activate it on two machines for protection against malware, viruses and other online threats.",
    image: "/images/product-antivirus.svg",
  },
  {
    id: "cmat5lhd30004no010jz04oce",
    name: "eScan Antivirus - 1 User",
    category: "Antivirus & Security",
    price: 670,
    summary: "Essential antivirus protection for a single user.",
    description:
      "Essential antivirus protection for a single user with real-time scanning and malware removal.",
    image: "/images/product-antivirus.svg",
  },
  {
    id: "cmbuamr3s001apv01pfm9ar0c",
    name: "Float Switch Sensor for Water Level Controller with 2 Meter Wire",
    category: "Sensors",
    price: 750,
    summary:
      "Corrosion-free float switch for water tanks, coolers and fuel storage.",
    description:
      "A float switch for water tanks, water coolers and fuel storage such as diesel or kerosene. Rated for 500,000+ cycles, corrosion-free, with ISI cable and a sturdy body. Hang it in the tank and connect it to an on/off switch: it switches off when the tank is full and on when it is empty.",
    image: "/images/product-sensor.svg",
  },
  {
    id: "cmat5oid40008no01nlki84ds",
    name: "eScan Antivirus - 3 Users",
    category: "Antivirus & Security",
    price: 1170,
    summary: "Comprehensive antivirus protection for up to 3 users.",
    description: "Comprehensive antivirus protection for up to 3 users.",
    image: "/images/product-antivirus.svg",
  },
  {
    id: "cmat5q4om000eno01arz7zhlg",
    name: "eScan Internet Security Suite - 1 User",
    category: "Antivirus & Security",
    price: 1170,
    summary: "Advanced internet security suite for 1 user.",
    description:
      "Secure your digital life with an advanced internet security suite for 1 user.",
    image: "/images/product-antivirus.svg",
  },
  {
    id: "cmbub3x24001wpv01wb9l7l2f",
    name: "PIR Motion Sensor Ceiling Mount",
    category: "Sensors",
    price: 1299,
    summary:
      "Ceiling-mount PIR motion sensor for lighting, alarms and automatic doors.",
    description:
      "A ceiling-mount PIR motion sensor. Install the unit about 1.6 m above ground level and keep high-heat lights away from it. Suitable for intruder alarms, automatic ticket gates, entryway and security lighting, automated sinks and toilet flushers, hand dryers and automatic doors.",
    image: "/images/product-sensor.svg",
  },
  {
    id: "cmbub6wd20020pv01oexj4djn",
    name: "PIR Motion Sensor Wall Mount",
    category: "Sensors",
    price: 1299,
    summary:
      "Wall-mount PIR motion sensor for lighting, alarms and automatic doors.",
    description:
      "A wall-mount PIR motion sensor. Install the unit about 1.6 m above ground level and keep high-heat lights away from it. Suitable for intruder alarms, automatic ticket gates, entryway and security lighting, automated sinks and toilet flushers, hand dryers and automatic doors.",
    image: "/images/product-sensor.svg",
  },
  {
    id: "cmbubeg7e002cpv01ad5nhpm0",
    name: "Microwave/Radar Motion Sensor Switch (Microwave Small Square type)",
    category: "Sensors",
    price: 1450,
    summary:
      "5.8 GHz microwave motion sensor for energy savings, safety and automation.",
    description:
      "An energy-saving switch using a 5.8 GHz microwave sensor. It identifies day and night automatically, reacts quickly, is more accurate than PIR, is not affected by temperature, and detects through glass, doors and thin walls.",
    image: "/images/product-sensor.svg",
  },
  {
    id: "cmat5tun4000ono01ygpisnwp",
    name: "eScan Total Security Suite - 1 User",
    category: "Antivirus & Security",
    price: 1470,
    summary: "All-in-one security suite with enhanced privacy and data protection.",
    description:
      "An all-in-one security suite with enhanced privacy and data protection for a single user.",
    image: "/images/product-antivirus.svg",
  },
  {
    id: "cmbub9hw40024pv01o7ps062v",
    name: "Microwave/Radar Motion Sensor Switch (Microwave Thin Round type)",
    category: "Sensors",
    price: 1650,
    summary:
      "360-degree microwave radar sensor with built-in day/night photocell.",
    description:
      "A microwave radar sensor with 360-degree detection and a 30 ft diameter range. Radar waves penetrate glass, paper, plastic and thin walls. A built-in photocell supports a 24/7 daylight mode or a night-only mode, making it a drop-in replacement for PIR sensors. Suggested install height is 8-12 ft.",
    image: "/images/product-sensor.svg",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(price: number): string {
  return `Rs. ${price.toLocaleString("en-US")}.00`;
}
