import React from "react";
import { HiArrowNarrowRight, HiChevronDoubleRight } from "react-icons/hi"
import CardProfile from "@/lib/forCard";

export default function ProfileSection() {
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-40 pt-8 pb-8 shadow-lg shadow-black/50">
                <div className="flex flex-wrap pb-8">
                    <div className="px-6">
                        <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                            <h1 className="pt-1 text-teal-500 invisible lg:visible"><HiArrowNarrowRight /></h1>
                            <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-blue-300 inline">manager </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">cat eventtimeline.md</span></h1>
                        </a>
                    </div>
                    <div className="px-6 pt-5">
                        <br />
<ol className="relative border-l border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ml-6">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="/assets/logo.jpeg" alt="Bonnie image"/>
        </span>
        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Platform Registration</time>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-300">Hack0-VITB Platform is a hackathon platform where you have to <a href="/register" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Register your profile</a> from <span className="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">to get into the get your profile verified</span></div>
        </div>
    </li>
    <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="/assets/logo.jpeg" alt="Thomas Lean image"/>
        </span>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="items-center justify-between mb-3 sm:flex">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Initial step</time>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Verify your email through <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">Register email</a></div>
            </div>
            <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Make sure only social login allowed for the gmail user, for other domain make sure you login through the credentials if you are facing any issue try to cntact us through emails <a href="mailto:support.hack0vit@vitbhopal.ac.in" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">support.hack0vit@vitbhopal.ac.in</a> <br />Make sure you write proper subject and proper description of problem  </div>
        </div>
    </li>
    <li className="mb-7 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="/assets/logo.jpeg" alt="Jese Leos image"/>
        </span>
        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Profile Building</time>
            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Build Your profile with all the details<a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">like a demo</a> and wait for approval  <span className="font-semibold text-gray-900 dark:text-white">by us</span></div>
        </div>
    </li>
    <li className="mb-7 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="/assets/logo.jpeg" alt="Jese Leos image"/>
        </span>
        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Get Access</time>
            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Get Access to and Hackathon problem <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Submit Your idea</a> using idea submission platform <span className="font-semibold text-gray-900 dark:text-white">And wait for your idea to get selected for a particular problem</span></div>
        </div>
    </li>
    <li className="mb-5 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="/assets/logo.jpeg" alt="Jese Leos image"/>
        </span>
        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Access Granted</time>
            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Now You will get 48 Hrs To build in 48 Hrs hackathon </div>
        </div>
    </li>
    <li className="mb-4 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="/assets/logo.jpeg" alt="Thomas Lean image"/>
        </span>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="items-center justify-between mb-3 sm:flex">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Submission Step</time>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">How to submit your projects <br /> Note: If the judgemental boards find the project pre exist or copied then the team will be disqualified</div>
            </div><div className="p-3 mb-2 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">First The github repo link you need to submit will have a callback github api to check the repo details </div>
            <div className="p-3 mb-2 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Once Submit and auto fetch the github repo details make sure you upload the project</div>
            <div className="p-3 mb-2 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Make sure you provide the project details and deployment link of the project(The project should be in production phase)</div>
            <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Click the conformation button to conform your submit within the time</div>
        </div>
    </li>
    <li className="mb-5 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="/assets/logo.jpeg" alt="Jese Leos image"/>
        </span>
        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Pitch Deck</time>
            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Now every team selected is requested to go review desk to provide a presentaion of 5-10 about what you have develop</div>
        </div>
    </li>
    <li className="mb-5 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="/assets/logo.jpeg" alt="Jese Leos image"/>
        </span>
        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Pitch Deck</time>
            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Now every team selected is requested to go review desk to provide a presentaion of 5-10 about what you have develop</div>
        </div>
    </li>
    <li className="ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="/assets/logo.jpeg" alt="Jese Leos image"/>
        </span>
        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Result Anouncement</time>
            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Wait for the result to be announced</div>
        </div>
    </li>
</ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
