import React from 'react';
import {FaSearch} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import {FaBell} from "react-icons/fa";
import {BsEnvelopeFill} from "react-icons/bs";

function NavBar() {
    return (
        <div
            className='h-[60px] w-full px-4 py-2 flex justify-between items-center drop-shadow-lg bg-white'>
            <div className='w-1/5'>
                <div className='px-4 py-2 rounded-md bg-stone-100 relative'>
                    <p>Search for</p>
                    <span
                        className='w-10 h-full bg-[#476CDA] absolute right-0 top-0 bottom-0 m-auto rounded-r-md flex justify-center items-center'>
                        <FaSearch className='text-white'/>
                   </span>
                </div>
            </div>
            <div className='flex justify-between gap-10'>
                <div className='flex gap-10 items-center'>
                    <FaBell className='opacity-40' size='18'/>
                    <BsEnvelopeFill className='opacity-40' size='18'/>
                </div>
                <span className='h-[20px] w-[1px] bg-black bg-opacity-40'/>
                <div className='flex gap-5 items-center'>
                    <p>Douglas McGee</p>
                    <CgProfile size={25}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar
