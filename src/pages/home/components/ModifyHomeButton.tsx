import { modifyUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";

export default function ModifyHomeButton() {
  const dispatch = useDispatch();
    
  const dispatchAction = ()=> {
           dispatch(modifyUser({name:'Edwin', id:'0'}));
     
  }
  return (
    
    <button onClick={dispatchAction}>dispatch modify Action</button>
   
  )
}
