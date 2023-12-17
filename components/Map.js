import React from 'react'
import {useState, useEffect} from 'react'
import bbox from 'geojson-bbox'
import Recenter from './Recenter'

import { MapContainer, TileLayer, Marker, Popup, useMap, GeoJSON } from 'react-leaflet'
import dynamic from 'next/dynamic'


import son from "./test.json"



export default function Map({center}) {

  useEffect(() => {
  console.log(bbox(son))
  console.log([[bbox(son)[1], bbox(son)[0]], [bbox(son)[3], bbox(son)[2]]])
 
}, [])

  const [extent, setExtent] = useState([
    [50.505, -29.09],
    [52.505, 29.09]
  ])
  const [bool, setBool] = useState(false)

    return (
<div className='flex h-[75vh] w-[50vw] border-t '>
  {bool ? <><div onClick={() => setExtent([[bbox(son)[1],bbox(son)[0]], [bbox(son)[3], bbox(son)[2]]])}>hey</div><MapContainer className='flex h-full w-full' bounds={extent} zoom={13} scrollWheelZoom={true}>
  <Recenter bounds={extent}/>
  
    <TileLayer
      attribution={false}
      url=""
    />
    <GeoJSON data={son} style={setColor}/>
    
  </MapContainer></> : <div>Click preview to show a file on the map</div>}
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