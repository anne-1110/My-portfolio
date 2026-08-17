// import logo from './logo.svg';
import './App.css';
import AboutMe from './component/AboutMe';
import Form from './component/Form';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import RecentWorks from './component/RecentWorks';
import Works from './component/Works';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <RecentWorks/>
      <Works />
      <AboutMe/>
      <Form/>
    </div>
  );
}

export default App;
