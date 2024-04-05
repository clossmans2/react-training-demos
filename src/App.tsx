import React from 'react';
import { Home } from './pages/Home';
import { ThemeContext } from './ThemeContext';
import { Students } from './pages/Students';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StudentDetails } from './pages/StudentDetails';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:studentId" element={<StudentDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
