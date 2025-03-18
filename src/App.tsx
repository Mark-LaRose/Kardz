import React, { useState } from 'react';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import Rules from './components/Rules';
import './App.css';

interface Rule {
  description?: string;
  points?: string[];
  extraNote?: string;
}

function App() {
  const [rules, setRules] = useState<Rule | null>(null);

  return (
    <div className="App">
      <Header />
      <Dropdown onSelect={setRules} />
      <Rules rules={rules} />
    </div>
  );
}

export default App;