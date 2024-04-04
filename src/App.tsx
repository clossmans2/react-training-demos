import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './Header.component';
import { Footer } from './Footer.component';
import { HomeComponent } from './Home.component';
import { ThemeContext } from './ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <div className="App">
        <HeaderComponent />
        <HomeComponent />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
