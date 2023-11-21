import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';
import Prof from "@/lib/aboutProf";
import Modal from "./popup/model";

export default function Setprofile() {
  const [profilestatus, setProfilestatus] = useState('')
  const [teamcode, setTeamcode] = useState('')
  const { data: session, status } = useSession();
  let email = ''; // Define email variable outside the if block
  
  if (session && session.user && session.user.email) {
    email = session.user.email; // Assign email value if it exists
  }

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await fetch('https://api.pwnme.in/v2/getdata.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email : email}),
        });
  
        const responseData = await response.json();
        if (response.ok) {
          setProfilestatus(responseData.profile)
          setTeamcode(responseData.tcode)
        }
        else{
          setProfilestatus("Api fetch error")
          setTeamcode("Api fetch error")
        }
      } catch (error) {
        setProfilestatus("Api fetch error")
          setTeamcode("Api fetch error")
      }
    };
  
    postData(); // Call the asynchronous function
  
  }, [email]); // Include dependencies if necessary
  
  
  const [formData, setFormData] = useState({
    ocp: '',
    work: '',
    gurl: '',
    gdev: '',
    lurl: '',
    s1: '',
    s2: '',
    email: email, // Use the email variable here
  });

  const [formData1, setFormData1] = useState({
    tname: '',
    tdesc: '',
    email: email,
  })
  
  const [formData2, setFormData2] = useState({
    tcode : '',
    email: email,
  })
  
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
      const handleChangetext = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

      const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData1((prevFormData1) => ({ ...prevFormData1, [name]: value }));
      };

      const handleChangetext1 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData1((prevFormData1) => ({ ...prevFormData1, [name]: value }));
      };


      const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData2((prevFormData2) => ({ ...prevFormData2, [name]: value }));
      };

      const handleChangetext2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData2((prevFormData2) => ({ ...prevFormData2, [name]: value }));
      };


      const [isOpen, setIsOpen] = useState(false);

      const openModal = () => {
        setIsOpen(true);
      };
    
      const closeModal = () => {
        setIsOpen(false);
      };
      
      const handleSubmit1 = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const response = await fetch('https://api.pwnme.in/v2/createteam.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData1),
          });
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
      }

      const handleSubmit2 = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const response = await fetch('https://api.pwnme.in/v2/createteam.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData1),
          });
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
      }
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const response = await fetch('https://api.pwnme.in/v2/submmitprofile.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
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
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-40 pt-8 pb-1 shadow-lg shadow-black/50">
                <div className="flex flex-wrap pb-2">
                    <div className="px-6 pb-2">
                        <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                            <h1 className="pt-1 text-teal-500 invisible lg:visible"><HiArrowNarrowRight /></h1>
                            <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-red-300 inline">error </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">./validation.sh</span></h1>
                        </a>
                        <span className="inline-block text-white px-3">H$@AD@\8!&QV PV!JjmV@ pD+<br/>Access denied for the sever</span>
                    </div>
                </div>

                <div className="px-6">
                    <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                        <h1 className="pt-1 text-teal-500 invisible lg:visible"><HiArrowNarrowRight /></h1>
                        <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-blue-300 inline">home </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">./profilebuild.sh</span></h1>
                    </a>    
                </div>
                <div className="flex flex-wrap ">
                    <div className="w-full lg:w-1/2 lg:text-lg text-sm lg:px-6">
                    <Prof />
                    </div>
                    <ToastContainer/>
                    <div className="w-full lg:w-1/2 pt-5 px-6">
                    <h1 className="font-rubikFont lg:text-4xl font-bold text-shadowBox text-lg">Dare To Compete 💀💀💀</h1>
                    <hr className="w-48 h-1 mx-1/2 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
                    {isOpen ? (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <>
          <span className="inline-block text-white px-3 pb-5"><b>Make your own team</b></span>
           <form  onSubmit={handleSubmit1}>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="tname" value={formData1.tname} onChange={handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Team Name</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <textarea  name="tdesc" value={formData1.tdesc} onChange={handleChangetext1} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Team Description</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Make your team</button>
  </form>
  <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
  <span className="inline-block text-white px-3 pb-5"><b>Join someone team</b></span>
  <form  onSubmit={handleSubmit2}>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="tcode" value={formData2.tcode} onChange={handleChange2} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Team Code</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join a team</button>
  </form>
</>
        </Modal>
      ) : (
                    <form  onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="ocp" value={formData.ocp} onChange={handleChange} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Occupation</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="work" value={formData.work} onChange={handleChange} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Organization</label>
    </div>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="url" name="gurl" value={formData.gurl} onChange={handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Github Profile Url</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="url" name="gdev" value={formData.gdev} onChange={handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Google Developer Profile</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="url" name="lurl" value={formData.lurl} onChange={handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Linkedin Profile</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <textarea name="s1" value={formData.s1} onChange={handleChangetext} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Why you want to join this hackathon</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <textarea name="s2" value={formData.s2} onChange={handleChangetext} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Briefly describe about yourself</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit for review</button>
  </form>
      )}

  <br />
  {!isOpen ? (
  <button onClick={openModal} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join / Create a team</button>): ( 
    <button onClick={closeModal} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back to profile</button>
  )}
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
                        <span className="inline-block text-white px-3"><br/><b><i>Profile Setup Details</i></b><br />
                        <b>Profile status</b> : {profilestatus} <br/>
                        <b>Team Code</b> : {teamcode} <br />
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
    )    
};
