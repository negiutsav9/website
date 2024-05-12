import {app} from "../firebase";
import { data } from "../page";
import Image from "next/image";
import Link from 'next/link';

export default async function Profile(){

    const eduLink = "/profile/education"
    const workLink = "/profile/work"

    return (
        <main className="flex flex-col py-28 md:py-36 lg:py-48 landscape:xl:py-40 px-8 md:px-12 lg:px-16 items-center h-screen no-scrollbar scroll-smooth overflow-x-hidden w-screen">
            <div id='title' className="justify-center text-center xl:text-left text-3xl md:text-4xl lg:text-5xl">
                About Me
            </div>
            <div className="grid grid-cols-3 w-[99vw] lg:w-[95%] p-8 py-10 lg:py-20 gap-5 h-fit">
                <div id='summary' className='p-7 col-span-3 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30'>
                    <div id='grid' className="grid grid-cols-1 portrait:grid-cols-1 landscape:grid-cols-3 gap-5">
                        <div id='photo' className="flex justify-center items-center">
                            <div className="col-span-1 p-6">
                                <Image className="h-fit w-fit xl:h-72 xl:h-72 rounded-full" src={data[1].ImageLink} width={720} height={720}/>
                            </div>
                        </div>
                        <div id='title' className="col-span-2">
                            <div id="title" className="text-2xl lg:text-3xl xl:text-4xl" >
                                Summary
                            </div>
                            <div id='content' className="py-2 lg:py-5 text-md lg:text-lg xl:text-xl">
                                {data[1].Summary.map((data,index) => 
                                    <p key={index} className="py-2">
                                        {data}
                                    </p>
                                )}                          
                            </div> 
                        </div>
                    </div>
                </div>
                <div id='education' className="p-7 col-span-3 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Education
                    </div>
                    <div id='edu-list' className="grid grid-cols-1 lg:grid-cols-2 py-5 gap-5 md:text-md lg:text-lg xl:text-xl">
                        {data[0].map((data,index) => 
                        <Link href={eduLink.concat("/",index)}>
                            <div key={Math.random() * 10} className="p-5 grid grid-cols-1 landscape:grid-cols-3 rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 gap-3 transition hover:cursor-pointer hover:bg-violet-950 duration-500 h-full">
                                    <div id='logo' className="flex col-span-1 w-full h-full justify-center items-center">
                                        <Image src={data.crest_url} width={150} height={150}/>
                                    </div>
                                    <div className="py-5 landscape:col-span-2">
                                        <div id='name' className="text-lg lg:text-xl xl:text-2xl">
                                            {data.Name}
                                        </div>
                                        <div id='year'className="pt-2">
                                            {data.Duration}
                                        </div>
                                        <div id='degree' className="pt-2">
                                            {data.Degree}
                                        </div>
                                        <div id='major' className="pt-2">
                                            {data.Major}
                                        </div>
                                    </div>
                            </div>
                        </Link>
                        )}
                    </div>
                </div>
                <div id='experience' className="p-7 col-span-3 bg-blue-1 rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Experience
                    </div>
                    <div id='exp-list' className="grid grid-cols-1 lg:grid-cols-2 py-5 gap-5 md:text-md lg:text-lg xl:text-xl">
                    {data[2].map((data,index) => 
                    <Link href={workLink.concat("/",index)}>
                            <div key={index} className="p-5 grid grid-cols-1 landscape:grid-cols-3 rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 gap-3 transition hover:cursor-pointer hover:bg-violet-950 duration-500 h-full ">
                                <div id='logo' className="flex col-span-1 w-full h-full justify-center items-center">
                                    <Image src={data.Crest_Url} width={150} height={150}/>
                                </div>
                                <div className="py-5 landscape:col-span-2">
                                    <div id='name' className="text-lg lg:text-xl xl:text-2xl py-2">
                                        {data.Head}
                                    </div>
                                    <div id='year'className="pt-2">
                                        {data.Location}
                                    </div>
                                    <div id='year'className="">
                                        {data.Title}
                                    </div>
                                    <div id='degree' className="pt-2">
                                        {data.Type}
                                    </div>
                                    <div id='major' className="pt-2">
                                        {data.Duration}
                                    </div>
                                </div>
                            </div>
                    </Link>
                        )}
                    </div>
                </div>
                <div id='skill' className="p-7 col-span-3 bg-blue-1 rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 text-md lg:text-lg xl:text-xl">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Skills
                    </div>
                    <div id='skill_table' className="w-full py-5 grid grid-cols-1 lg:grid-cols-6 gap-8">
                        <div className="rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 p-5 col-span-3 w-full">
                            <div className="text-lg lg:text-xl xl:text-2xl py-2">
                                Software & Programming
                            </div>
                            <ul className='list-disc grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-2 xl:gap-5 p-5'>
                                {data[4]['Software & Programming'].map((data, index) => 
                                    <li key={index}>{data}</li>
                                )}
                            </ul>
                        </div>
                        <div className="rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 p-5 col-span-3 w-full">
                            <div className="text-lg lg:text-xl xl:text-2xl py-2">
                                Machine Learning
                            </div>
                            <ul className='list-disc grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-2 xl:gap-5 p-5'>
                                {data[4]['Machine Learning'].map((data, index) => 
                                    <li key={index}>{data}</li>
                                )}
                            </ul>
                        </div>
                        <div className="rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 p-5 landscape:col-span-2 col-span-3  w-full">
                            <div className="text-lg lg:text-xl xl:text-2xl py-2">
                                Web Development
                            </div>
                            <ul className='list-disc grid grid-cols-2 gap-4 xl:gap-5 p-5'>
                                {data[4]['Web Development'].map((data, index) => 
                                    <li key={index}>{data}</li>
                                )}
                            </ul>
                        </div>
                        <div className="rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 p-5 landscape:col-span-2 col-span-3 w-full">
                            <div className="text-lg lg:text-xl xl:text-2xl py-2">
                                Mobile App Development
                            </div>
                            <ul className='list-disc grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-2 xl:gap-5 p-5'>
                                {data[4]['Mobile Application Development'].map((data, index) => 
                                    <li key={index}>{data}</li>
                                )}
                            </ul>
                        </div>
                        <div className="rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 p-5 landscape:col-span-2 col-span-3  w-full">
                            <div className="text-lg lg:text-xl xl:text-2xl py-2">
                                Cloud Development
                            </div>
                            <ul className='list-disc grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-2 xl:gap-5 p-5'>
                                {data[4]['Cloud Development'].map((data, index) => 
                                    <li key={index}>{data}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}