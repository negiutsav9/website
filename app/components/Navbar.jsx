import Link from 'next/link';
import Image from 'next/image';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "../firebase"


async function Navbar() {

    const storage = getStorage(app)

    const codeUrl = await getDownloadURL(ref(storage, 'gs://portfolio3-70a77.appspot.com/Icons/code.png'))
    const profileUrl = await getDownloadURL(ref(storage, 'gs://portfolio3-70a77.appspot.com/Icons/person.png'))
    const contactUrl = await getDownloadURL(ref(storage, 'gs://portfolio3-70a77.appspot.com/Icons/mail_icon.png'))
    const linkedinUrl = await getDownloadURL(ref(storage, 'gs://portfolio3-70a77.appspot.com/Icons/linkedin_icon.png'))
    const githubUrl = await getDownloadURL(ref(storage, 'gs://portfolio3-70a77.appspot.com/Icons/github_icon.png'))

    return ( 
        <div>
            <nav className='fixed portrait:justify-center portrait:items-center justify-between flex h-fit w-full text-white z-20 backdrop-filter backdrop-blur bg-opacity-20 p-4 lg:p-7'>
                <div className='text-4xl lg:text-5xl font-title '>
                    <Link href='/' scroll={false}>UN</Link>
                </div>
                <div className='flex justify-center items-center portrait:hidden    '>
                    <ul className='grid portrait:grid-cols-2 portrait:lg:grid-cols-4 grid-cols-4 w-fit gap-4 lg:gap-12'>
                        <li id='Profile' className='flex w-16 pt-0.5 justify-center items-center'>
                            <Link scroll={false} href='/profile'><Image src={profileUrl} width={30} height={30}/></Link>
                        </li>
                        <li id='Projects' className='flex w-16 justify-center items-center'>
                            <Link scroll={false} href='/projects'><Image src={codeUrl} width={35} height={35} /></Link>
                        </li>
                        <li id='LinkedIn' className='flex w-16 justify-center items-center'>
                            <Link scroll={false} href='https://www.linkedin.com/in/unegi/'><Image src={linkedinUrl} width={28} height={28}/></Link> 
                        </li>
                        <li id='Github' className='flex w-16 justify-center items-center'>
                            <Link scroll={false}  href='https://www.github.com/negiutsav9/'><Image src={githubUrl} width={28} height={28}/></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='flex landscape:hidden items-center justify-center'>
                <div className='fixed bottom-0 w-full h-fit px-10 p-5 z-20 backdrop-filter backdrop-blur bg-opacity-50'>
                    <ul className='flex justify-center w-full gap-6 md:gap-10'>
                        <li id='Profile' className='flex w-16 items-center justify-center'>
                            <Link scroll={false}  href='/profile'><Image src={profileUrl}  width={30} height={30}/></Link>
                        </li>
                        <li id='Projects' className='flex w-16 items-center justify-center'>
                            <Link scroll={false} href='/projects'><Image src={codeUrl} width={35} height={35}/></Link>
                        </li>
                        <li id='LinkedIn' className='flex w-16 justify-center items-center'>
                            <Link scroll={false} href='https://www.linkedin.com/in/unegi/'><Image src={linkedinUrl} width={28} height={28}/></Link> 
                        </li>
                        <li id='Github' className='flex w-16 justify-center items-center'>
                            <Link scroll={false}  href='https://www.github.com/negiutsav9/'><Image src={githubUrl} width={28} height={28}/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Navbar;