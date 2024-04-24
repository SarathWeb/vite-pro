import axios from "axios"
import { useEffect, useState } from "react"

export default function Lyricsfinder(){

    const [artist,setArtist] = useState('')

    const [song,setSong] = useState('');

    const [lyrics,setLyrics] = useState('');


   // console.log(artist,song,"ss");

   function searchlyrics(){

    axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then((res)=>{
      setLyrics(res.data.lyrics);
    })
    .catch(err=>{
        console.error(err)
    })
   }

      
    
    return(
        <>
        <input type="text" onChange={(e)=>setArtist(e.target.value)} />

        <input type="text" onChange={(e)=>setSong(e.target.value)} />

        <button onClick={()=>searchlyrics()}>Search</button>

        <div>{lyrics}</div>
        
        </>
    )
}