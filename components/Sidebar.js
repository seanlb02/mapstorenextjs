import react from "react"
import {useState, useEffect} from "react"
import Image from "next/image"
import Link from "next/link"

export default function Sidebar() {



    return (
        <>
        <div className={styles.pageContainer}>
            My Folders
            <div className="pl-3">Folder 1</div>
            <div className="pl-5">Folder 2</div>
            <div className="pl-7">Folder 3</div>
            <div className="pl-9">Folder 4</div>
            <div className="pl-11">Folder 5</div>

        </div>
        
        </>
    )
}

const styles = {
    pageContainer: 'flex gap-2 flex-col w-[15vw] p-3 h-[90vh] bg-green-50 border border-slate-300 font-roboto '
}