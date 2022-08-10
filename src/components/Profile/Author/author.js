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
      <p>François-Louis Toussaint, reconverti dans le développement web, au terme d'une carrière d'une douzaine d'année en coutellerie. Je sévis dorénavant en tant qu'indépendant, ma soif de connaissances me pousse néanmoins à vouloir poursuivre mes études dans ce domaine. </p>
      <button type="button" onClick={handleModal}>Me recruter</button>
    </div>
  );
}

export default Author;
