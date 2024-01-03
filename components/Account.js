import react from "react"
import {useState, useEffect} from "react"
import Image from "next/image"
import Link from "next/link"
import ListItem from "./reuse/ListItem"


export default function Account() {
    return (
        <div className={styles.pageContainer}>
            <section className={styles.title}>Hi [username]</section>
        </div>
    )
}

const styles = {
    pageContainer: 'flex flex-col overflow-y-scroll w-[100vw] h-[100vh]',
    title: 'text-4xl font-bold p-4 ml-8 mt-5'
}