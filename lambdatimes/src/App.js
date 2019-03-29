import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div className="App">
    <h1>Hello</h1>
      <TopBar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
