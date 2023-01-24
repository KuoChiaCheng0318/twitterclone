import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Loginfooter from './Loginfooter';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    
    <div className="app">
      <Router>
      <Loginfooter />
        <Switch>
          <Route exact path="/"> 
            <Sidebar />
            <Feed />
            <Widgets />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
