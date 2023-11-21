import Reg from "@/lib/aboutReg";
import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSWR from 'swr';

export default function RegisterSection() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
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
      const response = await fetch('https://api.pwnme.in/v2/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(formData)
      const responseData = await response.json();

      if (response.ok) {
        console.log(responseData)
        if (responseData.status === 'Success') {
          toast.success(responseData.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.error(responseData.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } else {
        toast.error('501 internal server error', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      toast.error('501 internal server error', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
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
                        <h3 className="font-firaCode text-sm lg:text-2xl italic text-gray-400 lg:mb-10 mb-5">Loading Register Module ...</h3>
                    </div>
                </div>

                <div className="px-6">
                    <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                        <h1 className="pt-1 text-teal-500 invisible lg:visible"><HiArrowNarrowRight /></h1>
                        <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-blue-300 inline">home </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">./register.sh -u "username" & -p "password"</span></h1>
                    </a>    
                </div>
                <div className="flex flex-wrap ">
                    <div className="w-full lg:w-1/2 lg:text-lg text-sm lg:px-6">
                        <Reg />
                    </div>
                    <ToastContainer/>
                    <div className="w-full lg:w-1/2 pt-5 px-6">

                    <form  onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="fname" value={formData.fname} onChange={handleChange} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="lname" value={formData.lname} onChange={handleChange} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="email" value={formData.email} onChange={handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="password" value={formData.password} onChange={handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
  </form>
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
