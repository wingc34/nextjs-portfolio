import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "lib/sanity";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="hidden md:block absolute top-20 md:top-24 uppercase tracking-[20px] text-crepe text-2xl">
        Projects
      </h3>

      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="relative w-full md:w-4/5 z-20"
      >
        {projects?.map((project, i) => (
          <SwiperSlide
            className="w-4/5 md:w-full mt-2 px-4"
            key={project._id}
          >
            <div className="relative mx-auto w-full py-36 mb-2 xl:py-48">
              <Image
                src={urlFor(project?.image).url()}
                fill
                alt=""
                className="object-contain"
              />
            </div>
            <div className="px-0 md:px-10 max-w-6xl mx-auto">
              <h4 className="text-crepe text-2xl md:text-4xl font-semibold text-center">
                Case Study {i + 1} of {projects.length}:{" "}
                <span className="underline decoration-crimson/70 decoration-[4px]">
                  {project?.title}
                </span>
              </h4>

              <div className="flex items-center space-x-2 my-4 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    className="h-10 w-10 rounded-full"
                    src={urlFor(technology.image).url()}
                    width={50}
                    height={50}
                    alt="project technology image"
                  />
                ))}
              </div>

              <p className="text-base md:text-lg text-center md:text-left text-crepe">
                {project?.summary}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full absolute top-[30%] bg-crimson/30 left-0 h-[500px] skew-y-12"></div>
    </motion.div>
  );
}
