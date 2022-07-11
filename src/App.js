import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Overview from './Components/Overview/Overview'
import Contagion from './Components/Contagion/Contagion'
import Symptoms from './Components/Symptoms/Symptoms';
import WhatShouldWeDo from './Components/WhatShouldWeDo/WhatShouldWeDo'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="parent-container">    
      <Navbar/>
      <Overview/>
      <Contagion/>
      <Symptoms/>
      <WhatShouldWeDo/>
      <Footer/>
    </div>
  );
}

export default App;
