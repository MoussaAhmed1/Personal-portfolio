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
            aria-label={item.alt}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="size-11 sm:size-10 border border-border bg-background rounded-full flex items-center justify-center p-2 transition-colors hover:bg-accent hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Image
              src={item.src}
              alt=""
              width={20}
              height={20}
              className="opacity-80 dark:invert"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
