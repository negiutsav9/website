import {app} from "../firebase";
import { data } from "../page";
import Image from "next/image";

export default async function Profile(){

    return (
        <main className="flex flex-col py-28 md:py-36 lg:py-48 landscape:xl:py-40 px-8 md:px-12 lg:px-16 items-center h-screen no-scrollbar scroll-smooth overflow-x-hidden w-screen">
            <div id='title' className="justify-center text-center xl:text-left text-3xl md:text-4xl lg:text-5xl">
                About Me
            </div>
            <div className="grid grid-cols-3 w-[95vw] lg:w-[95%] p-8 py-10 lg:py-20 gap-5 h-fit">
                <div id='summary' className='p-7 col-span-3 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30'>
                    <div id='grid' className="grid grid-cols-1 landscape:grid-cols-3 lg:grid-cols-3 gap-5">
                        <div id='photo' className="flex justify-center items-center">
                            <div className="h-52 w-52 rounded-full col-span-1 bg-white p-10"/>
                        </div>
                        <div id='title' className="col-span-2">
                            <div id="title" className="text-2xl lg:text-3xl xl:text-4xl" >
                                Summary
                            </div>
                            <div id='content' className="py-2 lg:py-5 text-md lg:text-lg xl:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend leo vel mi dapibus, at vulputate lacus blandit. Vestibulum vestibulum suscipit nisi, eu dignissim odio sollicitudin id. Aenean molestie porttitor porttitor. Suspendisse semper eget tellus dapibus vestibulum. Donec pulvinar ultricies eleifend. Aenean sed massa enim. Etiam id massa gravida, pulvinar massa id, mollis mauris. Quisque vehicula ex vitae gravida rhoncus. Donec laoreet ipsum vel eros finibus elementum. Nullam eleifend elit in libero euismod gravida. Aenean rhoncus, mi sed dictum mollis, mi eros rhoncus orci, ut bibendum felis lectus at ligula. Nullam a facilisis lacus, nec porttitor augue. In vel pharetra libero. Praesent aliquet porta egestas. Nam laoreet sem in nibh tincidunt luctus.
                            </div> 
                        </div>
                    </div>
                </div>
                <div id='education' className="p-7 col-span-3 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Education
                    </div>
                    <div id='edu-list' className="grid grid-cols-1 lg:grid-cols-2 py-5 gap-5 md:text-md lg:text-lg xl:text-xl">
                        {data[0].List.map((data,index) => 
                            <div key={Math.random() * 10} className="p-5 grid grid-cols-1 landscape:grid-cols-3 rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 gap-3">
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
                                
                        )}
                    </div>
                </div>
                <div id='experience' className="p-7 col-span-3 bg-blue-1 rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Experience
                    </div>
                    <div id='exp-list' className="grid grid-cols-1 lg:grid-cols-2 py-5 gap-5 md:text-md lg:text-lg xl:text-xl">
                    {data[2].List.map((data,index) => 
                            <div key={Math.random() * 10} className="p-5 grid grid-cols-1 landscape:grid-cols-3 rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 gap-3">
                                <div id='logo' className="flex col-span-1 w-full h-full justify-center items-center">
                                    <Image src={data.crest_url} width={150} height={150}/>
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
                                
                        )}
                    </div>
                </div>
                <div id='skill' className="p-7 col-span-3 bg-blue-1 rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Skills
                    </div>
                    <div id='skill_table' className="w-full py-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 p-5">
                            <div className="text-lg lg:text-xl xl:text-2xl py-2">
                                Software & Programming
                            </div>
                            <ul className='list-disc grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2 xl:gap-5 p-5'>
                                {data[4].List['Software & Programming'].map((data, index) => 
                                    <li key={index}>{data}</li>
                                )}
                            </ul>
                        </div>
                        <div className="rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 p-5">
                            <div className="text-lg lg:text-xl xl:text-2xl py-2">
                                Machine Learning
                            </div>
                            <ul className='list-disc grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2 xl:gap-5 p-5'>
                                {data[4].List['Machine Learning'].map((data, index) => 
                                    <li key={index}>{data}</li>
                                )}
                            </ul>
                        </div>
                        <div className="rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 p-5">
                            <div className="text-lg lg:text-xl xl:text-2xl py-2">
                                Hardware and Digital Systems
                            </div>
                            <ul className='list-disc grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2 xl:gap-5 p-5'>
                                {data[4].List['Hardware & Digital Systems'].map((data, index) => 
                                    <li key={index}>{data}</li>
                                )}
                            </ul>
                        </div>
                        <div className="rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 p-5">
                            <div className="text-lg lg:text-xl xl:text-2xl py-2">
                                Web Development
                            </div>
                            <ul className='list-disc grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 xl:gap-5 p-5'>
                                {data[4].List['Web Development'].map((data, index) => 
                                    <li key={index}>{data}</li>
                                )}
                            </ul>
                        </div>
                        <div className="rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 p-5">
                            <div className="text-lg lg:text-xl xl:text-2xl py-2">
                                Mobile Application Development
                            </div>
                            <ul className='list-disc grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2 xl:gap-5 p-5'>
                                {data[4].List['Mobile Application Development'].map((data, index) => 
                                    <li key={index}>{data}</li>
                                )}
                            </ul>
                        </div>
                        <div className="rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 p-5">
                            <div className="text-lg lg:text-xl xl:text-2xl py-2">
                                Cloud Development
                            </div>
                            <ul className='list-disc grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2 xl:gap-5 p-5'>
                                {data[4].List['Cloud Development'].map((data, index) => 
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