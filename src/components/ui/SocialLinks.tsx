"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { social } from "../../../public/images/social-media/social";

export default function SocialLinks() {
  return (
    <div className="relative">
      <div className="flex gap-2 items-start justify-start flex-row ">
        {social.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 hover:bg-[#d8f768] border border-black rounded-full flex items-center justify-center p-2"
          >
            <Image src={item.src} alt={item.alt} width={20} height={20} />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
