
import react from "react"
import {useState, useEffect} from "react"
import Image from "next/image"
import Link from "next/link"
import bbox from "geojson-bbox"
import useRouter from "next/router"
import Router from "next/router"

import son from "./test.json"
 

export default function HomeNavbar() {

    useEffect(() => {
  
        console.log(bbox(son))
      
      }, [])
      
    return (
        <div className={styles.pageContainer}>
            
            <div className="flex items-center align-center" onClick={()=>Router.push('/')}>
                <Image className='ml-3' src='/logoWhite.png' height={50} width={200}></Image>
            </div>
            <div className='flex ml-auto mr-6 align-center gap-6 justify-center items-center '>
                <div className='flex cursor-pointer p-3 px-5 h-fit' onClick={() => Router.push('/upload')}>Developers</div>
                <div className='flex cursor-pointer p-3 h-fit ' onClick={() => Router.push('/home')}>About</div>
                <div className='flex cursor-pointer p-3 h-fit bg-green-400 text-white'>Log in</div>
            </div>

        </div>
        
    )
}

const styles = {
    pageContainer: 'flex mr-auto w-[100vw] h-[10vh] sticky bg-black text-white',
    button: 'flex p-4'
}