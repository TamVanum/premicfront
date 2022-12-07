import React from 'react';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <h1>app soy wajaa</h1>
      <button onClick={this.props.history.push('index.js')}>Redirect to some page </button>

    </div>
  );
}

export default App;
