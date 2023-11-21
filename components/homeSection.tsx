import Image from "next/image"
import React from "react"
import { HiArrowNarrowRight, HiChevronDoubleRight } from "react-icons/hi"
import AboutWe from "@/lib/aboutWe"
import TypedAnim from "@/lib/forTyped"

export default function HomeSection() {
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-40 pt-8 pb-8 shadow-lg shadow-black/50">
                <div className="flex flex-wrap pb-10">
                    <div className="px-6">
                        <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                            <h1 className="pt-1 text-teal-500 invisible lg:visible"><HiArrowNarrowRight /></h1>
                            <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-blue-300 inline">home </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">./welcome.sh</span></h1>
                        </a>
                        
                    </div>
                    <div className="w-2/4 px-6 mx-auto">
                        <Image src={"/assets/bumi.webp"} width={400} height={400} alt="Maskot ITC" className=""/>
                    </div>
                    <div className="w-full text-center px-6">
                        <h1 className="font-rubikFont lg:text-4xl font-bold text-shadowBox text-lg">Welcome to Hack0-VIT</h1>
                        <h3 className="font-firaCode text-sm lg:text-2xl italic text-gray-400 lg:mb-10 mb-5">Empower, Innovate, Transform: Web3 Unleashed</h3>
                    </div>
                </div>

                <div className="px-6">
                    <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                        <h1 className="pt-1 text-teal-500 invisible lg:visible"><HiArrowNarrowRight /></h1>
                        <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-blue-300 inline">home </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">./about-we</span></h1>
                    </a>    
                </div>
                <div className="flex flex-wrap ">
                    <div className="w-full lg:w-1/2 lg:text-lg text-sm lg:px-6">
                        <AboutWe />
                    </div>
                    <div className="w-full lg:w-1/2 pt-5 px-6">
                        <h1 className="font-firaCode lg:text-3xl font-bold text-shadowBox text-lg">Hello 👋, welcome to Hack0-VITB</h1>
                        <a className="font-firaCode text-sm lg:text-2xl text-gray-400 lg:mb-10 mb-5 flex flex-wrap space-x-3">
                            <h1 className="pt-1"><HiChevronDoubleRight /></h1>
                            <TypedAnim />
                        </a>
                        <p className="font-firaCode text-sm lg:text-lg font-thin text-gray-300 lg:w-11/12 mb-10">Welcome to Hack0-VITB,Embark on a digital journey through puzzles, encryption, and code-breaking challenges in H4ck3rs-CTF - where cybersecurity skills meet thrilling competition. </p>
                        <div className="grid grid-cols-8 lg:w-8/12">
                            <a className={`bg-black py-5 px-5`}></a>
                            <a className={`bg-red-400 py-5 px-5`}></a>
                            <a className={`bg-teal-400 py-5 px-5`}></a>
                            <a className={`bg-yellow-400 py-5 px-5`}></a>
                            <a className={`bg-blue-400 py-5 px-5`}></a>
                            <a className={`bg-purple-400 py-5 px-5`}></a>
                            <a className={`bg-blue-400 py-5 px-5`}></a>
                            <a className={`bg-white py-5 px-5`}></a>
                            <a className={`bg-gray-400 py-5 px-5`}></a>
                            <a className={`bg-red-400 py-5 px-5`}></a>
                            <a className={`bg-teal-400 py-5 px-5`}></a>
                            <a className={`bg-yellow-400 py-5 px-5`}></a>
                            <a className={`bg-blue-400 py-5 px-5`}></a>
                            <a className={`bg-purple-400 py-5 px-5`}></a>
                            <a className={`bg-blue-400 py-5 px-5`}></a>
                            <a className={`bg-white py-5 px-5`}></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
};
