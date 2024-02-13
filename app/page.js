import Image from 'next/image'
import {app} from "./firebase";
import {getFirestore ,doc, getDoc} from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const db = getFirestore(app)
const storage = getStorage(app)

const titleSnap = await getDoc(doc(db, 'Main', 'Heading'))

const eduSnap = await getDoc(doc(db, 'Profile', 'Education'))
const sumSnap = await getDoc(doc(db, 'Profile', 'Summary'))
const expSnap = await getDoc(doc(db, 'Profile', 'Experience'))
const intSnap = await getDoc(doc(db, 'Profile', 'Interest'))
const skillSnap = await getDoc(doc(db, 'Profile', 'Skills'))

const titleData = titleSnap.exists() ? titleSnap.data() : null
    
const eduData = eduSnap.exists() ? eduSnap.data() : null
const sumData = sumSnap.exists() ? sumSnap.data() : null
const expData = expSnap.exists() ? expSnap.data() : null
const intData = intSnap.exists() ? intSnap.data() : null
const skillData = skillSnap.exists() ? skillSnap.data() : null


let url = await getDownloadURL(ref(storage, expData.List[2].crest_url))

export const data = [eduData, sumData, expData, intData, skillData]


export default function Home() {
  return (
    <main className='flex justify-center bg-inherit'>
      <div className="grid potrait:grid-cols-1 landscape:xl:grid-cols-2 xl:w-5/6 min-h-screen">
        <div className='flex flex-col py-20 md:py-32 lg:py-48 landscape:xl:py-72 px-8 md:px-12 lg:px-16 justify-center'>
          <div id='title' className='justify-center text-center xl:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
            {titleData.Name}
          </div>
          <div id='intro' className='pt-6 md:pt-8 lg:pt-12 justify-center text-center xl:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl'>
            <span>
              {titleData.Sub}
            </span>
          </div>
        </div>
        <div>
      </div>
    </div>
  </main>
  )
}
