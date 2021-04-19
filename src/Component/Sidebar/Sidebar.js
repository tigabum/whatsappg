import React from 'react'
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ChatLists from '../ChatLists/ChatLists';


function Sidebar() {
    return (
        <div className="sidebar" >
            {/* Sidebar Header */}
           {/* Search */}
           {/* Chat */}
            <div className="sidebar_header">
               <Avatar/>
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
                <ChatLists/>
                 <ChatLists/>
                  <ChatLists/>
                   <ChatLists/>
            </div>

        </div>
    )
}

export default Sidebar
