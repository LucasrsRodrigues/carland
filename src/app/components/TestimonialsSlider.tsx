"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";

import { Pagination } from "swiper/modules";

import { FaQuoteLeft } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn } from "@/app/variants";

const testimonialsData = [
  {
    id: 1,
    message: "O serviço de carros alugados da CarLand superou minhas expectativas. Os veículos eram modernos e bem-mantidos. Fiz uma viagem incrível!",
    avatar: '/images/testimonial/avatar.png',
    name: "Ana Silva",
    job: "Gerente de Marketing"
  },
  {
    id: 2,
    message: "Alugar um carro na CarLand nunca foi tão fácil. O processo online é rápido, e a variedade de opções é impressionante. Recomendo a todos!",
    avatar: '/images/testimonial/avatar.png',
    name: "Carlos Oliveira",
    job: "Analista de Sistemas"
  },
  {
    id: 3,
    message: "Viajo a trabalho com frequência e sempre escolho a CarLand para alugar carros. A frota é diversificada, e o atendimento é excelente.",
    avatar: '/images/testimonial/avatar.png',
    name: "Fernanda Santos",
    job: "Consultora Financeira"
  },
  {
    id: 4,
    message: "Os preços da CarLand são competitivos, e a qualidade dos carros é indiscutível. Além disso, o suporte ao cliente é sempre prestativo. Ótima experiência!",
    avatar: '/images/testimonial/avatar.png',
    name: "Gabriel Lima",
    job: "Designer Gráfico"
  },
  {
    id: 5,
    message: "Alugar um carro na CarLand facilitou minha viagem de férias. Escolhi um veículo espaçoso e confortável, e tudo correu sem problemas. Recomendo!",
    avatar: '/images/testimonial/avatar.png',
    name: "Juliana Costa",
    job: "Professora"
  }
];

export function TestimonialsSlider() {
  return (
    <motion.div
      variants={fadeIn('up', 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[450px]"
      >
        {testimonialsData.map((person, index) => {
          return (
            <SwiperSlide key={person.id}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[847px] mb-12 font-medium">{person.message}</div>
                <Image src={person.avatar} className="mb-4" width={64} height={64} alt="" />
                <div className="text-lg font-medium">{person.name}</div>
                <div className="text-secondary">{person.job}</div>
              </div>

            </SwiperSlide>
          )
        })}
      </Swiper>
    </motion.div>
  );
}
