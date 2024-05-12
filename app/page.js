import Image from 'next/image'
import {app} from "./firebase";
import {getFirestore ,doc, getDoc} from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const db = getFirestore(app)
const storage = getStorage(app)

const titleSnap = await getDoc(doc(db, 'Main', 'Heading'))

const eduSnap = await getDoc(doc(db, 'Profile', 'Education'))
const sumSnap = await getDoc(doc(db, 'Profile', 'Summary'))
const expSnap = await getDoc(doc(db, 'Profile', 'Work'))
const intSnap = await getDoc(doc(db, 'Profile', 'Interest'))
const skillSnap = await getDoc(doc(db, 'Profile', 'Skills'))

const titleData = titleSnap.exists() ? titleSnap.data() : null
    
const eduData = eduSnap.exists() ? eduSnap.data() : null
const sumData = sumSnap.exists() ? sumSnap.data() : null
const expData = expSnap.exists() ? expSnap.data() : null
const intData = intSnap.exists() ? intSnap.data() : null
const skillData = skillSnap.exists() ? skillSnap.data() : null


export const data = [eduData.List.reverse(), sumData, expData.List.reverse(), intData, skillData.List]


export default function Home() {
  return (
    <main className='flex justify-center bg-inherit h-screen no-scrollbar scroll-smooth overflow-x-hidden portrait:overflow-hidden lg:overflow-hidden w-screen'>
      <div className="grid potrait:grid-cols-1 landscape:grid-cols-2 xl:w-5/6 min-h-screen">
        <div className='flex flex-col landscape:pt-12 pt-24 md:pt-32 lg:pt-48 landscape:xl:py-72 px-8 md:px-12 lg:px-16 justify-center'>
          <div id='title' className='justify-center text-center landscape:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
            {titleData.Name}
          </div>
          <div id='intro' className='pt-6 md:pt-8 lg:pt-12 justify-center text-center landscape:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl'>
            <span>
              {titleData.Sub}
            </span>
          </div>
        </div>
        <div id='image' className='flex z-24 justify-center items-center pt-5 landscape:pt-20 landscape:lg:pt-32'>
          <Image className="h-[98%] w-[50%] landscape:w-fit items-center rounded-full landscape:lg:rounded-none portrait:rounded-none landscape:h-full landscape:lg:w-[60%]" 
           src={titleData.ImgLink}
           width={720} 
           height={720}/> 
        </div>
      </div>
    </main>
  )
}
