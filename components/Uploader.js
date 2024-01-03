import React from "react"
import Router from "next/router"
import { useState, useEffect } from "react"

export default function Uploader() {

    const [loaded, setLoaded] = useState(false)
    const [formData, setFormData] = useState(new FormData())
    const [fileField, setFileField] = useState("")
    const [formCompleted, setFormCompleted] = useState(false)
    const [layerData, setLayerData] = useState([""])
    const [uploadReady, setUploadReady] = useState(false)
    const [description, setDescription] = useState("")

    const [geometry, setGeometry] = useState([])

    
  useEffect(() => {
setLoaded(true)   
if (loaded) {
setFormData(new FormData())
}}, [])

useEffect(() => {
  if (layerData.length > 1) {
  setUploadReady(true)}
  }, [layerData])


    const preview = async function (formData) {
        try {
            if (formCompleted) {
            formData.append("data_zip_file", fileField[0]);

            console.log("triggered")
            const response = await fetch("http://127.0.0.1:5000/upload/zip/", {
                method: "POST",
                body: formData,
          }).then(response => response.json())
          .then(data => setLayerData(data.data[0]))
                  
        }}
        catch (error) {
          console.error("Error:", error);
        }
      }
      
      const handleChange = function(){
        setFileField(event.target.files)
        setFormCompleted(true)
      }

      let post_body = {
        "user_id": "100",
        "sub_id": "88",
        "layer_name": `${layerData[0]}`,
        "crs": `${layerData[2]}`,
        "top_err": layerData[6],
        "geom_err": layerData[5],
        "duplicate": false,
        "corrupt": false,
        "bbox": layerData[7]
    }

      const upload = async function () {
        try {
            const response = await fetch("http://localhost:4000/layers/new", {
              headers: {
                'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify(post_body)
          }).then(console.log(response))     
        }
        catch (error) {
          console.error("Error:", error);
        }
      }
      
    return (
        <div className={styles.pageContainer}>
        
        <div className={styles.form}>
            <form className="flex flex-col gap-5 align-center items-left">
                <div>
                    <input className='p-4 w-72 bg-slate-100' placeholder="Describe your layer" onChange={e => setDescription(e.target.value)}></input>

                </div>
                <div>Upload a zipfile containing a shapefile, geopackage or file geodatabase</div>
                <label className="flex cursor-pointer p-3 h-fit bg-black text-white w-fit" for="data_zip_file">Browse Zipfile</label>
                <input type="file" id="data_zip_file" accept="application/zip" onChange={handleChange} name="data_zip_file" className="z-50 opacity-0 position-relative"/>
                <div className="flex gap-6">
                    <div>{layerData[0]}</div>
                    <div>{layerData[1]}</div>
                    <div>{layerData[2]}</div>
                    {uploadReady ? <div>{description}</div>:<></>}
                </div>

                {formCompleted ?  <div className='flex cursor-pointer p-3 h-fit bg-black text-white w-fit' onClick={(e) => preview(formData, e)}>Preview</div> : <></>}
                {uploadReady ? <div className='flex p-3 h-fit bg-green-500 text-white w-fit' onClick={(e) => upload(formData, e)}>Upload</div> : <div className='flex p-3 h-fit bg-slate-300 text-white w-fit' onClick={(e) => upload(formData, e)}>Upload</div>}
            </form>

        </div>
        </div>
    )
}

const styles = {
    pageContainer: "flex text-roboto flex-col justify-center items-center align-center w-[100vw] h-[100vh]",
    form: "flex border border-black h-[70vh] w-[50vw] items-center justify-center"
}