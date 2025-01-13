import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Mainbody from './components/Mainbody';
import './App.css';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow flex flex-col">
        <Categories />
        <Mainbody />
    </main>
    <Footer />
    </div>
  );
}

export default App;
