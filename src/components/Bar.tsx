import React from 'react'
import ReactEcharts from "echarts-for-react";

type Props = {
    rows: never[];
}
function Bar(props: Props) {
    //Declaring array to store data for each class
    const arrClass1: number[][] = [];
    const arrClass2: number[][] = [];
    const arrClass3: number[][] = [];


    //declare type for wine attributes
    type wineAttribute = {
        id: string,
        Alcohol: string,
        MalicAcid: string,
        Ash: string,
        ColorIntensity: string,
        Flavanoids: string,
        Hue: string,
        Lcalinity: string,
        Magnesium: string,
        NonFlavanoidPhenols: string,
        ["OD280 / OD315 of diluted wines"]: string,
        Proanthocyanins: string,
        Proline: string,
        TotalPhenols: string
    }

    //Assigning value to arrays
    props.rows.forEach((data: wineAttribute) => {
        let alcohol: number = parseFloat(data.Alcohol);
        let malicAcid: number = parseFloat(data.MalicAcid);
        if (data.id === '1') {
            arrClass1.push([alcohol, malicAcid]);
        }
        if (data.id === '2') {
            arrClass2.push([alcohol, malicAcid]);
        }
        if (data.id === '3') {
            arrClass3.push([alcohol, malicAcid]);
        }
    })

    //option for echart
    const option = {
        title: {
            text: "Bar graph  ",
        },
        backgroundColor: {
            type: 'radial',
            x: 0.3,
            y: 0.3,
            r: 0.8,
            colorStops: [
                {
                    offset: 0,
                    color: '#f7f8fa'
                },
                {
                    offset: 1,
                    color: '#cdd0d5'
                }
            ]
        },
        grid: {
            left: 10,
            containLabel: true,
            bottom: 10,
            top: 80,
            right: 100
        },
        tooltip: {},
        xAxis: {
            name: "Alcohol",
            splitLine: {
                show: false
            },
            scale: true,
        },

        yAxis: {
            name: "Malic Acid",
            splitLine: {
                show: false
            },
            scale: true,
        },
        series: [
            {
                name: "Class 1",
                type: "bar",
                data: arrClass1,
                color: "red"

            },
            {
                name: "Class 2",
                type: "bar",
                data: arrClass2,
                color: "green"

            },
            {
                name: "Class 3",
                type: "bar",
                data: arrClass3,
                color: "blue"

            }
        ],



    };
    return (
        <ReactEcharts option={option} />)
}

export default Bar