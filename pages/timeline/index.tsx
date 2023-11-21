import React from "react";
import Navbar from "@/components/navBar";
import TimelineSection from "@/components/timelineSection";

export default function Timeline() {
    return(
        <main className="">
            <div className="pt-16">
                <Navbar />
            </div>
            <div className="pt-10 pb-10">
                <TimelineSection />
            </div>
        </main>
    )
}