import React from "react";

import CopyrightIcon from '@mui/icons-material/Copyright';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useEffect } from "react";
import Aos from 'aos';



const About = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <>
            <div className=" mt-[-105px] md:mt-[-131px] px-3 pt-60 pb-12 lg:block xl:px-0 ">
                <div className="lg:grid max-w-[1240px] mx-auto my-8 gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0  flex flex-col  items-center">
                    <div className="flex justify-center items-center bg-box   rounded-[29px] max-w-md  p-6  relative shadow-sm shadow-slate-600" data-aos="zoom-in">
                        <img className="  imgradius " src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/salamo-768x1024.jpg" alt="photo" />



                    </div>

                    <div className="grid grid-cols-1 items-start md:space-y-0 space-y-10 w-full lg:col-span-2  ">
                        <div className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl w-full rounded-full text-white p-6  my-2 " data-aos="zoom-in">
                            <img decoding="async" className="w-[30px] md:w-[40px] lg:w-[50px] xl:w-[60px]" src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/star-2.png" class="attachment-large size-large wp-image-33" alt="" />
                            SELF-SUMMARY
                            <img decoding="async" className="w-[30px] md:w-[40px] lg:w-[50px] xl:w-[60px]" src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/star-2.png" class="attachment-large size-large wp-image-33" alt="" />
                        </div>


                        <div className="grid grid-cols-1  items-center   rounded-[29px]   px-4  relative bg-box lg:order-3 order-2 h-[300px] shadow-sm shadow-slate-600" data-aos="zoom-in">

                            <div className="absolute top-0 left-5">
                                <img decoding="async" loading="lazy" width="37" height="76" src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/icon2.png" class="attachment-large size-large wp-image-17" alt="" />
                            </div>
                            <div className="absolute left-5 bottom-8 space-y-4 p-5 ">

                                <h1 className="text-white text-5xl font-bold  " >
                                    Ayotunde Salam

                                </h1>
                                <p className="text-blacks">
                                    I have over 5 years of experience as a Mobile Engineer in designing & developing beautiful User Interfaces for applications, integrating with various databases, client-server applications with Flutter framework.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="lg:grid max-w-[1240px]  mx-auto  grid-cols-1  lg:grid-cols-2   space-y-10  ">
                    <div className="flex items-start bg-box justify-center flex-col p-12 rounded-[29px]  shadow-sm shadow-slate-600 max-w-xl h-fit  " data-aos="zoom-in">
                        <h1 className="text-white text-xl">
                            EXPERIENCE
                        </h1>
                        <p className="text-blacks ">
                            2021 - 2022
                        </p>
                        <h1 className="text-white text-xl">
                            Flutter Developer
                        </h1>
                        <p className="text-blacks ">
                            Akromax inc
                        </p>
                        <br />
                        <p className="text-blacks ">
                            2020 - Presently
                        </p>
                        <h1 className="text-white text-xl">

                            Mobile App Development
                        </h1>

                    </div>
                    <div className="flex items-start bg-box justify-center flex-col p-12 rounded-[29px]  shadow-sm shadow-slate-600 max-w-xl h-fit  " data-aos="zoom-in">
                        <h1 className="text-white text-xl">
                            EDUCATION                        </h1>
                        <p className="text-blacks ">
                            2004 - 2018
                        </p>
                        <h1 className="text-white text-xl">

                            Waec
                        </h1>
                        <p className="text-blacks ">
                            Shekinah college, inisa
                        </p>
                        <br />
                        <p className="text-blacks ">
                            2019 - 2023
                        </p>
                        <h1 className="text-white text-xl">

                            Bsc Engineering
                        </h1>




                        <p className="text-blacks ">
                            Federal University Oye Ekiti

                        </p>

                    </div>
                </div>

                <div className="lg:grid max-w-[1240px] mx-auto my-8 gap-x-10 grid-cols-1 gap-y-10 lg:grid-cols-4 md:gap-y-0  space-y-10  ">
                    <div className="grid grid-cols-1  items-center   rounded-[29px]   p-4  relative bg-box  shadow-sm shadow-slate-600" data-aos="zoom-in">

                        <div class="w-full flex justify-center items-center gap-5 relative   h-32 rounded-[29px]   p-4   bg-slates  shadow-sm shadow-slate-600">
                            <div className="w-16 h-16 bg-slate-950 hover:bg-white rounded-full flex justify-center items-center text-white hover:text-black shadow-md shadow-slate-600" >

                                < GitHubIcon className="" />
                            </div>
                            <div className=" w-16 h-16 bg-slate-950  rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black shadow-md shadow-slate-600">

                                < TwitterIcon className="" />
                            </div>

                        </div>
                        <div className="space-y-2">
                            <p className="text-whites text-sm mt-10">
                                STAY WITH ME
                            </p>
                            <h1 className="text-white text-2xl">
                                Profiles</h1>
                        </div>
                        <div className="text-white absolute right-10 bottom-10">

                            <a className=" " href="">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="46" height="42" viewBox="0 0 46 42" fill="none"><path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4"></path><rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#F4F4F4"></rect><path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" ></path></svg>			</a>

                        </div>
                    </div>
                    <div className="grid grid-cols-1  col-span-2 items-end   rounded-[29px]  relative pb-10  h-[300px] p-4   bg-box  shadow-sm shadow-slate-600" data-aos="zoom-in">


                        <div className="absolute top-0 left-5">
                            <img decoding="async" loading="lazy" width="37" height="76" src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/icon2.png" class="attachment-large size-large wp-image-17" alt="" />
                        </div>
                        <div className="">

                            <h1 className="text-white text-5xl font-bold  " >
                                let's <br /> work <span className="text-blue-600">together.</span></h1>
                        </div>
                        <div className="text-white absolute right-10 bottom-10">

                            <a className=" " href="">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="46" height="42" viewBox="0 0 46 42" fill="none"><path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4"></path><rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#F4F4F4"></rect><path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" ></path></svg>			</a>

                        </div>
                    </div>
                    <div className="grid grid-cols-1  md:items-start items-center  bg-box rounded-[29px]   p-4  relative shadow-sm shadow-slate-600" data-aos="zoom-in">

                        <div>
                            <img className=" w-[248px] h-[285] imgradius " src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/sign.png" alt="photo" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-whites text-sm mt-10">
                                MORE ABOUT ME</p>
                            <h1 className="text-white text-2xl">Credentials</h1>

                        </div>
                        <div className="text-white absolute right-10 bottom-10">

                            <a className=" " href="">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="46" height="42" viewBox="0 0 46 42" fill="none"><path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4"></path><rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#F4F4F4"></rect><path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" ></path></svg>			</a>

                        </div>
                    </div>

                </div>


                <div className="grid max-w-[1240px] mx-auto my-16 gap-x-10 grid-cols-1 gap-y-10 md:gap-y-0  space-y-10  ">
                    <div className=" flex justify-center items-center w-full">
                        <h1 className="text-4xl text-white">BlockForce</h1>
                    </div>
                    <div class=" gap-x-6 flex justify-center items-center xl:gap-x-12">
                        <a target="_blank" class="hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">Home</a>
                        <a target="" class="hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">Service</a>
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
export default About;