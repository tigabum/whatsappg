
import { Route, BrowserRouter as  Router, Switch } from 'react-router-dom';
import './App.css';
import ChatRoom from './Component/ChatRoom/ChatRoom';
import LogIn from './Component/LogIn/LogIn';
import Sidebar from './Component/Sidebar/Sidebar';
import { useStateValue } from './Component/StateProvider/StateProvider';

function App() {

  const [ {user}, dispatch] = useStateValue();
  return  (
    <div className="app">
{!user ? (
 <LogIn/>
): (<div className="app_body">
   
       <Router>
 
      <Sidebar user={user} />
      <Route path="/rooms/:roomId">
        <ChatRoom/>
      </Route>

</Router>
      


      </div>
     )}

      
      {/* Sidebar */}
      {/* ChatRoom */}
      
    </div>
  )
}

export default App;
