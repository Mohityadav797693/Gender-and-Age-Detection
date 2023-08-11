import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/home/home';
import Login from './Components/Authentication/login';
import Register from './Components/Authentication/register';
import EventCard from './Components/home/eventCard';

function App() {
  return (
    // <Home/>
    <EventCard/>
    // <Login/>

    // <Routes>
    //   <Route path="/" exact component={Home} />
    //   <Route path="/login" component={Login} />
    //   <Route path="/register" component={Register} />
    // </Routes>
  );
}

export default App;
