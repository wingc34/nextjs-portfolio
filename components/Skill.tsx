import React from "react";
import Image from "next/image";
import { Skill as SkillType } from "@/typings";
import { urlFor } from "lib/sanity";

type Props = { skill: SkillType };

export default function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer w-20 h-20 xl:w-32 xl:h-32">
      <Image
        src={urlFor(skill?.image).url()}
        alt=""
        fill
        className="rounded-ful object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
}
