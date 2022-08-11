import React, {useRef, useEffect} from 'react';
import './transition.scss';
import { SlowMo } from 'gsap/EasePack';
function Transition({timeline}) {
  const trans1 = useRef(null);

  useEffect(() => {
    timeline.to(trans1.current, {
      duration: 0.5,
      yPercent: -100,
      ease: SlowMo.config(0.1, 0.4, false),
    },);

  })
  return (
    <div>
      <div className="transition-effect1" ref={trans1}></div>

    </div>
  )
}

export default Transition
