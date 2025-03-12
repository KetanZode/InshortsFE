import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";
import {motion} from 'framer-motion'
import { useSelector } from "react-redux";

function Mermaid({ chartString }) {
    const chartRef = useRef(null);
    const svgRef = useRef(`mermaid-${Math.random().toString(36).substring(2, 9)}`); // Unique ID
    const themes = localStorage.getItem('theme')

    useEffect(() => {
        console.log(themes)
        mermaid.initialize({ startOnLoad: false, 
            theme:(themes==='lightTheme')?"none":"neutral"
        });

        if (chartRef.current) {
            if (chartString && chartRef.current){
                chartRef.current.innerHTML = ""; 
            mermaid.render(svgRef.current, chartString)
                .then(({ svg }) => {
                    chartRef.current.innerHTML = svg; // Render SVG inside div
                })
                .catch((error) => {
                    console.error("Mermaid rendering error:", error);
                });
        }}
    }, [chartString]); // Re-render when chartString changes

    return <div className="">
        <div ref={chartRef} className="mermaid transition-all duration-700 transform scale-95 hover:scale-100"
        ></div>
    </div>;
}

export default Mermaid;
