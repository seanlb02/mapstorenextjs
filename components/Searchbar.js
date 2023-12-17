import React, { useState } from "react";



export default function Searchbar() {

    const [filter, setFilter] = useState(false)

    return (
        <div className={styles.itemContainer}>
            <form className="flex w-[35vw] border-2">
                <div className='flex cursor-pointer p-2 bg-black text-white align-center items-center px-6'>Search</div>
                <input className='p-4 w-full bg-slate-100' placeholder="Start typing some keywords"></input>
            </form>
            <div className='flex bg-green-100 cursor-pointer  align-center items-center px-6' onClick={() => setFilter(!filter)}>Filter</div>
            {filter ? <>
                <div className='flex bg-slate-200 rounded-full cursor-pointer text-sm align-center items-center px-6 py-1'>Geometry</div>
                <div className='flex bg-slate-200 rounded-full cursor-pointer text-sm align-center items-center px-6'>Distance</div>
                <div className='flex bg-slate-200 rounded-full cursor-pointer text-sm align-center items-center px-6'>Category</div>
                </>
            : <></>}
        </div>
    )
}

const styles = {
    itemContainer: " flex gap-12 align-center p-4 h-[14vh] w[80vw] font-roboto"
}