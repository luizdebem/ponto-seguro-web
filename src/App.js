import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Dashboard path="/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
