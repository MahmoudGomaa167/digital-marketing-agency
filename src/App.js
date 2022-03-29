import './App.css';
import { About } from './components/about/About';
import Choose from './components/choose/Choose';
import Counter from './components/counter/Counter';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Team from './components/team/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Choose />
      <Counter />
      <Team />
    </div>
  );
}

export default App;
