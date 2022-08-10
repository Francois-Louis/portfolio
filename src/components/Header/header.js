import './header.scss';
import logo from '../../assets/img/logo.png';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {onProjects, toggleBtn} from "../../actions/actions";


const Header = () => {
  const projectBtn = useSelector((state) => (state.Reducer.ProjectBtn));
  const dispatch = useDispatch();

  function handleClickBtn() {
    dispatch(toggleBtn());
  }

  function handleClickHome() {
    dispatch(onProjects(true));
  }

    return (
        <header id="header">
          <Link to="/" onClick={handleClickHome}>
          <div className="brand">
            <img src={logo} alt="logo du développeur web" />
              <div className="brand__name">
                <h1>FL-Toussaint</h1>
                <h2>Développeur Web</h2>
              </div>
          </div>
          </Link>
          <nav>
            {projectBtn ? (<Link to="/profil" onClick={handleClickBtn}>Profil</Link>) : (<Link to="/projets" onClick={handleClickBtn}>Projets</Link>)}
          </nav>
        </header>
    );
}

export default Header;
