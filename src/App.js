import React from "react";
import { Route ,Redirect } from "react-router-dom";

// pages
import Setting from './pages/Setting'
import Profile from './pages/Profile'
import BuyCoin from './pages/BuyCoin'


 import Landing from "./Components/Landing";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
    <div className="">

      <Route path='/setting' component={Setting} />
      <Route path='/buy-coin' component={BuyCoin} />
      <Route path='/profile' component={Profile} />
      <Redirect to='/buy-coin' />
      <Footer />
    
    </div>
    </>


    // <div className="App">
    //   <Landing/>
    // </div>
  );
}

export default App;
