
import { Route, BrowserRouter as  Router, Switch } from 'react-router-dom';
import './App.css';
import ChatRoom from './Component/ChatRoom/ChatRoom';
import Sidebar from './Component/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Router>
          <Switch>
            <Sidebar/>
            <ChatRoom/>
            
           

          </Switch>
          
        

        </Router>
        

      </div>
     
      {/* Sidebar */}
      {/* ChatRoom */}
      
    </div>
  );
}

export default App;
