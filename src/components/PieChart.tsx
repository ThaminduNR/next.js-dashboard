"use client"

import React from 'react';
// @ts-ignore
import { Doughnut  } from 'react-chartjs-2';


function PieChart() {
    const data = {
        labels: ['Direct', 'Referral', ' Social '],
        datasets: [{
            label: 'My First Dataset',
            data: [500, 100, 200],
            backgroundColor: [
                'rgb(71, 108, 218)',
                'rgb(54, 185, 204)',
                'rgb(28, 200, 138)'
            ],
            borderWidth: 3,
            hoverOffset: 1

        }]
    }


    return (
        <div>
            <h1 className="text-[#476CDA]">Revenue Sources</h1>
            <Doughnut data ={data} />
        </div>
    )
}

export default PieChart
