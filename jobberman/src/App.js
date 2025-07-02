import React from 'react';

import Herosection from './components/Herosection';

import Navbar from './components/Navbar';

import RecommendedJobs from './components/RecommendedJobs';

import HowItWorks from './components/HowItWorks';

import JobCard from './components/JobCard';

import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <RecommendedJobs/>
      <HowItWorks/>
      <JobCard />
      <Footer />
    </div>
  );
}

export default App;
