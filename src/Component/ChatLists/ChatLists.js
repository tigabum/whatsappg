import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'

import './ChatLists.css'

function ChatLists({addNewChat}) {
            const [pic, setPic] = useState("");   

            useEffect(() =>{
                setPic(Math.round(Math.random()*5000))
            }, []) 

            const addNewChatHandler =() => {
                    let inputValue = prompt("Enter a Chat name");
                    if(inputValue){

                    }
            }

    return !addNewChat ? (
        <div className="chatlists" >
                <Avatar src= {` https://avatars.dicebear.com/api/human/${pic}.svg` } />
                <div className="avatar_info">
                    <h3>username</h3>
                    <p>some texts below</p>
                </div>
           
        </div>
    ):(
        <div className="chatlists">
            <h2 onClick={addNewChatHandler} >Add new Chat</h2>

        </div>
    )
}

export default ChatLists
