import './skills.scss';
import { useEffect, useRef} from "react";
import gsap from "gsap";

function useArrayRef() {
  const refs = useRef([]);
  refs.current = [];
  return [refs, (ref) => ref && refs.current.push(ref)];
}

const Skills = () => {
  const [refs, setRef] = useArrayRef();
  const title = useRef(null);

  const motionSkills = gsap.timeline();

  useEffect(() => {
    motionSkills.from(title.current, {
      duration: .6,
      opacity: 0,
      ease: "power4.in"
    },"1.2");
    motionSkills.from(refs.current, {
      duration: .5,
      y: +100,
      opacity: 0,
      stagger: 0.2,
    },"1.4")
    return () => {
      motionSkills.kill();
    }
  },);

  return (
    <div className="skills" ref={title}>
      <h3>Compétences</h3>
      <h4 className="firstChild" ref={setRef}>Frontend</h4>
      <ul ref={setRef}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Sass</li>
        <li>Greensock</li>
      </ul>
      <h4 ref={setRef}>Backend</h4>
      <ul ref={setRef}>
        <li>PHP</li>
        <li>Symfony</li>
      </ul>
      <h4 ref={setRef}>CMS</h4>
      <ul ref={setRef}>
        <li>Wordpress</li>
      </ul>
      <h4 ref={setRef}>Environnement</h4>
      <ul ref={setRef}>
        <li>Git</li>
        <li>Visual Studio Code</li>
        <li>IntelliJ</li>
        <li>Docker</li>
      </ul>
    </div>
  );
}

export default Skills;
