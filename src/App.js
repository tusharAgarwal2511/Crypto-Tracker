import React, { useState, createContext } from 'react'
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

export const AppContext = createContext()

function App() {

  const [Search, SetSearch] = useState('')

  return (

    <AppContext.Provider value = {{Search, SetSearch}}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </AppContext.Provider>
  );
}

export default App;
