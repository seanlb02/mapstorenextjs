import react from "react"
import {useState, useEffect} from "react"
import Image from "next/image"
import Link from "next/link"
import ListItem from "./reuse/ListItem"

const list = Array.from(Array(40).keys())

export default function List() {
    return (
        <div className={styles.pageContainer}>
            <ListItem filename="File name here" date="10/2/23" geometry="Point" preview="Preview" error="" duplicates="Duplicates" projection="GDA2020"/>
            <ListItem filename="File name here" date="10/5/23" geometry="Line" preview="Preview" error="Error" duplicates="" projection="GDA2020"/>
           {list.map((el) => <ListItem filename="File name here" date="10/4/23" geometry="Polygon" preview="Preview" projection="GDA2020"/>)}
        </div>
    )
}

const styles = {
    pageContainer: 'pt-4 flex flex-col overflow-y-scroll w-[35vw] h-[75vh] border-t'
}