import React from 'react';
import './dashboard.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import HomePage from './HomePage';

// Fake Components
const Favorites = () => <div>Favorites</div>;
const WatchLater = () => <div>Watch Later</div>;

function Dashboard({ userUsername, setIsLoggedIn }) {

  return (
    <BrowserRouter>
      <div className="dashboard">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <SideBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;