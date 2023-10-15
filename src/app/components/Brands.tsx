"use client"

// image
import Image from "next/image";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "@/app/variants";


const brandsArray = [
  {
    id: "0",
    path: "icons/brands/ford.svg",
    alt: "ford",
    width: 85,
    height: 32,
  },
  {
    id: "1",
    path: "icons/brands/mercedes.svg",
    alt: "mercedes",
    width: 60,
    height: 60,
  },
  {
    id: "2",
    path: "icons/brands/audi.svg",
    alt: "audi",
    width: 85,
    height: 50,
  },
  {
    id: "3",
    path: "icons/brands/bmw.svg",
    alt: "bmw",
    width: 60,
    height: 60,
  },
  {
    id: "4",
    path: "icons/brands/vw.svg",
    alt: "vw",
    width: 60,
    height: 60,
  },
  {
    id: "5",
    path: "icons/brands/skoda.svg",
    alt: "skoda",
    width: 60,
    height: 60,
  },
  {
    id: "6",
    path: "icons/brands/mazda.svg",
    alt: "mazda",
    width: 60,
    height: 60,
  },
]

export function Brands() {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        {/* brand wrapper */}
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          {brandsArray.map(item => (
            <div key={item.id}>
              <Image src={item.path} width={item.width} height={item.height} alt={item.alt} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
