import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header/Header';
import About from './components/about/About';
import Footer from './components/Footer';
import Expt from  './components/Expt/Expt'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <About/>
      <Expt/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
