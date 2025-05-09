import { useState } from "react";
import TimelineEdu from "./daisyui/timeline_Edu.jsx";
import TimelineReExp from "./daisyui/timelineReExp.jsx";
import TimelineExp from "./daisyui/timelineNrExp.jsx";


export default function TimelineTabs() {
    const [activeTab, setActiveTab] = useState ("related experience")

    return (
        <div className="max-w-5xl  mx-auto px-4 py-8">
            <div className="flex justify-center pb-14 "> 
                <button onClick={() => setActiveTab ("education")} className={` cursor-pointer px-4 py-2 rounded-l-2xl font-semibold transition-all duration-500 ease-in-out border-2 border-[#6497B1] ${activeTab === "education" ? "bg-[#6497B1] text-white" : "  text-gray-700 dark:text-gray-300"}`}>
                Education
                </button>
                <button onClick={() => setActiveTab ("related experience")} className={`cursor-pointer px-4 py-2 font-semibold transition-all duration-500 border-y-2 ease-in-out border-[#6497B1] ${activeTab === "related experience" ? "bg-[#6497B1] text-white" : "  text-gray-700 dark:text-gray-300"}`}>
                Related Experience
                </button>
                <button onClick={() => setActiveTab ("non-related experience")} className={`cursor-pointer px-4 py-2 rounded-r-2xl font-semibold transition-all duration-500 ease-in-out border-2 border-[#6497B1] ${activeTab === "non-related experience" ? "bg-[#6497B1] text-white" : " text-gray-700 dark:text-gray-300"}`}>
                Non-Related Experience
                </button>
            </div>
            <div className=" min-h-[700px] transition-all ">
            {activeTab === "education" && <TimelineEdu />}
            {activeTab === "related experience" && <TimelineReExp />}
            {activeTab === "non-related experience" && <TimelineExp />}
            </div>

        </div>
    )
}