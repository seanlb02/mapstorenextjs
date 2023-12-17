import Navbar from "@/components/Navbar"
import Uploader from "@/components/Uploader"
import React from "react"



export default function Upload() {
    return (
      <main className='font-roboto flex flex-col text-bold h-[100vh] w-[100vw]'>
        <Navbar/>
        <Uploader/>
        
      </main>
    )
  }