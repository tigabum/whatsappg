import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import db from '../../firebase';

import './ChatLists.css'

function ChatLists({addNewChat, name, message}) {
            const [pic, setPic] = useState("");   

            useEffect(() =>{
                setPic(Math.round(Math.random()*5000))
            }, []) 

            const addNewChatHandler =() => {
                    let inputValue = prompt("Enter a Chat name");
                    if(inputValue){

                        db.collection("rooms").add({
                            name:inputValue,
                            
                        })
                    }
            }

    return !addNewChat ? (
        <div className="chatlists" >
                <Avatar src= {` https://avatars.dicebear.com/api/human/${pic}.svg` } />
                <div className="avatar_info">
                    <h3>{name} </h3>
                    <p>{message} </p>
                </div>
           
        </div>
    ):(
        <div className="chatlists">
            <h2 onClick={addNewChatHandler} >Add new Chat</h2>
        

        </div>
    )
}

export default ChatLists
