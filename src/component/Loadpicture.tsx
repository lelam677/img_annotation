import React, { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  ReactPictureAnnotation,
  defaultShapeStyle,
} from "react-picture-annotation";
import CustomInputElement from "./CustomInputElementProps";
import { IAnnotation } from "react-picture-annotation/dist/types/src/Annotation";

interface LoadpictureProps {
  picture: string;
  color: string;
  onAnnotationChange: (annotations: any[]) => void;
  loadData: IAnnotation[];
  // annotation:any
}

// interface originalObject {
//   height: number;
//   type: string;
//   width: number;
//   x: number;
//   y: number;
// }

// interface anotationProps {
//   id: string;
//   mask: originalObject;
// }

interface ScreenSize {
  width: number;
  height: number;
}
// interface LogData {
//   img: string;
//   data: any;
// }





const Loadpicture = ({
  picture,
  color,
  onAnnotationChange,
  loadData
}: LoadpictureProps) => {
  // const [anotationState, setAnotationState] = useState<anotationProps>();
  // console.log(anotationState);


  const [size, setSize] = useState<ScreenSize>({
    width: window.innerWidth - 1,
    height: window.innerHeight - 1,
  });
  console.log(size.height, size.width);
  const handleResize = () => {
    setSize({
      width: window.innerWidth - 300,
      height: window.innerHeight - 50,
    });
  };
  useLayoutEffect(() => {
    handleResize();
    // setSize({ width: 800, height: 500 });
  }, []);
  const [annotations, setAnnotations] = useState<any[]>([]);
  const onSelect = (selectedId: any) => console.log(selectedId);
  const onChange = (data: any) => {
    setAnnotations(data);
    onAnnotationChange(data);
    // console.log(data);
  };

  const [valueLabel, setvalueLabel] = useState<string[]>(["input"]);

  const handleAddOption = (newOption: string) => {
    setvalueLabel([...valueLabel, newOption]);
  };

  // console.log("logdata", arrayData);

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
        annotationData={loadData}
      />
    </div>
  );
};

Loadpicture.propTypes = {};

export default Loadpicture;
