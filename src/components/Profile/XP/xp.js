import './xp.scss';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { useEffect, useRef} from "react";
import gsap from "gsap";

function useArrayRef() {
  const refs = useRef([]);
  refs.current = [];
  return [refs, (ref) => ref && refs.current.push(ref)];
}

const Xp = () => {
  const xps = useSelector((state) => (state.Reducer.Xp))

  const [refs, setRef] = useArrayRef();
  const title = useRef(null);

  const motionXp = gsap.timeline();

  useEffect(() => {
    motionXp.from(title.current, {
      duration: .6,
      opacity: 0,
      ease: "power4.in"
    },"1.2");
    motionXp.from(refs.current, {
      duration: .5,
      y: +100,
      opacity: 0,
      stagger: 0.2,
    },"1.4")
    return () => {
      motionXp.kill();
    }
  },);
  return (
    <div className="xp">
      <h3 ref={title}>Expériences</h3>
      {xps.slice(0).reverse().map((xp, index) => (
        <div ref={setRef} className="xp__item" key={index}>
          <h4>{xp.title}</h4>
          <h5>{xp.type} - <a href={xp.link}>{xp.organization}</a></h5>
          <p>{xp.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Xp;
