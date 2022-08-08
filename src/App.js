import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './component/Uesr'
import './App.css';
import { useAuth0 } from '@auth0/auth0-react'
import Welcome from './component/Welcome';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App(){
  console.log()
  const{isAuthenticated} = useAuth0();
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/home"
              element={isAuthenticated? <BestBooks />:<Welcome />}
            >
            </Route>
            <Route 
              exact path="/"
              element={isAuthenticated? <BestBooks />:<Welcome />}
            >
            </Route>
            <Route 
              exact path="/about"
              element={<User />}
            >
            </Route>
  
          </Routes>
          <Footer />
        </Router>
      </>
    )
}

export default App;


