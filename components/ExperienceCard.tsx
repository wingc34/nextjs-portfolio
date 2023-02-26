import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Experience } from "@/typings";
import { urlFor } from "lib/sanity";
import dayjs from 'dayjs'

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  const dateStarted = dayjs(experience.dateStarted).format("MM-DD-YYYY").toString()
  const dateEnded = dayjs(experience.dateEnded).format("MM-DD-YYYY").toString()
  return (
    <article className="rouned-lg space-y-7 w-full px-10">
      {experience?.companyImage && (
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
        ></motion.img>
      )}
      <div className="px-0 md:px-16 text-crepe">
        <h4 className="text-center text-3xl md:text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="text-center font-bold text-xl md:text-2xl mt-1">{experience?.company}</p>
        <div className="flex flex-wrap space-x-2 my-2 justify-center">
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              className="h-12 w-12"
              src={urlFor(technology.image).url()}
              width={50}
              height={50}
              alt="experience technology image"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-crepe text-center">
          {dateStarted} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : dateEnded}
        </p>

        <ul className="list-circle space-y-4 ml-5 text-lg max-h-80 md:max-h-96 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray scrollbar-thumb-crepe/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
