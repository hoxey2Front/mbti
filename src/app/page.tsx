"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  const formatStorage = () => {
    localStorage.removeItem("MBTI");
  };
  return (
    <main className="flex flex-col items-center justify-center">
      <motion.div
        className="flex flex-col items-center gap-12 max-w-[1000px] px-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-[#6d45fc] w-full truncate">1분만에 MBTI 알아보기</h1>
        <Button className="text-xl sm:text-2xl xl:text-3xl w-full p-8 bg-[#6d45fc] hover:bg-[#896aff] hover:pl-20 group transition-all duration-300 ease-in-out"
          onClick={formatStorage}
          asChild>
          <Link href="/test" className="w-full">
            <div className="flex justify-center items-center gap-2 group-hover:font-[600] dark:text-[#eee]/70">
              Start ᐅ
            </div>
          </Link>
        </Button>
      </motion.div>
    </main>
  );
}
