import React from 'react'
import ProgressBar from "@/components/ProgressBar";


type propType = {
    title: string;
    price: string;
    icon: any;
    color: string
    progress?:any
}

function MainContentCard({title, price, icon, color,progress}: propType) {
    const colors = color;
    console.log(colors)

    return (
        <div className={`w-full min-h-[120px] shadow-md rounded p-2 border-l-4`} style={{borderLeftColor: `${color}`}}>
            <div className="flex justify-between w-full h-full items-center p-3">
                <div>
                    <p className="font-bold text-[10px]" style={{color: `${color}`}}>{title}</p>
                    <div>
                        <h2 className="font-bold text-[20px]">{price}</h2>
                    </div>
                </div>
                <div className="w-[100px] mt-6">
                    {progress}
                </div>
                <div>
                    {icon}
                </div>
            </div>

        </div>
    )

}

export default MainContentCard
