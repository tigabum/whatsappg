import React,{useState, useEffect} from 'react'
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ChatLists from '../ChatLists/ChatLists';
import db from '../../firebase'
function Sidebar({user} ) {
   const [rooms, setRooms] = useState([]);

   useEffect( ()=>{
       db.collection("rooms")
        .onSnapshot(
            (snapshot)=>
            setRooms(snapshot.docs.map((doc)=>(
              
               {    
                   id:doc.id,
                   data:doc.data()
               }
            )))
        )

   }, []);

    return (
        <div className="sidebar" >
            {/* Sidebar Header */}
           {/* Search */}
           {/* Chat */}
            <div className="sidebar_header">
               <Avatar src={user.photoURL} />
                <div className="sidebar_header_right">
                    <IconButton>
                      <DonutLargeIcon />  
                    </IconButton>
                    <IconButton>
                         <ChatIcon/>

                    </IconButton>
                   <IconButton>
                       <MoreVertIcon/>

                   </IconButton>
                    
                    
                </div>
            </div>
            <div className="search">
                <div className="search_container">
                    <SearchIcon/>
                <input placeholder="Search people" type="text"/>
                </div>
                

            </div>
            <div className="sidebar_chats">
               <ChatLists addNewChat />
               {rooms.map((room,index)=>
                    <ChatLists 
                        id={room.id}
                        key={room.data.name+index+1}
                        name={room.data.name}
                        message= {room.data.message}
                    />
               )}
               
            </div>

        </div>
    )
}

export default Sidebar
