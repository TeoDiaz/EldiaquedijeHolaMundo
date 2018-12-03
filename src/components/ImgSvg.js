import React from "react";
import world from "../img/world.jpg";
class Img extends React.Component {

  render() {


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
