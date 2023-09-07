import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { useEffect } from "react";
import Aos from 'aos';
import TypewriterComponent from "typewriter-effect";


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div className=" mt-[-105px] md:mt-[-131px] px-3 pt-60 pb-12 lg:block xl:px-0 ">
                <div className="lg:grid max-w-[1240px] mx-auto my-8 gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-0  flex flex-col ">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:items-start items-center bg-box   rounded-[29px]   p-14 md:space-x-10 relative shadow-sm shadow-slate-600" data-aos="zoom-in">
                        <div>
                            <img className=" w-[248px] h-[285] imgradius " src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/salamo-768x1024.jpg" alt="photo" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-whites text-xl mt-10">mobile devloper</p>
                            <h1 className="text-white text-4xl">Playwithdata on fiverr</h1>
                            <p className="text-whites text-xl">I am a mobile devloper in inisha</p>
                        </div>
                        <div className="text-white absolute right-10 bottom-10">

                            <a className=" " href="">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="46" height="42" viewBox="0 0 46 42" fill="none"><path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4"></path><rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#F4F4F4"></rect><path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" ></path></svg>			</a>

                        </div>


                    </div>

                    <div className="grid grid-cols-1 items-start md:space-y-0 space-y-10  ">
                        <div className="bg-box w-full overflow-hidden rounded-full text-white p-6 text-sm my-8 shadow-sm shadow-slate-600 flex justify-center items-center" data-aos="zoom-in">
                            <h2 className="">
                                <TypewriterComponent
                                    options={{

                                        loop: true,
                                        autoStart: true,
                                        delay: 50,
                                        strings: ["  ILABLE FOR FREELANCE WORK . I'M AVAILABLE FOR FREELANCE WORK . I'M AVAILABLE FOR FREELANCE  dfsjlk  j sdlkf"]

                                    }}
                                />

                            </h2>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2  items-center      md:space-x-5  md:space-y-0 space-y-10 ">
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
                            <div className="grid grid-cols-1  items-center   rounded-[29px]   p-4  relative bg-box shadow-sm shadow-slate-600" data-aos="zoom-in">

                                <div>
                                    <img decoding="async" width="224" height="126" src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/my-works.png" class="attachment-large size-large wp-image-53" alt="" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-whites text-sm mt-10">   SHOWCASE
                                    </p>
                                    <h1 className="text-white text-2xl">
                                        Projects</h1>
                                </div>
                                <div className="text-white absolute right-10 bottom-10">

                                    <a className=" " href="">
                                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="46" height="42" viewBox="0 0 46 42" fill="none"><path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4"></path><rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#F4F4F4"></rect><path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" ></path></svg>			</a>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="lg:grid max-w-[1240px] mx-auto my-8 gap-x-10 grid-cols-1 gap-y-10 lg:grid-cols-4 md:gap-y-0  space-y-10  ">
                    <div className="grid grid-cols-1  items-center   rounded-[29px] mx-auto w-full   p-4  relative bg-box order-1 shadow-sm shadow-slate-600 " data-aos="zoom-in">

                        <div className="w-full items-center ml-10">
                            <img className=" w-[156px]  " src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/resume-1.png" alt="photo" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-whites text-sm mt-10">
                                MY CV
                            </p>
                            <h1 className="text-white text-2xl">
                                Download</h1>
                        </div>
                        <div className="text-white absolute right-10 bottom-10">

                            <a className=" " href="">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="46" height="42" viewBox="0 0 46 42" fill="none"><path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4"></path><rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#F4F4F4"></rect><path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" ></path></svg>			</a>

                        </div>
                    </div>
                    <div className="grid grid-cols-1  col-span-2 items-center   rounded-[29px]   p-4  relative bg-box lg:order-2 order-3 shadow-sm shadow-slate-600" data-aos="zoom-in">

                        <div className="grid grid-cols-4 p-4 m-auto gap-12 ">
                            < a>
                                <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" width="46" viewBox="0 0 24 24" fill="none"><path d="M2 19V9C2 7.89543 2.89543 7 4 7H4.5C5.12951 7 5.72229 6.70361 6.1 6.2L8.32 3.24C8.43331 3.08892 8.61115 3 8.8 3H15.2C15.3889 3 15.5667 3.08892 15.68 3.24L17.9 6.2C18.2777 6.70361 18.8705 7 19.5 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19Z" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                            < a>
                                <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 21.1679V14L12 7L16 14V21.1679" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 14C8 14 9.12676 15 10 15C10.8732 15 12 14 12 14C12 14 13.1268 15 14 15C14.8732 15 16 14 16 14" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                            < a>
                                <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" viewBox="0 0 24 24" fill="none"><path d="M12 14.5C15.3137 14.5 18 11.8137 18 8.5C18 5.18629 15.3137 2.5 12 2.5C8.68629 2.5 6 5.18629 6 8.5C6 11.8137 8.68629 14.5 12 14.5Z" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 21.5C19.3137 21.5 22 18.8137 22 15.5C22 12.1863 19.3137 9.5 16 9.5C12.6863 9.5 10 12.1863 10 15.5C10 18.8137 12.6863 21.5 16 21.5Z" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 21.5C11.3137 21.5 14 18.8137 14 15.5C14 12.1863 11.3137 9.5 8 9.5C4.68629 9.5 2 12.1863 2 15.5C2 18.8137 4.68629 21.5 8 21.5Z" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                            < a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none"><path d="M12 19.01L12.01 18.9989" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 18V21.4C18 21.7314 17.7314 22 17.4 22H6.6C6.26863 22 6 21.7314 6 21.4V18" stroke="#F4F4F4" stroke-linecap="round"></path><path d="M18 6V2.6C18 2.26863 17.7314 2 17.4 2H6.6C6.26863 2 6 2.26863 6 2.6V6" stroke="#F4F4F4" stroke-linecap="round"></path><path d="M15.5 8.5L19 12L15.5 15.5" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 8.5L5 12L8.5 15.5" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>
                        <div className="space-y-2">
                            <p className="text-whites text-sm mt-10">   SHOWCASE
                            </p>
                            <h1 className="text-white text-2xl">
                                Projects</h1>
                        </div>
                        <div className="text-white absolute right-10 bottom-10">

                            <a className=" " href="">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="46" height="42" viewBox="0 0 46 42" fill="none">
                                    <path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4"></path><rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#F4F4F4"></rect><path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" ></path>
                                </svg>			</a>

                        </div>
                    </div>
                    <div className="grid grid-cols-1  items-center   rounded-[29px]   p-4  relative bg-box lg:order-3 order-2 shadow-sm shadow-slate-600" data-aos="zoom-in">

                        <div class="w-full flex justify-center items-center gap-5 relative">
                            <div className="w-16 h-16 bg-slates rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black">

                                < GitHubIcon className="" />
                            </div>
                            <div className=" w-16 h-16 bg-slates rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black">

                                < TwitterIcon className="" />
                            </div>
                            <div className="absolute top-16 w-16 h-16 bg-slates rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black">
                                < LinkedInIcon className="" />
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

                </div>
                <div className="lg:grid max-w-[1240px] mx-auto my-8 gap-x-10 grid-cols-1 gap-y-10 lg:grid-cols-2 md:gap-y-0  space-y-10  ">
                    <div className="lg:grid  mx-auto my-8  grid-cols-1  lg:grid-cols-3  bg-box p-10 rounded-[29px] space-x-5 space-y-5 shadow-sm shadow-slate-600" data-aos="zoom-in">
                        <div className="flex items-center bg-box justify-center flex-col p-5 rounded-[29px]  shadow-sm shadow-slate-600 ">
                            <h1 className="text-white text-5xl my-3 font-bold">05</h1>
                            <p className="text-blacks text-center w-full my-5">
                                YEARS
                                EXPERIENCE</p>

                        </div>
                        <div className="flex items-center bg-box justify-center flex-col p-5 rounded-[29px] shadow-sm shadow-slate-600 " >
                            <h1 className="text-white text-5xl my-3 font-bold">+24</h1>
                            <p className="text-blacks text-center w-full my-5">
                                CLIENTS
                                WORLDWIDE</p>

                        </div>
                        <div className="flex items-center bg-box justify-center flex-col p-5 rounded-[29px]  shadow-sm shadow-slate-600">
                            <h1 className="text-white text-5xl my-3 font-bold">+25</h1>
                            <p className="text-blacks text-center w-full my-5">
                                TOTAL
                                PROJECTS</p>

                        </div>
                    </div>
                    <div className="grid grid-cols-1  items-center   rounded-[29px]   px-4  relative bg-box lg:order-3 order-2 h-[300px] shadow-sm shadow-slate-600" data-aos="zoom-in">

                        <div className="absolute top-0 left-5">
                            <img decoding="async" loading="lazy" width="37" height="76" src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/icon2.png" class="attachment-large size-large wp-image-17" alt="" />
                        </div>
                        <div className="">

                            <h1 className="text-white text-5xl font-bold absolute left-5 bottom-20 " >
                                let's <br /> work <span className="text-blue-600">together.</span></h1>
                        </div>
                        <div className="text-white absolute right-10 bottom-10">

                            <a className=" " href="">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="46" height="42" viewBox="0 0 46 42" fill="none"><path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4"></path><rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#F4F4F4"></rect><path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" ></path></svg>			</a>

                        </div>
                    </div>
                </div>

                <div className="grid max-w-[1240px] mx-auto my-8 gap-x-10 grid-cols-1 gap-y-10 md:gap-y-0  space-y-10  ">
                    <div className=" flex justify-center items-center w-full">
                        <h1 className="text-4xl text-white">BlockForce</h1>
                    </div>
                    <div class=" gap-x-6 flex justify-center items-center xl:gap-x-12">
                        <a target="_blank" class="hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">About</a>
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
export default Home;