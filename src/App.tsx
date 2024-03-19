import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import {
  ReactPictureAnnotation,
  defaultShapeStyle,
} from "react-picture-annotation";
import Loadpicture from "./component/Loadpicture";

import { myImage1, myImage2, myImage3 } from "./img/index";
import ColorSelect from "./component/ColorSelect";
import "./App.css";
import { Button } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { generateRandomId } from "./component/RandomID";
import { IAnnotation } from "react-picture-annotation/dist/types/src/Annotation";
interface ImageData {
  id: string;
  src: string;
  annotations: IAnnotation[];
}

const App: React.FC = () => {
  //----------------------------------------
  const [color, setColor] = useState("#000000");
  const getColor = (data: string) => setColor(data);
  //-------------------------------------------------------------------
  const initialImages: ImageData[] = [
    {
      id: generateRandomId(),
      src: myImage1,
      annotations: [],
    },
    {
      id: generateRandomId(),
      src: myImage2,
      annotations: [],
    },
    {
      id: generateRandomId(),
      src: myImage3,
      annotations: [],
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<ImageData[]>(initialImages);
  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  const handleAnnotationChange = (imageIndex: number, annotations: any[]) => {
    const updatedImages = [...images];
    updatedImages[imageIndex].annotations = annotations;
    setImages(updatedImages);
    // setAnnotation(images)
    console.log(images);
  };

  // const [annotation, setAnnotation] = useState()

  return (
    <div className="section">
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          width: "300px",
          height: "100%",
          backgroundColor: "#B9B9B9",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "30px",
            backgroundColor: "#54606E",
            textAlign: "center",
            color: "white",
            fontSize: "20px",
          }}
        >
          List Color
        </div>
        <ColorSelect getColor={getColor} />
      </div>

      <div className="picture">
        <Loadpicture
          key={images[currentImageIndex].src}
          picture={images[currentImageIndex].src}
          color={color}
          onAnnotationChange={(annotations) =>
            handleAnnotationChange(currentImageIndex, annotations)
          }
          // annotation={images.annotations[0]}
          loadData={images[currentImageIndex].annotations}
        />
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          height: "50px",
          backgroundColor: "#B9B9B9",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          type="primary"
          shape="round"
          icon={<CaretLeftOutlined />}
          size="large"
          style={{ margin: "auto 0", padding: "0 30px" }}
          onClick={handlePrevious}
          disabled={currentImageIndex === 0}
        />
        <Button
          type="primary"
          shape="round"
          icon={<CaretRightOutlined />}
          size="large"
          style={{ margin: "auto 0", padding: "0 30px" }}
          onClick={handleNext}
          disabled={currentImageIndex === images.length - 1}
        />
      </div>
    </div>
  );
};

export default App;
