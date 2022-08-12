import './footer.scss';
import gsap from "gsap";
import { useEffect, useRef} from "react";

const Footer = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#511730",scale: 1.2 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#DD625B",scale: 1 });
  };
  const motion = gsap.timeline();
  const mail = useRef(null);
  const git = useRef(null);
  const lkdn = useRef(null);

  useEffect(() => {
    motion.from(mail.current, {
      duration: .5,
      x: +100,
      opacity: 0
    },"1.6")
    motion.from(git.current, {
      duration: .5,
      x: +100,
      opacity: 0
    },"1.7")
    motion.from(lkdn.current, {
      duration: .5,
      x: +100,
      opacity: 0
    },"1.8")
  },);

    return (
        <footer id="footer">
          <ul>
            <li ref={mail} onMouseEnter={onEnter} onMouseLeave={onLeave}><a href="mailto://fl.toussaint@protonmail.com" >email</a></li>
            <li ref={git} onMouseEnter={onEnter} onMouseLeave={onLeave}><a href="https://github.com/Francois-Louis">github</a></li>
            <li ref={lkdn} onMouseEnter={onEnter} onMouseLeave={onLeave}><a href="https://www.linkedin.com/in/françois-louis-t">linkedin</a></li>
          </ul>
        </footer>
    );
}

export default Footer;
