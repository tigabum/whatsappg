import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import db from '../../firebase';

import './ChatLists.css'

function ChatLists({addNewChat,id, name, message}) {
            const [pic, setPic] = useState("");  
            const [messages, setMessages] = useState([]); 
            
            useEffect(() => {
               if(id){
                db.collection("rooms").doc(id).collection("messages")
                .onSnapshot((snapshot)=>
                    setMessages(snapshot.docs.map((doc)=> doc.data()))
                )
               }
            }, [id])
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
        <Link to={`/rooms/${id}`} >
         <div style={{textDecoration:'none'}} className="chatlists" >
                <Avatar src= {` https://avatars.dicebear.com/api/human/${pic}.svg` } />
                <div className="avatar_info">
                    <h3>{name} </h3>
                    <p>{messages[0]?.message} </p>
                </div>  
        </div>
        </Link>
       
      
        
    ):(
        <div className="chatlists">
            <h2 onClick={addNewChatHandler} >Add new Chat</h2>
       </div>
    )
}

export default ChatLists
