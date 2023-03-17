import { useDispatch, useSelector } from "react-redux";
import {login, logout} from "../store"
import {useState} from "react"


export const Login = () =>{
    const [newUserName, setNewUserName] = useState("");
    const dispatch = useDispatch();
    const username = useSelector((state)=>state.user.value.username);
    return(
        <div>
           <h1>{username}</h1>
           <input 
             onChange={(e)=> setNewUserName(e.target.value)}
           />
           <button 
           onClick={
            ()=>dispatch(login({username: newUserName}))
            }>
           submit login</button>
           <button>logout</button>
        </div>
    )
}