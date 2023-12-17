import react from "react"
import {useState, useEffect} from "react"
import Image from "next/image"
import Link from "next/link"

export default function Sidebar() {
    return (
        <div className={styles.pageContainer}>
            Folders will show here
        </div>
    )
}

const styles = {
    pageContainer: 'flex w-[15vw] h-[90vh] bg-green-50 border border-slate-300 font-roboto '
}