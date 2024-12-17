"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="fixed -z-50 right-0 bottom-0 h-full w-1/2">
        <Image src="/background.png" fill={true} alt="" />
      </div>
      <div className="h-full w-full flex items-center">
        <div className="flex px-12 flex-col lg:flex-row justify-between gap-10 lg:px-20 xl:px-28 font-[family-name:var(--font-lexend)] w-full">
          <div className="flex flex-col gap-10">
            <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
              <h1>Welcome.</h1>
            </div>
            <Link href="/login" className="bg-blue w-fit text-xl px-8 py-3 rounded-full flex gap-2">
              <span>LOGIN</span>
              <Image src="/external.svg" width="20" height="20" alt="redirect icon" className=" "/>
            </Link>
          </div>
          <div className=" flex lg:w-2/5 lg:justify-center">
            <div className="max-w-80 2xl:w-96 lg:backdrop-blur-md lg:p-6 rounded-xl flex flex-col gap-2" >
              <h2 className=" text-xl 2xl:text-2xl font-bold">What do we do?</h2>
              <p className=" text-md 2xl:text-lg">Our goal is to help students around the world study for their exams, by providing a platform that encourages collaboration to solve previous exams. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
