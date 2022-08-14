import './projects.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {toggleBtn, toShow} from "../../actions/actions";
import {Link} from "react-router-dom";
import Transition from "../Transition/transition";
import gsap from 'gsap';

function useArrayRef() {
  const refs = useRef([]);
  refs.current = [];
  return [refs, (ref) => ref && refs.current.push(ref)];
}

const Projects = () => {
  const [refs, setRef] = useArrayRef();

  const motionProjects = gsap.timeline();
  const dispatch = useDispatch();

  // motion for hover effect
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#511730",scale: 1.2 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#DD625B",scale: 1 });
  };

  useEffect(() => {
    dispatch(toggleBtn('projects'));
    motionProjects.from(refs.current, {
      duration: 1.5,
      opacity: 0,
      scale: 0,
      stagger: 0.2,
      ease: "back.out(1)"
    },"2");
    return () => {
      motionProjects.kill();
    }
  },);

  const projects = useSelector((state) => (state.Reducer.Projects))

  return (
    <>
      <Transition timeline={motionProjects}/>
      <div className="projects">
        {projects.slice(0).reverse().map((project, index) => (
          <div  onMouseEnter={onEnter} onMouseLeave={onLeave} className="projects__item" key={index}>
            <Link to={`/projets/${project.slug}`}><h3 ref={setRef} data-id={project.id}>{project.name}</h3></Link>
            <Link to={`/projets/${project.slug}`}><img ref={setRef} src={`http://localhost:8080/assets/img/${project.thumbnail}`} alt={project.name} data-id={project.id}/></Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
