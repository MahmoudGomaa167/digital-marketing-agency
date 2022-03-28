import './App.css';
import { About } from './components/about/About';
import Header from './components/header/Header';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
    </div>
  );
}

export default App;
