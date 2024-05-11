// src/App.tsx
import ParticlesBackground from '../src/components/ParticlesBackground'; 
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';

const App = () => {
  return (
    <div className="App">
      <ParticlesBackground />
      <Nav />
      <About />
      
    </div>
  );
};

export default App;
