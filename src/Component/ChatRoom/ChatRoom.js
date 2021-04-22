import { Avatar, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import './ChatRoom.css'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import db from '../../firebase';
import { useParams } from 'react-router';
import firebase from 'firebase';
import { useStateValue } from '../StateProvider/StateProvider';

function ChatRoom() {
    const [input, setInput] = useState("");
    const{roomId} = useParams();
    const[roomName, setRoomName] = useState("");
    const [message, setMessage] = useState([]);
   const[ {user}, dispatch] = useStateValue();

  const [ava, setAva]  = useState("");


useEffect(() => {
    setAva(Math.round(Math.random()*5000))
}, [roomId])

    useEffect(() => {
        if(roomId){
            db.collection("rooms").doc(roomId).onSnapshot((snapshot)=>
                    setRoomName(snapshot.data().name)
            )
        }
       db.collection("rooms").doc(roomId)
       .collection("messages").orderBy("timestamp", "asc")
       .onSnapshot((snapshot)=>
        setMessage(snapshot.docs.map((doc)=>
        doc.data()))
       )
       
    }, [roomId])
   


const sendMessage = (e)=>{
    e.preventDefault();
        if(roomId){
            db.collection("rooms").doc(roomId).collection("messages").add({
                username:user.displayName,
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
        }

    setInput("");

}

    return (
        <div className="chatroom" >
          <div className="chat_header">
              <Avatar src= {`https://avatars.dicebear.com/api/human/${ava}.svg`} />
              <div className="chat_info">
                  <h4>{roomName} </h4> 
                  <p>last seen{" "} {new Date(message[message.length-1]?.timestamp?.
                        toDate()).toUTCString()
                    } </p>
              </div>
              <div className="header_icon">
                  <IconButton>
                      <SearchIcon/>
                  </IconButton>
                   <IconButton>
                      <AttachFileIcon/>
                  </IconButton>
                   <IconButton>
                      <MoreVertIcon/>
                  </IconButton>
                  
              </div>

          </div>
          <div className="chat_body">
            {
             message.map((item,index) =>(
                 <>
                  <p key={index+item.username} className={` chat_text ${!(message.username === user.displayName) && 'chat_receiver'}`}>
                     <span className="chat_timestamp" >{ new Date(item.timestamp?.toDate()).toUTCString() } </span>
                <span className="chat_username">{item.username} </span>
                
                 {item.message}
            </p>
          
                 </>
                     
            ))
            }

          
            
          </div>

          <div className="chat_bottom">
              <IconButton>
                   <InsertEmoticonIcon/>

              </IconButton>
             
              <form action="">
                  <input value={input} onChange={(e)=>setInput(e.target.value) } type="text" placeholder="Type a message" />
                  <button onClick={sendMessage} >Search</button>
              </form>
              <IconButton>
                  <MicIcon/>
              </IconButton>
              


          </div>
        </div>
    )
}

export default ChatRoom
