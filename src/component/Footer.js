import React, { useEffect } from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';
import { NavLink } from "react-router-dom";

const Footer = () => {



    return (
        <>


            <div className="grid max-w-[1240px] mx-auto my-16 gap-x-10 grid-cols-1 gap-y-10 md:gap-y-0  space-y-10  ">
                <div className=" flex justify-center items-center w-full">
                    <h1 className="text-4xl text-white font-bold">BlockForce</h1>
                </div>
                <div class=" gap-x-6 flex justify-center items-center xl:gap-x-12">
                    <NavLink activeClassName="active" to="/">
                        <a target="_blank" class="mx-2 hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">Home</a>
                    </NavLink>
                    <NavLink activeClassName="active" to="/about">
                        <a target="" class="mx-2 hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">About</a>
                    </NavLink>

                    <NavLink activeClassName="active" to="/service">
                        <a target="" class="mx-2 hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">Service</a>
                    </NavLink>
                    <NavLink activeClassName="active" to="/works">
                        <a target="_blank" class="mx-2 hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">Works</a>
                    </NavLink>
                    <NavLink activeClassName="active" to="/contact">
                        <a target="" class="mx-2 hover:text-white text-blacks font-normal text-sm xl:text-lg " href="">Contact</a>
                    </NavLink>
                </div>
                <div className="w-full flex justify-center items-center ">
                    <p className="text-blacks"> <CopyrightIcon /> All rights reserved by <span className="text-indigo-500">Blockchain</span></p>

                </div>


            </div>



        </>
    );
}

export default Footer;