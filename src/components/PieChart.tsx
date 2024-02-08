"use client"

import React from 'react';
// @ts-ignore
import { Doughnut  } from 'react-chartjs-2';


function PieChart() {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };


    return (
        <div>
            <h2>Chart Component</h2>
            <Doughnut data={data} />
        </div>
    )
}

export default PieChart
