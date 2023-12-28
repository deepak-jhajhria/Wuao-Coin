import React from "react";
import backtotop from "../assets/images/back-arrow.png";

function BackToTop() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      document.getElementById("Top").style.display = "flex";
    } else {
      document.getElementById("Top").style.display = "none";
    }
  });

  function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button id="Top" className="cursor-pointer hidden z-40 fixed bottom-2 right-2" onClick={up}>
        <img className="w-[50px] h-[50px] hover:scale-105 duration-300 animate-bounce" src={backtotop} alt="back to top icon" />
      </button>
    </>
  );
}

export default BackToTop;