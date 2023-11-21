import React from "react";
import { Avatar, Link } from '@nextui-org/react'
import Image from "next/image";

export default function Footbar() {
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-25 pt-5 pb-5 shadow-lg shadow-black/40">
                <div className="flex flex-wrap">
                    <div className="px-6 lg:w-3/4 w-1/2 self-center">
                        <Link href="https://bugxploitoff.github.io/portfolio/" className="text-white font-bold font-firaCode lg:text-2xl text-sm">
                            <span className="ml-2">Made By @20MEI10014</span>
                        </Link>
                    </div>
                    <div className="lg:px-18 px-3 lg:w-1/4 w-1/3 space-x-1 lg:space-x-8 self-center">
                    <Link href={"/timeline"} className="text-white font-bold font-firaCode lg:text-2xl text-sm">
                            ./time.sh
                        </Link>
                        <Link href={"/sponsor"} className="text-white font-bold font-firaCode lg:text-2xl text-sm">
                            ./sponsor.sh
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
