import React, {useRef, useEffect} from 'react';
import './transition.scss';
import { ExpoScaleEase } from 'gsap/EasePack';
function Transition({timeline}) {
  const trans1 = useRef(null);

  useEffect(() => {
    timeline.to(trans1.current, {
      duration: 0.8,
      width: "100%",
      xPercent: 0,
      ease: "expo.inOut",
    });
    timeline.to(trans1.current, {
      duration: 0.6,
      width: "100%",
      xPercent: 100,
      ease: "expo.inOut",
      delay: 0.2,
    });
    timeline.set(trans1.current, { xPercent: -100 });
  })
  return (
    <div className="load">
      <div className="transition-effect1" ref={trans1}></div>
    </div>
  )
}

export default Transition
