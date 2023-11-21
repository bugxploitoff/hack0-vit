import React from "react";
import { Avatar, Link } from '@nextui-org/react'
import { FaArrowRight } from 'react-icons/fa'; 

export default function Goback() {
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-25 pt-5 pb-5 shadow-lg shadow-black/40">
              
<div className="flex items-center justify-center">
    <div className="lg:px-18 px-3 lg:w-1/4 w-1/2 space-x-2 lg:space-x-8 flex items-center">
        <Link href={"/"} className="text-white font-bold font-firaCode lg:text-2xl text-sm">
            Go to Home
        </Link>
        <FaArrowRight className="text-white" />
    </div>
</div>
            </div>
        </div>
    )
}
