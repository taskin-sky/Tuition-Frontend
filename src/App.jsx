import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Tuition from './pages/Tuition';
import CreatePost from './pages/CreatePost';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import GuardianDashboard from './pages/GuardianDashboard';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tuition" element={<Tuition />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/dashboard_a" element={<AdminDashboard />} />
        <Route path="/dashboard_t" element={<TeacherDashboard />} />
        <Route path="/dashboard_g" element={<GuardianDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
