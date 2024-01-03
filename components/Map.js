import React from 'react'
import {useState, useEffect, useContext} from 'react'
import bbox from 'geojson-bbox'
import Recenter from './Recenter'

import { MapContainer, TileLayer, Marker, Popup, useMap, GeoJSON } from 'react-leaflet'
import dynamic from 'next/dynamic'


import son from "./test.json"

import { Sidebar_props } from "/context/context"


export default function Map({center}) {

  useEffect(() => {
    setSidebarprops({previewBool:false})
}, [])

  const [extent, setExtent] = useState([
    [50.505, -29.09],
    [52.505, 29.09]
  ])

  const {sidebarprops, setSidebarprops} = useContext(Sidebar_props)


    return (
  <div className='flex h-[76vh] w-[50vw] border-t '>
    {sidebarprops.previewBool ? <><div onClick={() => setExtent(sidebarprops.boundbox)}></div><MapContainer className='flex h-full w-full' bounds={sidebarprops.boundbox} zoom={13} scrollWheelZoom={true} attributionControl={false}>
    <Recenter bounds={sidebarprops.boundbox}/>
  
    <TileLayer
      attribution={false}
      url=""
    />
    <GeoJSON data={son} style={setColor}/>
    
  </MapContainer></> : <div className="flex items-center align-center w-full justify-center text-slate-400">Click Preview to show a file on the map</div>}
</div>
    )
}

const itemStyle = {
color:"black",
weight: 0.3,
opacity:1
}
const setColor = ({ properties }) => {
  return { weight: 1 };
};