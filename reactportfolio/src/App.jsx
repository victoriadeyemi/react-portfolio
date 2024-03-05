import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'
import ProjectGallery from './pages/project_gallery';
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Header />
      <main className = "min-vh-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectGallery />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
