import React from 'react';
import './App.css';
import LandingPage from '../src/components/Landing Page/LandingPage';
import Statistics from './components/Statistics/statistics';
import ConsultationInfo from './components/Consultation Info/ConsultationInfo';
import HelpArticle from './components/Help Article/HelpArticle';
import ConsultationPoints from './components/Consultation points/ConsultationPoints';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <div className="App">
        <LandingPage />
      </div>
       <div className="statistics">
       <Statistics />
     </div>
     <div className="consultationInfo">
       <ConsultationInfo />
     </div>
     <div className="helpArticle">
       <HelpArticle/>
     </div>
     <div className="consultationPoints">
       <ConsultationPoints/>
     </div>
     <div className="faq">
       <FAQ/>
     </div>
     <div className="contact">
       <Contact/>
     </div>
     </>
  );
}

export default App;