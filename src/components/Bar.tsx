import React from 'react'
import ReactEcharts from "echarts-for-react";

type Props = {
    rows: never[];
}
function Bar(props: Props) {
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

    let sumMalicAcid1:number=0;
    let countMalicAcid1:number=0;
    let sumMalicAcid2:number=0;
    let countMalicAcid2:number=0;
    let sumMalicAcid3:number=0;
    let countMalicAcid3:number=0;
    //Assigning value to arrays
    props.rows.forEach((data: wineAttribute) => {
        let malicAcid: number = parseFloat(data.MalicAcid);
        if (data.id === '1') {
           sumMalicAcid1=sumMalicAcid1+malicAcid;
           ++countMalicAcid1;
        }
        if (data.id === '2') {
            sumMalicAcid2=sumMalicAcid2+malicAcid;
            ++countMalicAcid2;

        }
        if (data.id === '3') {
            sumMalicAcid3=sumMalicAcid3+malicAcid;  
            ++countMalicAcid3;
        }
    })
  
    let malicAcidAvg1=sumMalicAcid1/countMalicAcid1;
    let malicAcidAvg2=sumMalicAcid2/countMalicAcid2;
    let malicAcidAvg3=sumMalicAcid3/countMalicAcid3;

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
            data: ['class 1', 'class2', 'class 3']
        },

        yAxis: {
            name: "Malic Acid",
            splitLine: {
                show: false
            },
            scale: true,
        },
        series: {
            type: 'bar',
            data: [
                {
                    value: malicAcidAvg1,
                    groupId: 'class1',
                    color:'blue'
                },
                {
                    value: malicAcidAvg2,
                    groupId: 'class2',
                    color:'green'
                },
                {
                    value: malicAcidAvg3,
                    groupId: 'class3',
                    color:'red'
                }
            ]


        },



    };
    return (
        <ReactEcharts option={option} />)
}

export default Bar