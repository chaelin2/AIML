import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
const Message =({message})=>{
    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)
    return (
        <div className={`message ${message.senderId===currentUser.uid&&"owner"}`}>
            <div className="messageInfo">
                <img src={message.senderId===currentUser.uid? currentUser.photouRL:data.user.photouRL}
                alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>{message.text}</p>
                {message.img && <img src={message.img} alt="" />}
                
            </div>
        </div>
    )
}

export default Message