import react from "react"
import {useState, useEffect} from "react"
import Image from "next/image"
import Link from "next/link"
import ListItem from "./reuse/ListItem"


export default function Downloader() {
    return (
        <div className={styles.pageContainer}>
            <section className={styles.title}>
                <div>
                    Select the format you wish to download [layer name]
                </div>
                <div className="flex mt-6 w-full py-5 gap-12 align-center justify-center items-center">
                    <div className="flex rounded-xl border border-2 hover:border-sky-300 cursor-pointer p-10 justify-center text-xl">Shapefile</div>
                    <div className="flex rounded-xl border border-2 hover:border-sky-300 cursor-pointer p-10 justify-center text-xl">File Geodatabase</div>
                    <div className="flex rounded-xl border border-2 hover:border-sky-300 cursor-pointer p-10 justify-center text-xl">Geopackage</div>
                </div>
                <div className='flex mt-10 cursor-pointer p-3 h-fit bg-black text-xl font-roboto text-white w-fit'>Download</div> 
            </section>
        </div>
    )
}

const styles = {
    pageContainer: 'flex justify-center align-center items-center flex-col overflow-y-scroll w-[100vw] h-[100vh]',
    title: 'flex flex-col items-center text-2xl font-roboto h-[70vh] w-[50vw] '
}