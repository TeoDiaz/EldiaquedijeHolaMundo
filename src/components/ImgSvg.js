import React from "react";
import world from "../img/world.jpg";
let scroll
class Img extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll",function(){
      scroll()
    })
  }

  render() {
    scroll = function() {
      let curve = document.getElementById("curve");
      let last_known_scroll_position = 0;
      let defaultCurveValue = 350;
      let curveRate = 2;
      let ticking = false;
      let curveValue;

      function scrollEvent(scrollPos) {
        if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
          curveValue = defaultCurveValue - parseFloat(scrollPos / curveRate);
          curve.setAttribute(
            "d",
            "M 800 300 Q 400 " + curveValue + " 0 300 L 0 0 L 800 0 L 800 300 Z"
          );
        }
      }

      window.addEventListener("scroll", function(e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
          window.requestAnimationFrame(function() {
            scrollEvent(last_known_scroll_position);
            ticking = false;
          });
        }

        ticking = true;
      });
    };

    

    return (
      <div>
        <div className="background">
          <div className="svg-container">
            <svg viewBox="0 0 800 400" className="svg">
              <defs>
                <pattern
                  id="img1"
                  patternUnits="userSpaceOnUse"
                  width="900"
                  height="600"
                >
                  <image
                    xlinkHref={world}
                    x="0"
                    y="-100"
                    width="800"
                    height="500"
                  />
                </pattern>
              </defs>
              <path
                id="curve"
                fill="url(#img1)"
                d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Img;
