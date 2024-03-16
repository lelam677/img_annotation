import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import {
  ReactPictureAnnotation,
  defaultShapeStyle,
} from "react-picture-annotation";
import Loadpicture from "./component/Loadpicture";

import { myImage1, myImage2, myImage3 } from "./img/index";
import ColorSelect from "./component/ColorSelect";
// interface Label {
//   id: string;
//   x: number;
//   y: number;
//   width: number;
//   height: number;
//   color: string;
//   comment?: string;
// }

const App: React.FC = () => {
  const [color, setColor] = useState("#000000");

  const getColor = (data: string) => setColor(data);

  return (
    <div className="section">
      <div className="list-color">
        <ColorSelect getColor={getColor} />
      </div>
      <div className="picture">
        <Loadpicture picture={myImage2} color={color} />
      </div>
    </div>
  );
};

export default App;
