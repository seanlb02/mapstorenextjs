import React from "react"
import Router from "next/router"
import { useState, useEffect } from "react"

export default function Uploader() {

    const [loaded, setLoaded] = useState(false)
    const [formData, setFormData] = useState(new FormData())
    const [fileField, setFileField] = useState("")


    
  useEffect(() => {
setLoaded(true)   
if (loaded) {
setFormData(new FormData())
}}, [])

    const upload = async function (formData) {
        try {
            formData.append("data_zip_file", fileField[0]);

            console.log("triggered")
            const response = await fetch("http://127.0.0.1:5000/", {
                method: "POST",
                body: formData,
          });
          const result = await response.body;
          console.log("Success:", result);
        } 
        catch (error) {
          console.error("Error:", error);
        }
      }
      
      const handleChange = function(){
        setFileField(event.target.files)
      }
      
    //   const send = function(e) {
    //     e.preventDefault()
    //     upload(formData)}
      


    return (
        <div className={styles.pageContainer}>
        
        <div className={styles.form}>
            <form>
                <input type="file" accept="application/zip" onChange={handleChange} name="data_zip_file" />
                <div onClick={(e) => upload(formData, e)}>upload</div>
            </form>




        </div>
        
        
        
        
        </div>
    )
}

const styles = {
    pageContainer: "flex flex-col justify-center items-center align-center w-[100vw] h-[100vh]",
    form: "flex flex-col border border-black h-[70vh] w-[50vw]"
}