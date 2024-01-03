import Navbar from "@/components/Navbar"
import Uploader from "@/components/Uploader"
import React from "react"
import Account from "@/components/Account"



export default function  userAccount() {
    return (
      <main className='font-roboto flex flex-col text-bold h-[100vh] w-[100vw]'>
        <Navbar/>
        <Account/>
        
      </main>
    )
  }