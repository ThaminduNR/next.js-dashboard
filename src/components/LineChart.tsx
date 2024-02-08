"use client"

import { useEffect } from "react";
import Chart from "chart.js/auto"; // Importing chart.js/auto library instead of destructuring from "chart.js"

function LineChart() {
    useEffect(() => {
        // @ts-ignore
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133],
                    label: "Applied",
                    borderColor: "rgb(62,149,205)",
                    backgroundColor: "rgb(62,149,205,0.1)",
                }]
            }
        });

        // Cleanup function
        return () => {
            myChart.destroy();
        };
    }, []);

    return (


            <div className="w-[750px]  flex flex-col">
                <h2 className="text-[#476CDA] ">Earnings Overview</h2>
                <div>
                    <canvas id='myChart'></canvas>
                </div>
            </div>

    );
}

export default LineChart;


