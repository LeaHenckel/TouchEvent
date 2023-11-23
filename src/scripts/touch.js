export default (function () {
  if (!window.location.pathname.includes("index.html")) return; // guard clause

  const DIV = document.querySelector(".touchDiv");

  DIV.addEventListener("touchstart", touchHandler);
  DIV.addEventListener("touchend", touchHandler);

  let x;

  function touchHandler(event) {
    // console.log(event.changedTouches[0].clientX);
    if (event.type === "touchstart") {
      x = event.changedTouches[0].clientX;
    } else {
      // touchend
      let direction;
      if (x + 50 < event.changedTouches[0].clientX) {
        direction = "Right";
      } else if (x - 50 > event.changedTouches[0].clientX) {
        direction = "Left";
      }
      if (direction) {
        DIV.lastElementChild.addEventListener("animationend", function () {
          DIV.removeChild(DIV.lastElementChild);
        });
        DIV.lastElementChild.style.animation = `move${direction} 2s ease`;
        direction = null;
      }

      x = null;
    }
  }
})();

// nåede at se til 56 minutter inde i videoen
