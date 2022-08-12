import './header.scss';
import logo from '../../assets/img/logo.png';
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import gsap from "gsap";
import {useEffect, useRef} from "react";

const Header = () => {
  // motion for hover effect
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#511730",scale: 1.2 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#DD625B",scale: 1 });
  };

  // change nav button as page changes
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

  const motion = gsap.timeline();
  const brand = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    motion.from(brand.current, {
      duration: .6,
      skewX: 10,
      x: -100,
      opacity: 0
    },"1.2")
    motion.from(nav.current, {
      duration: .5,
      x: +100,
      opacity: 0
    },"1.6")
  },);


    return (
        <header id="header">
          <Link to="/projets">
          <div className="brand" ref={brand}>
            <img src={logo} alt="logo du développeur web" />
              <div className="brand__name">
                <h1>FL-Toussaint</h1>
                <h2>Développeur Web</h2>
              </div>
          </div>
          </Link>
          <nav ref={nav}>
            {link}
          </nav>
        </header>
    );
}

export default Header;
