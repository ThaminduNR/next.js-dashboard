import React from "react";
import MainContentCard from "@/components/main-content-card";
import {AiFillCalendar} from "react-icons/ai";
import {FaDollarSign} from "react-icons/fa6";
import {IoDocumentText} from "react-icons/io5";
import {IoIosChatbubbles} from "react-icons/io";
import ProgressBar from "@/components/ProgressBar";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";



export default function Home() {
    return (
        <div>
            <div className='py-5 mb-5 flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>Dashboard</h2>
                <button className='text-white text-sm bg-[#476CDA] px-2 py-1 rounded'>Generate Report</button>
            </div>
            <div
                className='w-full grid gap-5 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4'>
                <MainContentCard title="EARNINGS (MONTHLY)" price="$40,000"
                                 icon={<AiFillCalendar size={40} className="text-[#DDDFEB]"/>} color="#476CDA"/>
                <MainContentCard title="EARNINGS (ANNUAL)" price="$215,000"
                                 icon={<FaDollarSign size={40} className="text-[#DDDFEB]"/>} color="#1CC88A"/>
                <MainContentCard title="TASKS" price="50%" icon={<IoDocumentText size={40} className="text-[#DDDFEB]"/>}
                                 color="#36B9CC" progress={<ProgressBar />}/>
                <MainContentCard title="PENDING REQUESTS" price="18"
                                 icon={<IoIosChatbubbles size={40} className="text-[#DDDFEB]"/>} color="#F6C23E"/>
            </div>
            <div className="flex flex-3 w-[100%] h-auto justify-between mt-5 gap-4">
                <div className="w[65%] p-5 shadow-md">
                    <LineChart/>
                </div>
                <div className="h-full w-[40%] p-5 shadow-md">
                    <PieChart/>
                </div>
            </div>
        </div>
    );
}
