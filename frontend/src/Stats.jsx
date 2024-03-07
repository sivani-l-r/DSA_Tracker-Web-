import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';

function StatisticsPage({ arrayPercentageProp, stackPercentageProp }) {
    useEffect(() => {
        updateGraph();
    }, [arrayPercentageProp, stackPercentageProp]);

    const updateGraph = () => {
        let totalPercentage = arrayPercentageProp + stackPercentageProp;
        if (totalPercentage > 100) {
            const scaleFactor = 100 / totalPercentage;
            // No need to update state here
        }
    };

    const totalData = [{
        x: ['Array', 'Stack'],
        y: [arrayPercentageProp, stackPercentageProp], // Use props directly here
        type: 'bar',
        marker: {
            color: ['rgba(31, 119, 180, 0.8)', 'rgba(255, 127, 14, 0.8)'] // Adjust colors
        },
        name: 'Percentage'
    }];

    const totalLayout = {
        title: {
            text: 'Percentage of Questions Attempted',
            font: {
                size: 18
            }
        },
        xaxis: {
            title: 'Question Type',
            tickfont: {
                size: 14
            }
        },
        yaxis: {
            title: 'Percentage',
            range: [0, 100],
            tickfont: {
                size: 14
            }
        },
        margin: {
            t: 50,
            b: 50,
            l: 50,
            r: 50
        },
        legend: {
            orientation: 'h', // Horizontal legend
            xanchor: 'center',
            y: -0.2 // Adjust position of legend
        }
    };

    return (
        <div>
            <div id="totalGraph">
                <Plot
                    data={totalData}
                    layout={totalLayout}
                />
            </div>
        </div>
    );
}

export default StatisticsPage;
