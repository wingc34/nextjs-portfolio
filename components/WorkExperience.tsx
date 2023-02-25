import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  const sortedExperiences = experiences.sort((a, b) => a.order - b.order);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden justify-center flex-col text-lft md:flex-row max-w-full md:px-10 my-4 mx-auto items-center"
    >
      <h3 className="hidden md:block absolute top-16 md:top-20 uppercase text-crepe text-2xl tracking-[12px]">
        Experience
      </h3>

      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="w-full md:w-4/5 mt-20 md:mt-0 z-9"
      >
        {sortedExperiences?.map((experience) => (
          <SwiperSlide key={experience._id}>
            <ExperienceCard experience={experience} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
