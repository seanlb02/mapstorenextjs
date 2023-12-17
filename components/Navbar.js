
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
            
            <div>
                [logo]
            </div>
            <div className='flex ml-auto mr-6 align-center gap-6 justify-center items-center '>
                <div className='flex cursor-pointer p-3 px-5 h-fit bg-green-400' onClick={() => Router.push('/upload')}>Upload</div>
                <div className='flex cursor-pointer p-3 h-fit bg-blue-400'>My Account</div>
                <div className='flex cursor-pointer p-3 h-fit bg-black text-white'>Log Out</div>
            </div>

        </div>
        
    )
}

const styles = {
    pageContainer: 'flex mr-auto w-[100vw] h-[10vh]',
    button: 'flex p-4'
}