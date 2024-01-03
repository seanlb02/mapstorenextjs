import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import List from '@/components/List'
import Searchbar from '@/components/Searchbar'
import Downloader from '@/components/Downloader'
import { Sidebar_props } from "/context/context"




export default function Download() {
  return (
    <main className='font-roboto text-bold h-[100vh] w-[100vw]'>
      <Navbar/>
      <div className='flex'>      
        <Downloader/>
      </div>
      
    </main>
  )
}
