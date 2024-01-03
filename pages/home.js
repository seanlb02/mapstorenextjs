import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import List from '@/components/List'
import Searchbar from '@/components/Searchbar'

import { Sidebar_props } from "/context/context"


const Map = dynamic(() => import('/components/Map'), {
  ssr:false
}) 


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='font-roboto text-bold h-[100vh] w-[100vw]'>
      <Navbar/>
      <div className='flex'>      
        <Sidebar/>
        <div>
          <Searchbar/>
            <div className='flex'>
              <List/> 
              <Map/>
            </div>
        </div>
      </div>
      
    </main>
  )
}
