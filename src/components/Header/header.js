import './header.scss';
import logo from '../../assets/img/logo.png';
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import gsap from "gsap";

const Header = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#FCAA26",scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#f1f2f2",scale: 1 });
  };
  const btn = useSelector((state) => (state.Reducer.Btn));
  let link

  switch (btn) {
    case 'projects':
      link = <NavLink onMouseEnter={onEnter} onMouseLeave={onLeave} to="/profil">Profil</NavLink>
      break;
    case 'profile':
      link = <NavLink onMouseEnter={onEnter} onMouseLeave={onLeave} to="/projets">Projets</NavLink>
      break;
      case 'back':
        link = <NavLink onMouseEnter={onEnter} onMouseLeave={onLeave} to="/projets">Retour</NavLink>
        break;
  }

    return (
        <header id="header">
          <Link to="/projets">
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
