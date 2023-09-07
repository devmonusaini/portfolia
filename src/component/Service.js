import React from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import CopyrightIcon from '@mui/icons-material/Copyright';
import { useEffect } from "react";
import Aos from 'aos';


const Service = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <>
            <div className=" mt-[-105px] md:mt-[-131px] px-3 pt-60 pb-12 lg:block xl:px-0 ">
                <div className="lg:grid max-w-[1240px] mx-auto my-8 gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0  flex flex-col  items-center">
                    <div className="flex justify-center items-start flex-col bg-slates   rounded-[29px]   p-6 py-20 md:py-64   shadow-sm shadow-slate-600 space-y-40 " data-aos="zoom-in">

                        < a className="flex justify-center items-center flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M12 14.5C15.3137 14.5 18 11.8137 18 8.5C18 5.18629 15.3137 2.5 12 2.5C8.68629 2.5 6 5.18629 6 8.5C6 11.8137 8.68629 14.5 12 14.5Z" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 21.5C19.3137 21.5 22 18.8137 22 15.5C22 12.1863 19.3137 9.5 16 9.5C12.6863 9.5 10 12.1863 10 15.5C10 18.8137 12.6863 21.5 16 21.5Z" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 21.5C11.3137 21.5 14 18.8137 14 15.5C14 12.1863 11.3137 9.5 8 9.5C4.68629 9.5 2 12.1863 2 15.5C2 18.8137 4.68629 21.5 8 21.5Z" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path></svg> <p className="text-blacks mx-5 ">BACKEND DEVELOPEMNT</p>
                        </a>
                        < a className="flex justify-center items-center flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" stroke-width="1.5" fill="none"><path d="M12 19.01L12.01 18.9989" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 18V21.4C18 21.7314 17.7314 22 17.4 22H6.6C6.26863 22 6 21.7314 6 21.4V18" stroke="#F4F4F4" stroke-linecap="round"></path><path d="M18 6V2.6C18 2.26863 17.7314 2 17.4 2H6.6C6.26863 2 6 2.26863 6 2.6V6" stroke="#F4F4F4" stroke-linecap="round"></path><path d="M15.5 8.5L19 12L15.5 15.5" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 8.5L5 12L8.5 15.5" stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"></path></svg> <p className="text-blacks mx-5 ">MOBILE APP</p>
                        </a>

                    </div>

                    <div className="grid grid-cols-1 items-start md:space-y-0 space-y-10 w-full lg:col-span-2  ">
                        <div className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl w-full rounded-full text-white p-6  my-2  " data-aos="zoom-in">
                            <img decoding="async" className="w-[30px] md:w-[40px] lg:w-[50px] xl:w-[60px]" src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/star-2.png" class="attachment-large size-large wp-image-33" alt="" />
                            MY OFFERINGS

                            <img decoding="async" className="w-[30px] md:w-[40px] lg:w-[50px] xl:w-[60px]" src="https://dev-salamayotunde.pantheonsite.io/wp-content/uploads/2023/08/star-2.png" class="attachment-large size-large wp-image-33" alt="" />
                        </div>


                        <div className="grid grid-cols-1  md:grid-cols-2 items-center   rounded-[29px]   p-10 space-y-5 md:space-x-10 bg-slates   shadow-sm shadow-slate-600" >

                            <div className="bg-stills rounded-[29px] p-8  space-y-4" data-aos="zoom-in">
                                <p className="text-blacks text-xl">backend development</p>
                                <p className="text-white">Experienced backend developer adept at architecting robust digital infrastructures. Proficient in languages like Python, Java, and frameworks such as Node.js, I specialize in creating efficient and scalable server-side solutions. Passionate about optimizing performance and data management, I ensure seamless interactions between front-end and databases. With a keen eye for security and a commitment to delivering high-quality functionalities, I excel in crafting the backbone of digital applications that empower seamless user experiences.</p>
                            </div>

                            <div className="bg-stills rounded-[29px] p-8  space-y-4" data-aos="zoom-in">
                                <p className="text-blacks text-xl">backend development</p>
                                <p className="text-white">Experienced backend developer adept at architecting robust digital infrastructures. Proficient in languages like Python, Java, and frameworks such as Node.js, I specialize in creating efficient and scalable server-side solutions. Passionate about optimizing performance and data management, I ensure seamless interactions between front-end and databases. With a keen eye for security and a commitment to delivering high-quality functionalities, I excel in crafting the backbone of digital applications that empower seamless user experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:grid max-w-[1240px] mx-auto my-8 gap-x-10 grid-cols-1 gap-y-10 lg:grid-cols-4 md:gap-y-0  space-y-10  ">
                    <div className="grid grid-cols-1  items-center   rounded-[29px]   p-4  relative bg-slates  shadow-sm shadow-slate-600">

                        <div class="w-full flex justify-center items-center gap-5 relative   h-32 rounded-[29px]   p-4   bg-slates  shadow-sm shadow-slate-600" data-aos="zoom-in">
                            <div className="w-16 h-16 bg-slate-950 hover:bg-white rounded-full flex justify-center items-center text-white hover:text-black shadow-md shadow-slate-600" >

                                < LinkedInIcon className="" />
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
                    <div className="grid grid-cols-1  col-span-2 items-center   rounded-[29px]   p-4  relative bg-slates  shadow-sm shadow-slate-600" data-aos="zoom-in">


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
                    <div className="grid grid-cols-1  md:items-start items-center  bg-slates rounded-[29px]   p-4  relative shadow-sm shadow-slate-600" data-aos="zoom-in">

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
                        <a target="_blank" class="hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">Homw</a>
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
export default Service;