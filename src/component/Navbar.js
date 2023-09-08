import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className="">
                <header className="bg-black" >
                    <nav className="mx-auto flex items-center justify-between gap-x-6 p-6 max-w-[1240px] lg:px-8">
                        <div className="flex">
                            <a className="-m-1.5 p-1.5 text-white font-bold text-3xl flex justify-center items-center " href="/">
                                <span className="sr-only">
                                    Your Company
                                </span>

                                BlockForce


                            </a>
                        </div>
                        <div className="hidden gap-x-6 lg:flex xl:gap-x-12">
                            <NavLink activeClassName="active" to="/"> <a target="" className="hover:text-white active:text-white text-blacks font-normal text-sm xl:text-xl " href="">Home</a></NavLink>
                            <NavLink activeClassName="active" to="/about">   <a target="_blank" className="hover:text-white active:text-white text-blacks font-normal text-sm xl:text-xl " href="">About</a></NavLink>
                            <NavLink activeClassName="active" to="/service">   <a target="" className="hover:text-white active:text-white text-blacks font-normal text-sm xl:text-xl " href="">Service</a></NavLink>
                            <NavLink activeClassName="active" to="/works">      <a target="_blank" className="hover:text-white active:text-white text-blacks font-normal text-sm xl:text-xl " href="">Works</a></NavLink>
                            <NavLink activeClassName="active" to="/contact">  <a target="" className="hover:text-white active:text-white text-blacks font-normal text-sm xl:text-xl " href="">Contact</a></NavLink>
                        </div>
                        <div className="items-center font-bold justifybox height same and content size same, Its difficult to manage the ssection becuase images sizes is too much, if i set the images its look strechable -end hidden gap-x-4 lg:flex xl:gap-x-8">
                            <NavLink to="/contact"> <button className="rounded-xl text-white hover:text-black bg-blacks hover:bg-white    font-lg   py-3 px-4 text-[10px] xl:py-2 xl:px-8 xl:text-lg transition ease-in-out delay-100  duration-300">Let's talk</button></NavLink>

                        </div>
                        <div className="flex lg:hidden">
                            <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={() => {
                                setToggle(!toggle);
                            }}>
                                <span className="sr-only">Open main menu</span><span className="w-fit">
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </nav>
                    {toggle && (
                        <div className="lg:hidden">
                            <div className="fixed inset-y-0 right-0 z-50 w-full bg-black px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div className="gap-x-6 flex justify-between">
                                    <a className="-m-1.5 p-1.5" href="/"><span className="sr-only">Your Company</span>
                                        BlockForce</a>
                                    <button className="-m-2.5 rounded-md p-2.5 text-white" onClick={() => {
                                        setToggle(!toggle);
                                    }}>
                                        <span className="sr-only">Close menu</span><span className="w-fit">
                                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12">
                                                </path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            <NavLink to="/">
                                                <a target="" className="-mx-3 active:text-white block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-blacks hover:text-white " href="" onClick={() => {
                                                    setToggle(!toggle);
                                                }}>Home</a>
                                            </NavLink>
                                            <NavLink to="/about">
                                                <a target="" className="-mx-3 active:text-white block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-blacks hover:text-white" href="" onClick={() => {
                                                    setToggle(!toggle);
                                                }}>about</a>
                                            </NavLink>
                                            <NavLink to="/service">
                                                <a target="" className="-mx-3 active:text-white block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-blacks hover:text-white" href=""
                                                    onClick={() => {
                                                        setToggle(!toggle);
                                                    }}>Service</a>
                                            </NavLink>
                                            <NavLink to="/works">
                                                <a target="_blank" className="-mx-3 active:text-white block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-blacks hover:text-white" href=""
                                                    onClick={() => {
                                                        setToggle(!toggle);
                                                    }}>Works</a>
                                            </NavLink>
                                            <NavLink to="/contact">
                                                <a target="" className="-mx-3 active:text-white block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-blacks hover:text-white" href="" onClick={() => {
                                                    setToggle(!toggle);
                                                }}>Contact</a>
                                            </NavLink>
                                        </div>
                                        <div className="flex flex-1 items-center gap-x-6 py-6">
                                            <NavLink to="/Dashboard" onClick={() => {
                                                setToggle(!toggle);
                                            }}> <button className="rounded-xl text-white shadow-sm bg-blacks font-lg  py-3 px-4 text-lg xl:py-4 xl:px-8 xl:text-lg transition ease-in-out delay-100   duration-300">Let's talk</button></NavLink>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </header>
            </div>

        </>
    );
}

export default Navbar;
