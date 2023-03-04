import { useState,useEffect } from "react"
import Image from "./image"


export default function GetImages() {
const [images,setImages]=useState([])

useEffect(() =>{
    const fetchImages =async() =>{
        const response = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNPLASH_API_KEY}`)
        const data =await response.json()
        setImages(data)
    }

    fetchImages()
},[])

    return(
    <>
    {!images?(<h2 className="flex items-center justify-center h-screen font-bold text-4xl
     text-center text-slate-800">
        Loading...
        </h2>)
        :
   (     <section className="px-5 container mx-auto ">
            <h1 className="font-bold text-3xl md:text-4xl lg-text:6xl my-10 
            lg:mt-20 lg-mb:16 text-slate-800 capitalize text-slate-200" >
                
            Recommended for you</h1>

            <div className="grid drid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {images.map((image)=>  
                (
                    <Image key={image.id} {...image} />
                )
                )}
            </div>


        </section>)
    }

    </>
)

} 



// className='btn btn-primary my-2'>Get Photo