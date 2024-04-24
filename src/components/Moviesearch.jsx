import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";
import { useState } from "react";

export default function Moviesearch(){


    const [url,setIsurl] = useState('https://youtu.be/sa9l-dTv9Gk');

    const [video,setvideo] = useState('inception')

 function handlesearch(){

   movieTrailer(video).then((data)=>{
    setIsurl(data);
    console.log(data,"data");
   })

   // console.log(movieTrailer(video),"movie");
   
 }



    return(
        <>
        <input type="text" onChange={(e)=>setvideo(e.target.value)} />
        <button onClick={()=>handlesearch()}>Search</button>
        <ReactPlayer url={url} controls={true}></ReactPlayer>
        </>
    )
}