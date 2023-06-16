import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { State } from './components/State';
import { Parent } from './components/Parent';
import { Form } from './components/Form';
import { HttpGet } from './components/HttpGet';
import { HttpPost } from './components/HttpPost';

function App() {

  const personName = {
    firstName: "Bruce",
    lastName: "Wayne"
  }

  const names = [
    {
      id: 1,
      firstName: "Steve",
      lastName: "Rogers"
    },

    {
      id: 2,
      firstName: "Tony",
      lastName: "Stark"
    },

    {
      id: 3,
      firstName: "Thor",
      lastName: "Odinson"
    }
  ]





  return (
    <div className="App">
        <HttpPost />
    </div>
  );
}

export default App;
