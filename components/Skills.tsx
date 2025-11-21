import { Skill as SkillType } from "@/typings";
import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  const sortedSkills = skills.sort((a, b) => a.order - b.order)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="hidden md:block md:absolute md:top-24 uppercase text-crepe text-2xl tracking-[12px]">
        Skills
      </h3>
      <h3 className="absolute top-20 md:top-36 uppercase tracking-[3px] text-crepe text-sm my-4">
        Hover over a skill for currency profieciency
      </h3>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-5">
        {sortedSkills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
