import './projects.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {toggleBtn, toShow} from "../../actions/actions";
import {Link} from "react-router-dom";
import Transition from "../Transition/transition";
import gsap from 'gsap';

const Projects = () => {
  const motion = gsap.timeline();
  const homeh = useRef(null);
  const homeimg = useRef(null);
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
    motion.from(homeh.current, {
      duration: .6,
      skewX: 10,
      x: -100,
      opacity: 0
    },"-=3.5")
    motion.from(homeimg.current, {
      duration: .5,
      y: -200,
      opacity: 0
    },"-=3")
  },);

  const projects = useSelector((state) => (state.Reducer.Projects))

  return (
    <>
      <Transition timeline={motion}/>
      <div className="projects">
        {projects.slice(0).reverse().map((project, index) => (
          <div  onMouseEnter={onEnter} onMouseLeave={onLeave} className="projects__item" key={index}>
            <Link to={`/projets/${project.slug}`}><h3 ref={homeh} data-id={project.id}>{project.name}</h3></Link>
            <Link to={`/projets/${project.slug}`}><img ref={homeimg} src={`http://localhost:8080/assets/img/${project.thumbnail}`} alt={project.name} data-id={project.id}/></Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
