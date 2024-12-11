import Image from "next/image";
import Card from "../components/card";

export default function Search() {
    return (
        <div className=" py-24">
            <div className=" flex flex-col font-[family-name:var(--font-lexend)] w-4/6 mx-auto gap-10">
                <h1 className=" text-6xl text-center">Search For A Paper</h1>
                <div className=" rounded-full h-16 border-white border-2 flex px-5 gap-4">
                    <Image src="/magnifying.svg" className=" dark:invert" alt="search" width="24" height="24"/>
                    <input type="text" placeholder="Enter paper here..." className="flex-grow outline-none bg-transparent text-xl font-light"/>
                </div>
                <div className=" flex flex-col gap-5">
                    <h2 className=" text-xl pl-5">Recents</h2>
                    <div className=" grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4">
                        {/** Placeholder */}
                        <Card title="PAPER 001" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        <Card title="PAPER 002" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                        <Card title="PAPER 003" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        <Card title="PAPER 004" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        <Card title="PAPER 005" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        <Card title="PAPER 006" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    </div>
                </div>
            </div>
        </div>
    )
}
  