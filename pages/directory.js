import React from "react";
import {useEffect, useState} from "react"
import dynamic from "next/dynamic";
import Sidebar from "@/components/Sidebar";
import List from "@/components/List";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";

const Map = dynamic(() => import('/components/Map'), {
    ssr:false
  }) 

export default function Directory() {
    return (
        <div>
            <Navbar/>
            <div className={styles.pageContainer}>
                <Sidebar/>
                <div>
                    <Searchbar/>
                    <div className="flex">
                        <List/>
                        <Map center={[51.505, -0.09]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    pageContainer: 'flex'
}