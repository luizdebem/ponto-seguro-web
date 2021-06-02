import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <MainContent>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Dashboard path="/dashboard" />
        </Switch>
        </MainContent>
      </Router>
    </div>
  );
}

export default App;
