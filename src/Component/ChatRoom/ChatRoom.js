import { Avatar, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import './ChatRoom.css'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import db from '../../firebase';

function ChatRoom() {
    const [input, setInput] = useState("");

  const [ava, setAva]  = useState("");
useEffect(() => {
    setAva(Math.round(Math.random()*5000))
}, [])



const sendMessage = (e)=>{
    e.preventDefault();
    setInput("");

}

    return (
        <div className="chatroom" >
          <div className="chat_header">
              <Avatar src= {`https://avatars.dicebear.com/api/human/${ava}.svg`} />
              <div className="chat_info">
                  <h4>Username</h4> 
                  <p>last seen @4:34pm</p>
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
            <p className={`chat_text ${true && "chat_receiver"}` }   >
                <span className="chat_username">username</span>
                 <span className="chat_timestamp" >4:32am</span>
                 Hello,everyone
            </p>
            <p className="chat_text chat_receiver">new chat</p>
            
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
