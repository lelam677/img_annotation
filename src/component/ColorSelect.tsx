import React, { useState } from "react";

interface ColorCardProps {
  color: string;
  onClick: (color: string) => void;
}

const ColorCard: React.FC<ColorCardProps> = ({ color, onClick }) => {
  return (
    <div
      onClick={() => onClick(color)}
      style={{
        backgroundColor: color,
        width: "100px",
        height: "30px",
        margin: "2px",
        cursor: "pointer",
      }}
    >
  
    </div>
  );
};

interface Propcolor {
  getColor: (data: string) => void;
}
const ColorSelect: React.FC<Propcolor> = (prop) => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleColorClick = (color: string) => {
    prop.getColor(color);
    // console.log(color);
  };

  const colors: string[] = [
    "#32a852",
    "#324aa8",
    "#a032a8",
    "#a83244",
    "#a84632",
  ];

  return (
    <div style={{ width: "190px" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {colors.map((color, index) => (
          <ColorCard key={index} color={color} onClick={handleColorClick} />
        ))}
      </div>
    </div>
  );
};

export default ColorSelect;
