'use client'

import {app} from "../../../firebase";
import {getFirestore ,doc, getDoc} from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import {data} from "../../../page"

const db = getFirestore(app)
const storage = getStorage(app)

export async function generateStaticParams() {
    return []
}

export default function Detail({params}){

    return(
        <main className="flex flex-col py-28 md:py-36 lg:py-48 landscape:xl:py-40 px-8 md:px-12 lg:px-16 items-center h-screen no-scrollbar scroll-smooth overflow-x-hidden w-screen">
            <div className="flex-col flex items-center grid grid-cols-1 landscape:grid-cols-3 rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 gap-3">
                <div id='logo' className="flex col-span-1 w-full h-full justify-center items-center">
                    <Image src={data[0][params.id].crest_url} width={250} height={250}/>
                </div>
                <div id='title' className="flex-col flex col-span-2 ">
                    <a href={data[0][params.id].Link} className="hover:underline hover:underline-offset-5">
                        <div id='Name' className="flex xl:text-left text-2xl md:text-3xl lg:text-4xl py-2 justify-center">{data[0][params.id]["Name"]}</div>
                    </a>
                    <div id='Degree' className="flex xl:text-left text-lg md:text-xl lg:text-2xl py-2 justify-center">{data[0][params.id]["Degree"]}</div>
                    <div id='Dates' className="flex xl:text-left text-lg md:text-xl lg:text-2xl py-2 justify-center">{data[0][params.id]["Duration"]}</div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 landscape:grid-cols-8 w-[99vw] lg:w-[95%] justify-center items-center p-8 py-10 lg:py-20 gap-5">
                <div id='description' className="landscape:col-span-5 p-7 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30 h-full">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Description
                    </div>
                    <div className="py-2 lg:p-12 text-md lg:text-lg xl:text-xl">
                        {data[0][params.id]["Description"]}
                    </div>
                </div>
                <div id='awards' className="landscape:col-span-3 p-7 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30 h-full">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Achievements
                    </div>
                    <div>
                        <ul className='list-disc grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-2 xl:gap-5 p-5 text-md lg:text-lg xl:text-xl'>
                                {data[0][params.id]["Awards"].map((data, index) => 
                                    <li key={index}>{data}</li>
                                )}
                        </ul>
                    </div>
                </div>
                <div id='courses' className="landscape:col-span-8 p-7 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Courses
                    </div>
                    <div>
                        <ul className='list-disc grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 xl:grid-cols-3 xl:gap-5 p-5 text-md lg:text-lg xl:text-xl'>
                                {data[0][params.id]["Courses"].map((data, index) => 
                                    <li key={index}>{data}</li>
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}