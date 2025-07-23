"use client";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import SocialLinks from "@/components/ui/SocialLinks";
import { MessageCircle, Settings, Star, StarIcon } from "lucide-react";
import Button from "../ui/Button";
const HomeHero = () => {
  const pVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const spanVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const randomText = "Welcome to my website".split("");
  return (
    <section className="flex flex-col relative w-full overflow-hidden">
      <div className="px-4 md:px-6 container">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 lg:gap-12  items-center justify-between place-items-center">
          {/* Left content */}
          <div className="flex flex-col justify-center space-y-6 lg:items-start lg:text-start items-center text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-gray-900">
                Increase Your <span className="block">Customers Loyalty</span>
                <span className="block">and Satisfaction</span>
              </h1>
              <p className="max-w-[500px] text-gray-700 text-lg md:text-xl leading-relaxed">
                We help businesses like yours earn more customers, standout from
                competitors, make more money
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg font-medium rounded-lg"
              >
                Get Started
              </Button>
            </div>
            <SocialLinks /> 
          </div>

          {/* Right image */}
          <div className="relative flex items-center lg:items-start">
            <div className="relative rounded-full h-[300px] w-[200px] md:h-[600px] md:w-[400px] ">
              <Image
                className="z-2 h-[300px] w-[200px] md:h-[600px] md:w-[400px] absolute -top-[31.4%] left-1/4 lg:left-1/8 rounded-full -translate-x-1/4 translate-y-1/8"
                priority={true}
                src="/images/me.png"
                alt="Mousa Ahmed"
                width={400}
                height={600}
                // style={{ borderRadius: "50%" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                loading="eager"
              />
              <div className="absolute h-[200px] w-[200px] md:h-[400px] md:w-[400px] bg-background dark:bg-secondary top-1/16 left-1/4 lg:left-1/8 rounded-full -z-0 -translate-x-1/4 translate-y-1/8" />
            </div>

            {/* Decorative floating icons */}
            <div className="absolute -inset-7 pointer-events-none hidden md:block">
              <div className="absolute top-20 left-20 w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center rotate-12 opacity-90">
                <StarIcon className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-32 right-32 w-10 h-10 bg-emerald-400 rounded-lg flex items-center justify-center -rotate-12 opacity-90">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="absolute bottom-40 left-32 w-11 h-11 bg-emerald-500 rounded-lg flex items-center justify-center rotate-45 opacity-90">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div className="absolute top-1/2 right-20 w-8 h-8 bg-orange-300 rounded-full opacity-80"></div>
              <div className="absolute bottom-32 right-40 w-6 h-6 bg-emerald-300 rounded-full opacity-80"></div>
              <div className="absolute top-40 left-1/3 w-4 h-4 bg-orange-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Company logos */}
      <div className="mt-0 py-8 w-full bg-background">
        <div className="flex container items-center justify-between gap-8 md:gap-12 flex-wrap opacity-70">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-gray-600 font-medium text-lg">Google</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-gray-600 font-medium text-lg">Trello</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-gray-600 font-medium text-lg">
              monday.com
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-gray-600 font-medium text-lg">Notion</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-gray-600 font-medium text-lg">Slack</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
