import React from 'react';
import './App.css';
import contacts from './contacts.json';
import FiveContacts from './Components/FiveContacts';

function App() {
  return (
    <div>
      <h1>Iron Contacts </h1>
      <FiveContacts />
    </div>
  );
}

export default App;
