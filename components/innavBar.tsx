import React from "react";
import { Avatar, Link } from '@nextui-org/react'
import Image from "next/image";

export default function Innavbar() {
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-25 pt-5 pb-5 shadow-lg shadow-black/40">
                <div className="flex flex-wrap">
                    <div className="px-6 lg:w-3/4 w-1/2 self-center">
                        <Link href="/" className="text-white font-bold font-firaCode lg:text-2xl text-sm">
                            <img color="primary"  alt="profile itc" src={"/assets/logo.jpeg"} className="inline rounded-full lg:w-[50px] w-[30px] border-2 border-boxColor" />
                            <span className="ml-2">Hack0-VITB</span>
                        </Link>
                    </div>
                    <div className="lg:px-18 px-3 lg:w-1/4 w-1/4 space-x-1 lg:space-x-8 self-center">
                        <Link href={"/api/auth/signout"} className="text-white font-bold font-firaCode lg:text-2xl text-sm">
                            ./end.sh
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
