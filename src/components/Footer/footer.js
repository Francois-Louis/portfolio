import './footer.scss';
import gsap from "gsap";

const Footer = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#511730",scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#DD625B",scale: 1 });
  };

    return (
        <footer id="footer">
          <ul>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave}><a href="mailto://fl.toussaint@protonmail.com" >email</a></li>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave}><a href="https://github.com/Francois-Louis">github</a></li>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave}><a href="https://www.linkedin.com/in/françois-louis-t">linkedin</a></li>
          </ul>
        </footer>
    );
}

export default Footer;
