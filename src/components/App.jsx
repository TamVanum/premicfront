import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';
import About from '../pages/About';
import Home from '../pages/Home';


function App() {
  return (
    <div>
      <h1>app soy wajaa</h1>

      <Routes>
          <Route path="/" elememt={<Layout/>} >
            <Route path="about" element={<About/>} />
            <Route index element={<Home/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
