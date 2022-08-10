import './header.scss';
import logo from '../../assets/img/logo.png';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Header = () => {
  const btn = useSelector((state) => (state.Reducer.Btn));
  let link

  switch (btn) {
    case 'projects':
      link = <Link to="/profil">Profil</Link>
      break;
    case 'profile':
      link = <Link to="/projets">Projets</Link>
      break;
      case 'back':
        link = <Link to="/projets">Retour</Link>
        break;
  }

    return (
        <header id="header">
          <Link to="/">
          <div className="brand">
            <img src={logo} alt="logo du développeur web" />
              <div className="brand__name">
                <h1>FL-Toussaint</h1>
                <h2>Développeur Web</h2>
              </div>
          </div>
          </Link>
          <nav>
            {link}
          </nav>
        </header>
    );
}

export default Header;
