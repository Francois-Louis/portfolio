import './app.scss';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Projects from '../Projects/projects';
import Profile from '../Profile/profile';
import Error from '../Error/error';

const App = () => {
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/boules-de-poil" element={<h1>About</h1>} />
          <Route path="/projets/atelier-legoff" element={<h1>About</h1>} />
          <Route path="/profil" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
