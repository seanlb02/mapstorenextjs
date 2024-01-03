
import react from "react"
import {useState, useEffect} from "react"
import Image from "next/image"
import Link from "next/link"
import bbox from "geojson-bbox"
import useRouter from "next/router"
import Router from "next/router"

import son from "./test.json"
 

export default function Navbar() {

    useEffect(() => {
  
        console.log(bbox(son))
      
      }, [])
      
    return (
        <div className={styles.pageContainer}>
            
            <div className="flex items-center align-center" onClick={()=> Router.push('/')}>
                <Image className='ml-3' src='/logoBlack.png' height={40} width={180}></Image>
            </div>
            <div className='flex ml-auto mr-6 align-center gap-6 justify-center items-center '>
                <div className='flex cursor-pointer p-3 px-5 h-fit bg-green-400' onClick={() => Router.push('/upload')}>Upload</div>
                <div className='flex cursor-pointer p-3 h-fit bg-blue-400' ><Link href='/account'>My Account</Link></div>
                <div className='flex cursor-pointer p-3 h-fit bg-blue-400'><Link href='/home'>My Files</Link></div>
                <div className='flex cursor-pointer p-3 h-fit bg-black text-white' onClick={() => Router.push('/')}>Log Out</div>
            </div>

        </div>
        
    )
}

const styles = {
    pageContainer: 'flex mr-auto w-[100vw] h-[10vh]',
    button: 'flex p-4'
}