
import './App.css';
import ChatRoom from './Component/ChatRoom/ChatRoom';
import Sidebar from './Component/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app_body">
         <Sidebar/>
         <ChatRoom/>

      </div>
     
      {/* Sidebar */}
      {/* ChatRoom */}
      
    </div>
  );
}

export default App;
