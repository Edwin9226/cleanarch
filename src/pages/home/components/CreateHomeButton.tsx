import { createUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";

export default function CreateHomeButton() {
  const dispatch = useDispatch();
    
  const dispatchAction = ()=> {
           dispatch(createUser({name:'jhon Doe', id:'1'}));
     
  }
  return (
    
    <button onClick={dispatchAction}>dispatchAction</button>
   
  )
}
