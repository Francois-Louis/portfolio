import './author.scss';
import {useDispatch} from "react-redux";
import {toggleBtn, toggleModal} from "../../../actions/actions";
import photo from "../../../assets/img/fl-toussaint.JPG";
import gsap from "gsap";
import {useEffect, useRef} from "react";

const Author = () => {
  const dispatch = useDispatch();
  const onEnterBtn = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };

  const onLeaveBtn = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  useEffect(() => {
    dispatch(toggleBtn('projects'));
  },);

  function handleModal() {
    dispatch(toggleModal());
  }

  return (
    <div className="author">
      <img src={photo} alt="Portrait de François-Louis Toussaint"/>
      <p>François-Louis Toussaint, reconverti dans le développement web, au terme d'une carrière d'une douzaine d'année en coutellerie. Je sévis dorénavant en tant qu'indépendant, ma soif de connaissances me pousse néanmoins à vouloir poursuivre mes études dans ce domaine. </p>
      <button type="button" onClick={handleModal} onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn}>Me recruter</button>
    </div>
  );
}

export default Author;
