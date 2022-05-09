import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar  from './components/Navbar';
import { BrowserRouter, Route } from "react-router-dom";
import Home  from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

const App = () => {
  return (  
    <div className = "App">
      <ToastContainer />
      <Navbar />
      <BrowserRouter>
      <Route exact path="/" component={() =><Home/> } />
      <Route path="/add"> <AddContact /> </Route>
      <Route path="/edit/:id"><EditContact /></Route>
      </BrowserRouter>
            </div>
       )
};

export default App;