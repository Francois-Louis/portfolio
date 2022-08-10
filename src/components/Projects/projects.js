import './projects.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {toggleBtn, toShow} from "../../actions/actions";
import {Link} from "react-router-dom";

const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleBtn('projects'));
  },);

  const projects = useSelector((state) => (state.Reducer.Projects))

  return (
    <div className="projects">
      {projects.slice(0).reverse().map((project, index) => (
        <div className="projects__item" key={index}>
          <Link to={`/projets/${project.slug}`}><h3 data-id={project.id}>{project.name}</h3></Link>
          <Link to={`/projets/${project.slug}`}><img src={`http://localhost:8080/assets/img/${project.thumbnail}`} alt={project.name} data-id={project.id}/></Link>
        </div>
      ))}
    </div>
  );
}

export default Projects;
