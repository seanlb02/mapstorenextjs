

import Head from 'next/head'
import Image from 'next/image'
import bbox from "geojson-bbox"

import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import son from "./test.json"

export default function Recenter({ center, zoom, bounds }) {
    const map = useMap();
    // map.setView(center, zoom);
    map.setMaxBounds(bounds)
    return null;
  }
