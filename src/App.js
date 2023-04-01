import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Footer from './components/Foot';
import React from "react";
import Home from './pages/Home';
import Example from './components/Example';

function App() {
    return (
        <>
            <Navigation />
            <Home />
            <Example />
            <Footer />
        </>
    );
}

export default App;
