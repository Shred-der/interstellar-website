import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Telemetry from './components/Telemetry/Telemetry';
import TechnicalView from './components/TechnicalView/TechnicalView';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Telemetry />
                <TechnicalView />
            </main>
            <Footer />
        </div>
    );
}

export default App;
