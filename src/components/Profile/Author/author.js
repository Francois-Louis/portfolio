import './author.scss';
import {useDispatch, useSelector} from "react-redux";
import {toggleBtn, toggleModal} from "../../../actions/actions";
import photo from "../../../assets/img/fl-toussaint.JPG";
import gsap from "gsap";
import {useEffect, useRef} from "react";

const Author = () => {
  const dispatch = useDispatch();

  const onEnterBtn = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#320A28", scale: 1.2 });
  };
  const onLeaveBtn = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#511730", scale: 1 });
  };

  const motionAuthor = gsap.timeline();
  const author = useRef(null);
  const hireMe = useRef(null);

  useEffect(() => {
    dispatch(toggleBtn('projects'));
    motionAuthor.from(author.current, {
      duration: .6,
      opacity: 0,
      ease: "power4.in"
    },"1.2");
    motionAuthor.from(hireMe.current, {
      duration: 1.5,
      scale: 0,
      opacity: 0,
      ease: "elastic.out(1, 0.5)"
    }, "3.6");
    return () => {
      motionAuthor.kill();
    }
  },);

  function handleModal() {
    dispatch(toggleModal());
  }

  return (
    <div className="author" ref={author}>
        <img src={photo} alt="Portrait de François-Louis Toussaint"/>
        <p>François-Louis Toussaint, reconverti dans le développement web, au terme d'une carrière d'une douzaine d'année en coutellerie. Je sévis dorénavant en tant qu'indépendant, ma soif de connaissances me pousse néanmoins à vouloir poursuivre mes études dans ce domaine. </p>
      <button ref={hireMe} type="button" onClick={handleModal} onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn}>Me recruter</button>
    </div>
  );
}

export default Author;
