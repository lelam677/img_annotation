import React, { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  ReactPictureAnnotation,
  defaultShapeStyle,
} from "react-picture-annotation";
import CustomInputElement from "./CustomInputElementProps";

interface LoadpictureProps {
  picture: string;
  color: string;
}

interface originalObject {
  comment: string;
  id: string;
  mark: {
    x: number;
    y: number;
    width: number;
    height: number;
    type: string;
  };
}

const Loadpicture = ({ picture, color }: LoadpictureProps) => {
  const [size, setSize] = useState({
    width: 799,
    height: 499,
  });

  useLayoutEffect(() => {
    // const handleInitialResize = () => {
    //   setPageSize({ width: window.innerWidth, height: window.innerHeight });
    //   window.removeEventListener("resize", handleInitialResize);
    //   console.log(window.innerWidth, window.innerHeight);
    // };

    // window.addEventListener("resize", handleInitialResize);
    // return () => window.removeEventListener("resize", handleInitialResize);
    //giá trị ban đầu của state là canvat
    setSize({ width: 800, height: 500 });
  }, []);

  const onSelect = (selectedId: any) => console.log(selectedId);
  const onChange = (data: any) => {
    console.log(data);
  };

  const [valueLabel, setvalueLabel] = useState<string[]>(["input"]);

  const handleAddOption = (newOption: string) => {
    setvalueLabel([...valueLabel, newOption]);
  };

  return (
    <div style={{ display: "inline" }}>
      <ReactPictureAnnotation
        image={picture}
        onSelect={onSelect}
        onChange={onChange}
        width={size.width}
        height={size.height}
        annotationStyle={{
          ...defaultShapeStyle,
          shapeStrokeStyle: color,
          transformerBackground: "black",
        }}
        scrollSpeed={0}
        defaultAnnotationSize={[20, 20]}
        inputElement={(value, onChange, onDelete) => (
          <CustomInputElement
            value={value}
            onChange={onChange}
            onDelete={onDelete}
            valueLabel={valueLabel}
            handleAddOption={handleAddOption}
          />
        )}
      />
    </div>
  );
};

Loadpicture.propTypes = {};

export default Loadpicture;
