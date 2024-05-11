import {app} from "../../firebase";
import {getFirestore ,doc, getDoc} from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Image from "next/image";

const db = getFirestore(app)
const storage = getStorage(app)

export default function Detail({params}){
    return(
        <main className="flex flex-col py-28 md:py-36 lg:py-48 landscape:xl:py-40 px-8 md:px-12 lg:px-16 items-center h-screen no-scrollbar scroll-smooth overflow-x-hidden w-screen">
            <div id='title' className="justify-center text-center xl:text-left text-3xl md:text-4xl lg:text-5xl">
                {params.id}
            </div>
            <div className="grid grid-cols-1 landscape:grid-cols-8 grid-flow-row-dense w-[95vw] lg:w-[95%] justify-center items-center p-8 py-10 lg:py-20 gap-5">
                <div id='description' className="landscape:col-span-4 p-7 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Description
                    </div>
                    <div>

                    </div>
                </div>
                <div id='features' className="landscape:col-span-5 p-7 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Features
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div id='tools' className="landscape:col-span-4 p-7 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Building Tools
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div id='links' className="landscape:col-span-3 p-7 rounded-xl bg-blue-1 z-5 backdrop-filter backdrop-blur bg-opacity-30">
                    <div id='title' className="text-2xl lg:text-3xl xl:text-4xl">
                        Useful Links
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}