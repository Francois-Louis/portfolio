import './gallery.scss';
import {gsap} from "gsap";
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleBtn} from "../../actions/actions";
import Transition from "../Transition/transition";
import Carrousel from "./Carrousel/carrousel";

const Gallery = (toShow) => {
  const dispatch = useDispatch();
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#511730",scale: 1.2 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#DD625B",scale: 1 });
  };
  const id = toShow.toShow
  const projects = useSelector((state) => (state.Reducer.Projects))
  const show = projects[id]

  const motionGallery = gsap.timeline();
  const link = useRef(null);
  const title= useRef(null);
  const description = useRef(null);

  useEffect(() => {
    dispatch(toggleBtn('back'));
    motionGallery.from(title.current, {
      duration: .6,
      y: -100,
      opacity: 0
    },);
    motionGallery.from(description.current, {
      duration: .5,
      y: 100,
      opacity: 0
    },);

    return () => {
      motionGallery.kill();
    };
  },);

  return (
    <>
      <Transition timeline={motionGallery}/>
      <div className="show">
        <div className="show__title" ref={title}>
          <h3>{show.name}</h3>
          <p>{show.date}</p>
          <p>{show.technos}</p>
        </div>
        <Carrousel project={show}/>
        <div className="show__infos" ref={description}>
          <p>{show.description}</p>
          <p id="visitLink" ref={link} onMouseEnter={onEnter} onMouseLeave={onLeave}><a href={show.link}>Visiter</a></p>
        </div>
      </div>
    </>
  );
}

export default Gallery;
