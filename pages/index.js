import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import List from '@/components/List'
import Searchbar from '@/components/Searchbar'
import HomeNavbar from '@/components/HomeNav'



const Map = dynamic(() => import('/components/Map'), {
  ssr:false
}) 


const inter = Inter({ subsets: ['latin'] })

export default function Hero() {
  return (
    <>
    <HomeNavbar/>
    <main className='bg-black text-white font-roboto text-bold h-[90vh] w-[100vw] overflow-y-scroll'>
      
      <div className="flex flex-col h-fit w-fit ">
        <section className={styles.heroContainer}>
          <div className={styles.heroTextSm}>
            <div className={styles.heroText}>
              GIS-native cloud storage for your team's spatial files
            </div>
            <div>The simple dropbox alternative for managing and collaborating with location data</div>
          </div>
          <div className={styles.heroImage}>
            <Image src="/nasaimage.jpg" layout='fill'></Image>
          </div>

        </section>
        <section className="flex h-[40vh] w-[100vw] items-center align-center">
          <div className="flex flex-col w-1/4 items-center align-center justify-center h-[50vh] mt-24">
            <div className="flex  text-4xl font-mono ">Standardise</div>
            <div className="flex text-center pt-8 px-10 font-mono">Consolidate your GIS layers into a single simple-to-work-with file type with built-in documentation and QC</div>
          </div>
          <div className="flex flex-col w-1/4 items-center align-center justify-center h-[50vh] mt-24">
            <div className="flex  text-4xl font-mono ">Securely Store</div>
            <div className="flex text-center pt-8 px-10 font-mono">Your data is stored and replicated on secure cloud instances. You remain the sole owner of your data. </div>
          </div>
          <div className="flex flex-col w-1/4 items-center align-center justify-center h-[50vh] mt-24">
            <div className="flex  text-4xl font-mono ">Search</div>
            <div className="flex text-center pt-8 px-10 font-mono">Forced file documentation means your data can be searched semantically using cutting edge AI</div>
          </div>
          <div className="flex flex-col w-1/4 items-center align-center justify-center h-[50vh] mt-24">
            <div className="flex  text-4xl font-mono ">Select</div>
            <div className="flex text-center pt-8 px-10 font-mono">Preview your files in the map view so you know exactly what files you need for your project</div>
          </div>
        </section>
        <section>

        </section>
      </div>
      
    </main>
    </>
  )
}

const styles = {
  heroContainer: "flex w-[100vw] h-[80vh]",
  heroText: "flex justify-center align-center flex-col items-center text-5xl font-mono font-bold w-[40vw]",
  heroTextSm: "flex justify-center gap-12 mx-4 px-12 align-center flex-col items-center text-xl font-mono font-bold w-[40vw]",

  heroImage: "relative justify-center align-center items-center w-[60vw] bg-gradient-to-t from-white via-black to-black"
}