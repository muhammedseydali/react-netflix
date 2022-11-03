import React from 'react'
import './Components/Navbar/Navbar.css';
import './Components/App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import{actions,originals, trending} from './urls'
import Footer from './Components/Footer/Footer';


function App( ) {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost  url={originals} title='Netflix Originals'/>
      <Rowpost  url= {actions} title='Action Movies' isSmall/>
      <Rowpost  url= {trending} title='Trending Movies' />
      <Footer/>

      
     </div>
  );
}

export default App;
