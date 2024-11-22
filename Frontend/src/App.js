import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router and Route
import './index.css'; // Import Tailwind CSS
import MindMapExplorer from './MindMapExplorer';
import BrainFitnessSimulator from "./components/BrainFitnessSimulator";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GameHub from "./components/GameHub"; // Import GameHub for the games collection
import MemoryMatch from "./components/MemoryMatch"; // Import MemoryMatch component
import PuzzleWord from "./components/PuzzleWord"; // Import PuzzleWord component
import StoryFlip from "./components/StoryFlip";
import TaskJuggler from "./components/TaskJuggler";
import AboutCreator from "./components/AboutCreator";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  // Declare state for showing feedback form
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  // Toggle feedback form visibility
  const toggleFeedbackForm = () => {
    setShowFeedbackForm(prevState => !prevState);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        <div className="flex-grow">
          <Routes>
            {/* Landing page */}
            <Route path="/" element={
              <>
              <Header />
                <HeroSection />
                <Features />
                <AboutCreator />
                
                {showFeedbackForm && <FeedbackForm />} {/* Show FeedbackForm if true */}
              </>
            } />
            
            {/* GameHub page */}
            <Route path="/games" element={<GameHub />} />
            
            {/* Memory Game Route */}
            <Route path="/games/memory" element={<MemoryMatch />} />
            
            {/* Puzzle Game Route */}
            <Route path="/games/puzzle" element={<PuzzleWord />} />
            <Route path="/games/story" element={<StoryFlip />} />
            <Route path="/games/juggler" element={<TaskJuggler />} />
            <Route path="/games/map" element={<MindMapExplorer />} />
            <Route path="/games/fitness" element={<BrainFitnessSimulator />} />
            <Route path="/AboutCreator" element={<AboutCreator />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/About" element={<AboutCreator />} />
            <Route path="/FeedbackForm" element={<FeedbackForm />} /> {/* Separate route for feedback form */}
          </Routes>
        </div>
        <Footer /> {/* Footer will be at the bottom of every page */}
      </div>
    </Router>
  );
}

export default App;