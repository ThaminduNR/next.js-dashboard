import React from 'react'
import { AiFillCalendar } from "react-icons/ai";


type propType = {
   title:string;
   price:string;
   icon:any;
   color:string
}

function MainContentCard({title,price,icon,color}:propType) {
    const colors = color;
    console.log(colors)

    const name:string = "Thamindu";
    return (
        <div className={`w-full min-h-[120px] shadow-md rounded p-2 border-l-4`} style={{ borderLeftColor: `${color}` }}>
            <div className="flex justify-between w-full h-full items-center p-3">
                <div>
                    <p className={`font-bold text-[12px]`} style={{ color: `${color}` }}>{title}</p>
                    <h2 className="font-bold text-[20px]">{price}</h2>
                </div>
                <div>
                    {icon}
                </div>
            </div>

        </div>
    )

}

export default MainContentCard
