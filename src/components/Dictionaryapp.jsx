import { useEffect, useState } from "react";

import axios from "axios";

export default function Avatar() {

  const [word, setIsword] = useState("");

  const [resdata,setIsresdata] = useState((''))

   

  function handlesearch() {
   
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
      .then((response) => {
      //  console.log(response.data[0]?.meanings[0]?.definitions[0]?.definition, "res");
        setIsresdata(response.data[0]?.meanings[0]?.definitions[0]?.definition);
      })
      .catch(err=>{
        console.log(err.response.data.message)
      })
  }

  return (
    <>
      <input type="text" onChange={(e) => setIsword(e.target.value)} />
      <button onClick={() => handlesearch()}>Search</button>
      <div>{resdata}</div>
    </>
  );
}
