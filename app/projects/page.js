import {app} from "../firebase";
import {getFirestore ,doc, getDoc} from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Image from "next/image";

const db = getFirestore(app)
const storage = getStorage(app)

const courseSnap = await getDoc(doc(db, 'Projects', 'Course'))
const indepSnap = await getDoc(doc(db, 'Projects', "Independent"))
const researchSnap = await getDoc(doc(db, 'Projects', "Research"))
const workSnap = await getDoc(doc(db, 'Projects', "Work")) 

const courseData = courseSnap.exists() ? courseSnap.data() : null
const indepData = indepSnap.exists() ? indepSnap.data() : null
const researchData = researchSnap.exists() ? researchSnap.data() : null
const workData = workSnap.exists() ? workSnap.data() : null

export default function Projects(){
    return (
        <main className="flex flex-col py-28 md:py-36 lg:py-48 landscape:xl:py-40 px-8 md:px-12 lg:px-16 items-center h-screen no-scrollbar scroll-smooth overflow-x-hidden w-screen">
            <div id='title' className="justify-center text-center xl:text-left text-3xl md:text-4xl lg:text-5xl">
                Projects
            </div>
            <div className="flex flex-col w-[99vw] lg:w-[95%] justify-center items-center p-8 py-10 lg:py-20">
                <div className="grid grid-cols-1 landscape:sm:grid-cols-2 md:grid-cols-2 landscape:lg:grid-cols-3 landscape:2xl:grid-cols-2 gap-5 lg:gap-10">
                    {courseData.List.map((data, index) => 
                        <div key={index} className="grid grid-cols-1 2xl:grid-cols-2 hover:bg-blue-1 rounded-2xl hover:bg-opacity-40 duration-0 transition hover:duration-700">
                            <div className='w-fit h-fit z-0 p-5'>
                                <Image className="rounded-2xl" src={data.PhotoLink} width={450} height={450}/> 
                            </div>
                            <div className="grid grid-cols-1 landscape:col-span-2 landscape:lg:col-span-1 px-5 pb-5">
                                <div className="text-xl lg:text-2xl xl:text-3xl py-4">
                                    {data.Title}
                                </div>
                                <div className="text-md lg:text-lg xl:text-xl pb-5 pt-2">
                                    {data.Summary} 
                                </div>
                                <div className='flex h-8 my-2'>
                                    {data.Tools.map((tool, index) =>
                                        <div>
                                            <Image key={index} className="pr-5 h-full w-full" src={tool} width={20} height={20}/> 
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                    }
                    {indepData.List.map((data, index) => 
                        <div key={index} className="grid grid-cols-1 2xl:grid-cols-2 hover:bg-blue-1 rounded-2xl hover:bg-opacity-40 duration-0 transition hover:duration-700">
                                <div className='w-fit h-fit z-0 p-5'>
                                <Image className="rounded-2xl" src={data.PhotoLink} width={450} height={450}/> 
                            </div>
                            <div className="grid grid-cols-1 landscape:col-span-2 landscape:lg:col-span-1 px-5 pb-5">
                                <div className="text-xl lg:text-2xl xl:text-3xl py-4">
                                    {data.Title}
                                </div>
                                <div className="text-md lg:text-lg xl:text-xl pb-4 pt-2">
                                    {data.Summary} 
                                </div>
                                <div className='flex h-8 my-2'>
                                    {data.Tools.map((tool, index) =>
                                        <div>
                                            <Image key={index} className="pr-5 h-full w-full" src={tool} width={20} height={20}/> 
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                    }
                    {researchData.List.map((data, index) => 
                        <div key={index} className="grid grid-cols-1 2xl:grid-cols-2 hover:bg-blue-1 rounded-2xl hover:bg-opacity-40 duration-0 transition hover:duration-700">
                            <div className='w-fit h-fit z-0 p-5'>
                                <Image className="rounded-2xl" src={data.PhotoLink} width={450} height={450}/> 
                            </div>
                            <div className="grid grid-cols-1 landscape:col-span-2 landscape:lg:col-span-1 px-5 pb-5">
                                <div className="text-xl lg:text-2xl xl:text-3xl py-4">
                                    {data.Title}
                                </div>
                                <div className="text-md lg:text-lg xl:text-xl pb-4 pt-2">
                                    {data.Summary} 
                                </div>
                                <div className='flex h-8 my-2'>
                                    {data.Tools.map((tool, index) =>
                                        <div>
                                            <Image key={index} className="pr-5 h-full w-full" src={tool} width={20} height={20}/> 
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                    }
                    {workData.List.map((data, index) => 
                        <div key={index} className="grid grid-cols-1 2xl:grid-cols-2  hover:bg-blue-1 rounded-2xl hover:bg-opacity-40 duration-0 transition hover:duration-700">
                            <div className='w-fit h-fit z-0 p-5'>
                                <Image className="rounded-2xl" src={data.PhotoLink} width={450} height={450}/> 
                            </div>
                            <div className="grid grid-cols-1 landscape:col-span-2 landscape:lg:col-span-1 px-5 pb-5">
                                <div className="text-xl lg:text-2xl xl:text-3xl py-4">
                                    {data.Title}
                                </div>
                                <div className="text-md lg:text-lg xl:text-xl pb-4 pt-2">
                                    {data.Summary} 
                                </div>
                                <div className='flex h-8 my-2'>
                                    {data.Tools.map((tool, index) =>
                                        <div>
                                            <Image key={index} className="pr-5 h-full w-full" src={tool} width={20} height={20}/> 
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </main>
    )
}