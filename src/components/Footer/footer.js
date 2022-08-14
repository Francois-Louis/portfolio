import './footer.scss';
import gsap from "gsap";
import { useEffect, useRef} from "react";
import {useSelector} from "react-redux";

function useArrayRef() {
  const refs = useRef([]);
  refs.current = [];
  return [refs, (ref) => ref && refs.current.push(ref)];
}

const Footer = () => {
  // force rerendering
  const btn = useSelector((state) => (state.Reducer.Btn));

  const [refs, setRef] = useArrayRef();

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#511730",scale: 1.2 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#DD625B",scale: 1 });
  };
  const motionFooter = gsap.timeline();

  useEffect(() => {
    motionFooter.from(refs.current, {
      duration: .5,
      x: +100,
      opacity: 0,
      stagger: 0.2,
    },"1.6")
    return () => {
      motionFooter.kill();
    }
  },);

    return (
        <footer id="footer">
          <ul>
            <li ref={setRef} onMouseEnter={onEnter} onMouseLeave={onLeave}><a href="mailto://fl.toussaint@protonmail.com" >email</a></li>
            <li ref={setRef} onMouseEnter={onEnter} onMouseLeave={onLeave}><a href="https://github.com/Francois-Louis">github</a></li>
            <li ref={setRef} onMouseEnter={onEnter} onMouseLeave={onLeave}><a href="https://www.linkedin.com/in/françois-louis-t">linkedin</a></li>
          </ul>

        </footer>
    );
}

export default Footer;
