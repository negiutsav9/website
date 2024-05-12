'use client'

import {app} from "../../../firebase";
import {getFirestore ,doc, getDoc} from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import {data} from "../../../page"

const db = getFirestore(app)
const storage = getStorage(app)

export default function Detail({params}){
    return(
        <main className="flex flex-col py-28 md:py-36 lg:py-48 landscape:xl:py-40 px-8 md:px-12 lg:px-16 items-center h-screen no-scrollbar scroll-smooth overflow-x-hidden w-screen">
            <div className="flex-col flex items-center grid grid-cols-1 landscape:grid-cols-3 rounded-xl z-5 backdrop-filter backdrop-blur bg-opacity-30 gap-3">
                <div id='logo' className="flex col-span-1 w-full h-full justify-center items-center">
                    <Image src={data[2][params.id].Crest_Url} width={200} height={200}/>
                </div>
                <div id='title' className="flex-col flex col-span-2 ">
                    <a href={data[2][params.id].Link} className="hover:underline hover:underline-offset-5">
                        <div id='Name' className="flex xl:text-left text-2xl md:text-3xl lg:text-4xl py-2 justify-center">{data[2][params.id]["Head"]}</div>
                    </a>
                    <div id='Location' className="flex xl:text-left text-lg md:text-xl lg:text-2xl py-2 justify-center">{data[2][params.id]["Company"]}</div>
                    <div id='Dates' className="flex xl:text-left text-lg md:text-xl lg:text-2xl py-2 justify-center">{data[2][params.id]["Duration"]}</div>
                </div>
            </div>
            <div className="grid grid-cols-1 landscape:grid-cols-8 grid-flow-row-dense w-[95vw] lg:w-[95%] justify-center items-center p-8 py-10 lg:py-20 gap-5">
                <div id='types' className="landscape:col-span-2 p-7 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30 h-full">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Location
                    </div>
                    <div className="py-8 text-md lg:text-lg xl:text-xl">
                        {data[2][params.id]["Location"]}
                    </div>
                </div>
                <div id='types' className="landscape:col-span-2 p-7 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30 h-full">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Type
                    </div>
                    <div className="py-8 text-md lg:text-lg xl:text-xl">
                        {data[2][params.id]["Type"]}
                    </div>
                </div>
                <div id='roles' className="landscape:col-span-2 p-7 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30 h-full">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Role(s)
                    </div>
                    <ul className='p-7 list-disc text-md lg:text-lg xl:text-xl space-y-3'>
                        {data[2][params.id]["Position"].map((data, index) => 
                            <li key={index}>{data}</li>
                        )}
                    </ul>
                </div>
                <div id='supervisors' className="landscape:col-span-2 p-7 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30 h-full">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Supervisor(s)
                    </div>
                    <ul className="list-disc p-7 text-md lg:text-lg xl:text-xl gap-5 space-y-3">
                        {data[2][params.id]["Supervisors"].map((supervisor, index) => 
                        <li key={index}>
                            <a href={supervisor.Link} className="underline underline-offset-5">
                                {supervisor.Name}
                            </a>, {supervisor.Position}
                        </li>)}
                    </ul>
                </div>
                <div id='description' className="landscape:col-span-8 p-8 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30 h-full">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Description
                    </div>
                    <ul className='list-disc grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-2 xl:gap-5 p-5 lg:p-12 text-md lg:text-lg xl:text-xl'>
                        {data[2][params.id]["Description"].map((data, index) => 
                            <li key={index}>{data}</li>
                        )}
                    </ul>
                </div>
            </div>
        </main>
    )
}