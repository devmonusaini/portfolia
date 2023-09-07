import React from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TwitterIcon from '@mui/icons-material/Twitter';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useEffect } from "react";
import Aos from 'aos';


const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <>
            <div className=" mt-[-105px] md:mt-[-131px] px-3 pt-60 pb-12 lg:block xl:px-0 ">
                <div className="lg:grid max-w-[1240px] mx-auto my-8 gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0  space-y-10 " data-aos="zoom-in">
                    <div className="flex justify-center items-start flex-col    p-6 py-2  space-y-20 ">
                        <div className="flex justify-center items-start flex-col    p-6 py-2  space-y-5 ">

                            <h1 className="text-white text-xl">Contact Us</h1>
                            <div className="flex justify-center items-center flex-row">
                                <a className="p-4 bg-slates">
                                    < MailOutlineIcon className="text-white font-bold text-6xl" />

                                </a>
                                <div className="mx-5">
                                    <p className="text-blacks">Mail us</p>
                                    <a href="/blank"> <h1 className="text-white">ayotundesalam16@gmail.com</h1></a>
                                </div>

                            </div>
                            <div className="flex justify-center items-center flex-row">
                                <a className="p-4 bg-slates">
                                    < CallIcon className="text-white font-bold text-6xl" />

                                </a>
                                <div className="mx-5">
                                    <p className="text-blacks">CONTACT us</p>
                                    <a href="/blank"> <h1 className="text-white">+2348149647108</h1></a>
                                </div>

                            </div>
                            <div className="flex justify-center items-center flex-row">
                                <a className="p-4 bg-slates">
                                    < FmdGoodIcon className="text-white font-bold text-6xl" />

                                </a>
                                <div className="mx-5">
                                    <p className="text-blacks">
                                        LOCATION</p>
                                    <a href="/blank"> <h1 className="text-white">Ikole, Ekiti, Nigeria</h1></a>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-center items-start flex-col   p-6 py-2  space-y-5 ">

                            <h1 className="text-white text-xl">SOCIAL INFO</h1>
                            <div class="w-full flex justify-center items-center gap-5 ">
                                <div className="shadow-sm shadow-slate-600 w-16 h-16 bg-slates rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black">

                                    < GitHubIcon className="" />
                                </div>
                                <div className="  shadow-sm shadow-slate-600 w-16 h-16 bg-slates rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black">

                                    < TwitterIcon className="" />
                                </div>
                                <div className="  shadow-sm shadow-slate-600 w-16 h-16 bg-slates rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black">
                                    < LinkedInIcon className="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 items-start bg-box  w-full h-500px  relative  col-span-2 rounded-xl  pb-5 shadow-sm shadow-slate-600" data-aos="zoom-in">
                        <div className="absolute top-0 right-5">
                            <img decoding="async" loading="lazy" width="37" height="76" src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/icon2.png " className="" alt="" />
                        </div>
                        <div className="">

                            <h1 className="text-white text-5xl font-bold m-10   " >
                                let's  work <span className="text-blue-600">together.</span></h1>
                        </div>

                        <div className=" p-4  w-xl shadow-sm shadow-slate-600 rounded-md  m-5 my-2 bg-stills ">
                            <input type="text" placeholder="Name*" className="outlint-none focus:outline-none bg-transparent  text-white" />

                        </div>

                        <div className=" p-4  w-xl shadow-sm shadow-slate-600 rounded-md  m-5 my-2 bg-stills ">
                            <input type="email" placeholder="Email*" className="outlint-none focus:outline-none bg-transparent  text-white" />

                        </div>

                        <div className=" p-4  w-xl shadow-sm shadow-slate-600 rounded-md  m-5 my-2 bg-stills ">
                            <input type="text" placeholder="Your Subject*" className="outlint-none focus:outline-none bg-transparent  text-white" />

                        </div>

                        <div className=" p-4  w-xl shadow-sm shadow-slate-600 rounded-md  m-5 my-2 bg-stills ">
                            <textarea className="outlint-none focus:outline-none bg-transparent  text-white " id="mf-input-text-area-2d5d77ab" name="mf-textarea" placeholder="Your Message  " cols="30" rows="8" aria-invalid="false"></textarea>
                        </div>
                        <br />
                        <br />
                        <div className="items-center gap-x-4 lg:flex xl:gap-x-8   w-max shadow-sm shadow-slate-600 rounded-md  m-5 my-2  text-white hover:text-black bg-blacks hover:bg-white    font-lg    px-5 py-3 text-[10px]  font-bold xl:px-8 xl:text-lg transition ease-in-out delay-100  duration-300">
                            <button className="">Send massage</button>

                        </div>


                    </div>
                </div>



                <div className="grid max-w-[1240px] mx-auto my-16 gap-x-10 grid-cols-1 gap-y-10 md:gap-y-0  space-y-10  ">
                    <div className=" flex justify-center items-center w-full">
                        <h1 className="text-4xl text-white">BlockCourse</h1>
                    </div>
                    <div class=" gap-x-6 flex justify-center items-center xl:gap-x-12">
                        <a target="_blank" class="hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">Home</a>
                        <a target="" class="hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">About</a>
                        <a target="_blank" class="hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">Works</a>
                        <a target="" class="hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">Contact</a>
                    </div>
                    <div className="w-full flex justify-center items-center ">
                        <p className="text-blacks"> <CopyrightIcon /> All rights reserved by <span className="text-indigo-500">Blockchain</span></p>

                    </div>


                </div>

            </div>

        </>
    );

}
export default Contact;