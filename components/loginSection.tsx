import Log from "@/lib/abourLog";
import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn, useSession } from 'next-auth/react';
import useSWR from 'swr';

export default function Loginsection() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
      
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const result = await signIn('credentials', {
            email: formData.email,
            password: formData.password,
          });
        } catch (error) {
          // Handle any other errors during sign-in process
          console.error('Sign-in error:', error);
          toast.error('An error occurred during sign-in', { /* toast configuration */ });
        }
      };
      const handleGitHubSignIn = () => {
        signIn('github'); 
      };
      const handleGoogleSignIn = () => {
        signIn('google'); 
      };
    
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-40 pt-8 pb-8 shadow-lg shadow-black/50">
                <div className="flex flex-wrap pb-10">
                    <div className="px-6">
                        <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                            <h1 className="pt-1 text-teal-500 invisible lg:visible"><HiArrowNarrowRight /></h1>
                            <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-blue-300 inline">home </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">./register.sh</span></h1>
                        </a>
                        
                    </div>
                    <div className="w-full text-center px-6">
                        <h1 className="font-rubikFont lg:text-4xl font-bold text-shadowBox text-lg">Initialising ....</h1>
                        <h3 className="font-firaCode text-sm lg:text-2xl italic text-gray-400 lg:mb-10 mb-5">Loading Login Module ...</h3>
                    </div>
                </div>

                <div className="px-6">
                    <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                        <h1 className="pt-1 text-teal-500 invisible lg:visible"><HiArrowNarrowRight /></h1>
                        <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-blue-300 inline">home </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">./login.sh -u "username" & -p "password"</span></h1>
                    </a>    
                </div>
                <div className="flex flex-wrap ">
                    <div className="w-full lg:w-1/2 lg:text-lg text-sm lg:px-6">
                        <Log />
                    </div>
                    <ToastContainer/>
                    <div className="w-full lg:w-1/2 pt-5 px-6">
                    <form  onSubmit={handleSubmit}>
  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="email" value={formData.email} onChange={handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="password" value={formData.password} onChange={handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign IN</button>
  </form>
  <hr className="w-48 h-3 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-background-100"></hr>
  <div className="flex w-full">
  <button
    type="button"
    onClick={handleGitHubSignIn}
    className="flex-1 flex items-center justify-center text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
  >
    <svg
      className="w-4 h-4 me-2 flex-shrink-0"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
    </svg>
    <span className="flex-1">Sign in with Github</span>
  </button>
  <button
    type="button"
    onClick={handleGoogleSignIn}
    className="flex-1 flex items-center justify-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex dark:focus:ring-[#4285F4]/55 me-2 mb-2"
  >
    <svg
      className="w-4 h-4 me-2 flex-shrink-0"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 18 19"
    >
      <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
    </svg>
    <span className="flex-1">Sign in with Google</span>
  </button>
</div>



                            <div className="grid grid-cols-8 lg:w-8/12 pt-10">
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
