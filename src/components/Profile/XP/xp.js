import './xp.scss';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Xp = () => {
  const xps = useSelector((state) => (state.Reducer.Xp))

  return (
    <div className="xp">
      <h3>Expériences</h3>
      {xps.slice(0).reverse().map((xp, index) => (
        <div className="xp__item" key={index}>
          <h4>{xp.title}</h4>
          <h5>{xp.type} - <a href={xp.link}>{xp.organization}</a></h5>
          <p>{xp.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Xp;
