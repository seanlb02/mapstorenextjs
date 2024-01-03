import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useState, useContext, useEffect} from "react"
import bbox from 'geojson-bbox'

import son from "../test.json"
import { Sidebar_props } from "/context/context"



export default function ListItem({filename, preview, geometry, topology, date, error, duplicates, projection, download}) {


    const Preview = function(){
        setSidebarprops({previewBool:true, boundbox:[[bbox(son)[1],bbox(son)[0]], [bbox(son)[3], bbox(son)[2]]]})
        
    }
    const {sidebarprops, setSidebarprops} = useContext(Sidebar_props)
    return (
        <div className={styles.itemContainer}>
            <div className={styles.text}>
                <div className="flex align-center items-center gap-4 w-full">
                    <div>{filename}</div>
                    <date className="flex text-xs ml-auto align-center italic text-slate-400">{date}</date>
                
                    
                </div>
                <section className="flex gap-3">
                    <div id="geom" className={styles.icon}>
                        {geometry}
                    </div>
                    <div id="proj" className={styles.icon}>
                        {projection}
                    </div>
                    <div id="Preview" className={styles.icon} onClick={() => Preview()}>
                        {preview}
                    </div>
                    <div id="Error" className="text-xs text-red-500">
                        {error}
                    </div>
                    <div id="Error" className="text-xs">
                        {duplicates}
                    </div>
                    <div id="Download" className="text-xs text-black ml-auto">
                        <Link href='/dl'>{download}</Link>
                    </div>
                </section>
                
            </div>
           
        </div>
    )
}

const styles = {
    itemContainer: "min-h-24 text-slate-700 w-full flex items-center align-center px-12 py-5 w-full", 
    text: "flex gap-5 align-center flex-col w-full border-b-2 pb-3",
    icons: "flex",
    icon: "text-xs"
}