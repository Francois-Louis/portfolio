import './profile.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {toggleBtn} from "../../actions/actions";
import Author from "./Author/author";
import Skills from "./Skills/skills";
import Xp from "./XP/xp";
import Modal from "../Modal/modal";
import Transition from "../Transition/transition";
import gsap from "gsap";

const Profile = () => {
  const motion = gsap.timeline();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleBtn('profile'));
  },);
  

  return (
    <>
      <Transition timeline={motion}/>
      <div className="profile">
        <Modal />
        <Author />
        <div className="profile__infos">
          <Skills />
          <Xp />
        </div>
      </div>
    </>

  );
}

export default Profile;
