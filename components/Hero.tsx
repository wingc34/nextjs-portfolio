import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "lib/sanity";

type Props = {
  pageInfo: PageInfo
};

export default function Header({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Welcome! My Name is ${pageInfo?.name}`,
      "Love Coffee, Music and Guitar🎸",
      "Of course Love Coding👩‍💻"
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.25, 1.25, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="absolute lg:w-[525px] lg:h-[525px] w-[375px] h-[375px] border-4 border-crepe rounded-full"
      />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        width={100}
        height={100}
        alt="Profile Icon"
      />
      <h2 className="uppercase text-crepe text-xl italic font-black">
        {pageInfo?.role}
      </h2>
      <h1 className="text-xl lg:text-2xl font-semibold">
        <span className="text-crepe">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>

      <div className="z-10 pt-5" style={{'margin': '0px'}}>
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}
