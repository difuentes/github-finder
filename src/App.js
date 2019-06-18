import React from 'react';
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'
import Users from './components/users/Users'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Users />
    </div>
  );
}

export default App;
