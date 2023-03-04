import React, { useState } from 'react'
import axios from 'axios'
import { format } from "date-fns"


function SearchImg() {
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`)
            .then((response) => {
                // console.log(response.data);
                setResult(response.data.results);
            })
    }
    return (
        <>

    <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="relative mb-4 flex w-full flex-wrap items-stretch">
      <input
        type="search"
        class="relative m-5 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
        value={photo} onChange={(e) => {
            setPhoto(e.target.value)
        }}
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon1" />
      <button
        class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
        type="button"
        onClick={changePhoto}
        id="button-addon1"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</div>

<div className='container mx-auto px-5'>
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3  '>
        {result.map((value) => {
            return (
                <>
                <article class="shadow-md bg-white rounded-3xl p-5">
                        <img className="h-52 w-full object-cover rounded-3xl md:h-80"
                        src={value.urls.full} 
                        alt={value.user.name}
                        loading='lazy'
                        />

                <article className='flex flex-wrap items-center justify-between'>
<div className="pt-5 flex items-center justify-start">
    <img src={value.user.profile_image.large} 
    alt={value.user.name}
    loading="lazy"
    className="w-20 rounded-full shadow"
    />

    <ul className="ml-3">
        <li className="font-bold text-slate-800 mb-1">{value.user.name}</li>
        {/* <li>{value.created_at}</li> */}
        <li className="text-slate-600 text-sm ">{format(new Date(value.created_at),"dd MMMM yyyy")}</li>
    </ul>
</div>

<div>
    <ul className="text-slate-600 text-sm text-right">
        <li><a href={`https://instagram.com/${value.user.instagram_username}`}
        className="underline"
        >
            Instagram
            </a></li>
        <li>{value.likes} likes</li>
    </ul>
</div>
    </article>
    </article>
    </>
            )
        })}
    </div>

</div>
{/* </div> */}
    </>
)
// return (

//   <>
//   <div className='container text-center my-5'>
//                <input type="text" className='form-control' value={photo} onChange={(e) => {
//                    setPhoto(e.target.value)
//                }} />
//               <button type='submit' onClick={changePhoto} className='btn btn-primary my-2'>Get Photo</button>
//            </div>    
//   <article className="shadow-md bg-white rounded-3xl p-5">
//       <img 
//       src={value.urls.full}
//        alt={value.user.name} 
//        loading="lazy"
//        className="h-52 w-full object-cover rounded-3xl md:h-80"
//        />

//   {result.map((value) =>  {    
//     return (
//     <article className="flex flex-wrap items-center justify-between">
//     <div className="pt-5 flex items-center justify-start">
//           <img src={value.user.profile_image.large} 
//           alt={value.user.name}
//           loading="lazy"
//           className="w-20 rounded-full shadow"
//           />

//           <ul className="ml-3">
//               <li className="font-bold text-slate-800 mb-1">{value.user.name}</li>
//               {/* <li>{value.created_at}</li> */}
//               <li className="text-slate-600 text-sm ">{format(new Date(value.created_at),"dd MMMM yyyy")}</li>
//           </ul>
//       </div>

//       <div>
//           <ul className="text-slate-600 text-sm text-right">
//               <li><a href={`https://instagram.com/${value.user.instagram_username}`}
//               className="underline"
//               >
//                   Instagram
//                   </a></li>
//               <li>{value.likes} likes</li>
//           </ul>
    
//       </div>
        
//     </article>)
//   },
//   <article/>},
//   </>
    
//   )
}

export default SearchImg