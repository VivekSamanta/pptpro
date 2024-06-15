// Preloader.js
import React, { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

const Preloader = ({ onClose }) => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const animText = document.querySelectorAll(".anim-text");

    setTimeout(() => {
      animText.forEach((element) => {
        const splitto = new SplitType(element, {
          types: "lines, chars",
          className: "char",
        });
        const chars = element.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.9,
            stagger: 0.03,
            ease: "power2.out",
          }
        );
      });

      gsap.to(preloader, { opacity: 0, duration: 0.5, onComplete: onClose });
    }, 1000);
  }, [onClose]);

  return (
    <div id="preloader">
      <div className="preloader-close" onClick={onClose}>X</div>
      <div className="sk-three-bounce">
        <div className="sk-child sk-bounce1"></div>
        <div className="sk-child sk-bounce2"></div>
        <div className="sk-child sk-bounce3"></div>
      </div>
    </div>
  );
};

export default Preloader;
