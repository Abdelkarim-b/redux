import {useSelector } from "react-redux";

export const Home = () =>{
    const username = useSelector((state)=>state.user.value.username);
    return <h1>This is a home pages {username}</h1>
}