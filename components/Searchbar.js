import React, { useState } from "react";



export default function Searchbar() {

    const [filter, setFilter] = useState(false)

    return (
        <div className={styles.itemContainer}>
            <form className="flex w-[35vw] border-2">
                <div className='flex cursor-pointer p-2 bg-black text-white align-center items-center px-6'>Search</div>
                <input className='p-4 w-full bg-slate-100' placeholder="Start by typing some keywords"></input>
            </form>
            {filter ? <div className='flex bg-green-100 cursor-pointer  align-center items-center px-6' onClick={() => setFilter(!filter)}>Apply Filter</div> : 
            <div className='flex bg-green-100 cursor-pointer  align-center items-center px-6' onClick={() => setFilter(!filter)}>Filter</div>}
            {filter ? 
                <div className="flex h-full gap-8 items-center align-center ">
                    <select id="Geometry" className='flex bg-slate-200 rounded-sm cursor-pointer text-sm align-center items-center h-fit px-3 py-2'>
                        <option value="" disabled selected hidden>Geometry type</option>
                        <option>Point</option>
                        <option>Line</option>
                        <option>Polygon</option>
                    </select>
                    <select id="Geometry" className='flex bg-slate-200 rounded-sm cursor-pointer text-sm align-center items-center h-fit px-3 py-2'>
                        <option value="" disabled selected hidden>Distance</option>
                        <option>50m</option>
                        <option>100m</option>
                        <option>500m</option>
                        <option>1km</option>
                        <option>10m</option>
                        <option>100km</option>
                    </select>                
                    <select id="Geometry" className='flex bg-slate-200 rounded-sm cursor-pointer text-sm align-center items-center h-fit px-3 py-2'>
                        <option value="" disabled selected hidden>Category</option>
                        <option>Added</option>
                        <option>by</option>
                        <option>user</option>
                    </select>                
                </div>
            : <></>}
        </div>
    )
}

const styles = {
    itemContainer: " flex gap-12 align-center p-4 h-[12vh] w[80vw] font-roboto"
}