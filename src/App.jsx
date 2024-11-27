import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from './pages/auth';
import Chat from './pages/chat';
import Profile from './pages/profile';

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/chat' element={<Chat />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='*' element={<Navigate to="/auth" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
