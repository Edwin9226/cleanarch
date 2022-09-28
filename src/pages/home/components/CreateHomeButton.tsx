import { UserEmptyState } from "@/models";
import { createUser } from "@/redux/slices/user.slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";  
import { fetchMorty, rickAndMortyUrl } from "../services";

export default function CreateHomeButton() {
  const dispatch = useDispatch();
  const [morthy, setMorthy]= useState(UserEmptyState); 
  
  const getMorty= async ()=>{
    const result= await fetchMorty(rickAndMortyUrl);
    console.log(result);
    setMorthy(result);
  };

  useEffect(()=>{
    getMorty();
  },[]);

  const dispatchAction = ()=> {
           dispatch(createUser({morthy}));
     
  }
  return (
    
    <button onClick={dispatchAction}>dispatch create Action</button>
   
  )
}
