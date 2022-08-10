import './profile.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {toggleBtn} from "../../actions/actions";
import Author from "./Author/author";
import Skills from "./Skills/skills";
import Xp from "./XP/xp";
import Modal from "../Modal/modal";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleBtn('profile'));
  },);
  

  return (
    <div className="profile">
      <Modal />
      <Author />
      <Skills />
      <Xp />
    </div>
  );
}

export default Profile;
