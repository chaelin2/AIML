import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Navbar =()=>{
    const {currentUser} = useContext(AuthContext)

    return (
        <div className="navbar">
            <span className="logo">위치기반 소모임&채팅</span>
            <div className="user">
                <img src={currentUser.photoURL} alt=""/>
                <span>{currentUser.displayName}</span>
                <button onClick={()=>signOut(auth)}>logout</button>
            </div>
            
        </div>
    )
}

export default Navbar