import './modal.scss';
import {useDispatch, useSelector} from "react-redux";
import {toggleModal} from "../../actions/actions";
import {useEffect, useRef} from "react";

const Modal = () => {
  const modalEl = useRef();
  const modal= useSelector((state) => (state.Reducer.Modal));
  const dispatch = useDispatch();
  function handleModal() {
    dispatch(toggleModal());
  }

  useEffect(() => {
    if (modal === true) {
      modalEl.current.classList.add('active');
    } else {
      modalEl.current.classList.remove('active');
    }
  });

  return (
    <div className="modal-container" ref={modalEl}>
      <div className="overlay modal-trigger" onClick={handleModal}></div>
      <div className="modal" role="dialog" aria-labelledby="hireMe">
        <button type="button" className="close-modal modal-trigger" aria-label="close modal" onClick={handleModal}>X</button>
        <div className="modal-content">
          <button type="button" className="" aria-label="contact me"><a href="mailto://fl-toussaint@protonmail.com">Me contacter</a></button>
          <button type="button" className="" aria-label="download my cv"><a href="http://localhost:8080/assets/dl/CV-FL-TOUSSAINT.pdf" download>Télécharger mon CV</a></button>
        </div>
      </div>
    </div>
  )
}

export default Modal;
