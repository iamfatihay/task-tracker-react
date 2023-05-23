import { useState, useEffect } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";

import Data from "../helper/Data";

const Home = () => {
  const [array, setArray] = useState([])

  const getData=()=>{
    setArray(Data)
  }
  useEffect(()=>{getData()},[])
  
  // const addGorev=()=>{
  //   setArray()

  // }


  return (
    <div>
      <GorevEkle array={array} setArray={setArray} />

      <GorevleriGoster array={array} setArray={setArray} />
    </div>
  );
};

export default Home;
