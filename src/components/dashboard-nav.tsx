import React from 'react';
import {FaFaceSmileWink,FaGear} from "react-icons/fa6";
import {AiFillDashboard} from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";

function DashboardNav() {
    return (
        <div className='w-[300px] min-h-svh bg-[#476CDA]'>
            <div className='flex gap-5 items-center justify-center p-4'>
                <FaFaceSmileWink className='text-3xl text-white'/>
                <h1 className='text-lg text-white'>SB ADMIN</h1>
            </div>
            <div className='p-4 text-sm flex flex-col gap-3'>
                <div className='flex flex-col gap-8  text-white'>
                    <div className='flex gap-3 items-center'>
                        <AiFillDashboard/>
                        <p className='font-bold'>Dashboard</p>
                    </div>
                    <span className='w-full h-[1px] bg-white bg-opacity-25'></span>
                </div>
                <div className='flex flex-col gap-8'>
                    <p className=' text-white text-xs text-opacity-50'>INTERFACE</p>
                    <div className='flex gap-3 items-center justify-between text-white'>
                        <div className='flex gap-3 items-center'>
                            <FaGear/>
                            <p>Components</p>
                        </div>
                        <MdOutlineNavigateNext className='hidden md:block'/>
                    </div>
                    <div className='flex gap-3 items-center justify-between text-white'>
                        <div className='flex gap-2 items-center'>
                            <AiFillTool size={20}/>
                            <p>Utilities</p>
                        </div>
                        <MdOutlineNavigateNext className='hidden md:block'/>
                    </div>
                    <span className='w-full h-[1px] bg-white bg-opacity-25'></span>
                </div>
                <div className='flex flex-col gap-8'>
                    <p className=' text-white text-xs text-opacity-50'>INTERFACE</p>
                    <div className='flex gap-3 items-center justify-between text-white'>
                        <div className='flex gap-3 items-center'>
                            <FaGear/>
                            <p>Components</p>
                        </div>
                        <MdOutlineNavigateNext className='hidden md:block'/>
                    </div>
                    <div className='flex gap-3 items-center justify-between text-white'>
                        <div className='flex gap-2 items-center'>
                            <AiFillTool size={20}/>
                            <p>Utilities</p>
                        </div>
                        <MdOutlineNavigateNext className='hidden md:block'/>
                    </div>
                    <span className='w-full h-[1px] bg-white bg-opacity-25'></span>
                </div>
            </div>
        </div>
    )
}

export default DashboardNav
