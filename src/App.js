
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
require('dotenv').config()


function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
     <Navbar />
     <Switch>
       <Route path="/" exact component ={Home} />
       <Route path="/projects" exact component ={Projects} />
       <Route path="/contact" exact component ={Contact} />
     </Switch>
    </Router>
    </>
  );
}

export default App;
