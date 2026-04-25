import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js';

import Home from './Home.js';
import About from './Abouts.js';
import Admissions from './admissions.js';
import TrainingCourses from './TrainingCourses.js';
import Blog from './blog.js';
import Calendar from './Calendar.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import Query from './Query.js';
import Auth from './Auth.js';
import AdminDashboard from "./AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      {/* Header only for public & user */}
      <Header />

      <Routes>
         {/* Public / User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/abouts" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/training-courses" element={<TrainingCourses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/school-calendar" element={<Calendar />} />
        <Route path="/contact-us" element={<Contact />} />
         <Route path="/enquery" element={<Query/>} />
        <Route path="/auth" element={<Auth/>} />
         {/* 🔐 Admin Route */}
         <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
