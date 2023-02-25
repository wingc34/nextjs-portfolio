import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

type Props = { };

export default function Header({ }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-end max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/wing-chung-ba5ab1193"
          fgColor="white"
          bgColor="transparent"
        />
        <Link href="#contact">
          <div className="flex flex-row items-center cursor-pointer">
            <EnvelopeIcon className="w-7 h-7 mx-4 cursor-pointer" />
            <p className="uppercase hidden md:inline-flex text-sm">
              Get In Touch
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
}
