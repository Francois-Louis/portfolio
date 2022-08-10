import './author.scss';
import {useDispatch} from "react-redux";
import {toggleModal} from "../../../actions/actions";
import photo from "../../../assets/img/fl-toussaint.JPG";

const Author = () => {
  const dispatch = useDispatch();

  function handleModal() {
    dispatch(toggleModal());
  }

  return (
    <div className="author">
      <img src={photo} alt="Portrait de François-Louis Toussaint"/>
      <p>Lorem Ipsum</p>
      <button type="button" onClick={handleModal}>Me recruter</button>
    </div>
  );
}

export default Author;
