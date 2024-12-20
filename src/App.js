// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import MultipleChoice from './pages/MultipleChoice';
import './styles/globals.css';
import TrueFalse from './pages/TrueFalse';
import ShortAnswer from './pages/ShortAnswer';
import Matching from './pages/Matching';
import Footer from './components/Footer';
import Contact from './components/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in App:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center text-red-500">Something went wrong. Please try again later.</div>;
    }

    return (
      <Router>
        <div className="font-montserrat">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/multiple-choice" element={<MultipleChoice />} />
            <Route path="/true-false" element={<TrueFalse />} />
            <Route path="/matching" element={<Matching />} />
            <Route path="/short-answer" element={<ShortAnswer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
