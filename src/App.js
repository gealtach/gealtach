
import './App.css';
import { Route } from 'react-router-dom';
import Landing from './Views/Landing/Landing';
import About from './Views/About/About';
import Skills from './Views/Skills/Skills';
import Projects from './Views/Proyects/Projects';
import Contact from './Views/Contact/Contact';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path='/'><Landing/></Route>
      <Route exact path='/about'><About/></Route>
      <Route exact path='/skills'><Skills/></Route>
      <Route exact path='/projects'><Projects/></Route>
      <Route exact path='/contact'><Contact/></Route>
    </div>
  );
}

export default App;
