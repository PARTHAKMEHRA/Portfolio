import './App.css';
import {useState} from 'react';
import Navbar from './components/molecules/Navbar/navbar';
import Home from './components/molecules/Home/home';
import About from './components/molecules/About/about';
import Project from './components/molecules/Projects/project';
import Contact from './components/molecules/Contact/contact';

const App = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <Navbar activeItem={activeItem} handleItemClick={handleItemClick} />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
