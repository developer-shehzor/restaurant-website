import React from 'react';
import { Navbar } from './components';
import './App.css';
import { AboutUs, Chef, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import FindUs from './container/FindUs/FindUs';
import Footer from './container/Footer/Footer';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
