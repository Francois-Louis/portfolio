import './app.scss';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Projects from '../Projects/projects';
import Profile from '../Profile/profile';
import Error from '../Error/error';
import Gallery from "../Gallery/gallery";
import * as React from 'react';

const App = () => {
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/boules-de-poil" element={<Gallery />} />
          <Route path="/projets/atelier-legoff" element={<Gallery />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
