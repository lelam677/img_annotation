import React, { useEffect, useState } from "react";
import { Button, Input, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface CustomInputElementProps {
  value: string;
  onChange: (value: string) => void;
  onDelete: () => void;
  valueLabel: string[];
  handleAddOption: (value: string) => void;
}

const CustomInputElement: React.FC<CustomInputElementProps> = ({
  value,
  onChange,
  onDelete,
  valueLabel,
  handleAddOption,
}) => {
  const [customValue, setCustomValue] = useState<string>("");

  const handleSelectChange = (selectedValue: string) => {
    onChange(selectedValue);
  };
  const handleAddCustomValue = () => {
    if (customValue) {
      handleAddOption(customValue);
      onChange(customValue);
      setCustomValue("");
      //   console.log(valueLabel);
    }
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <>
      <Select
        value={value}
        onChange={handleSelectChange}
        style={{ width: 100 }}
      >
        {valueLabel.map((value, index) => (
          <Select.Option key={index} value={value}>
            {value}
          </Select.Option>
        ))}
      </Select>

      <Input
        style={{ width: "200px", marginLeft: "10px" }}
        value={customValue}
        onChange={(e) => {
          setCustomValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      <Button
        type="primary"
        onClick={handleAddCustomValue}
        style={{ marginLeft: "10px" }}
      >
        Add
      </Button>

      <Button
        type="default"
        onClick={handleDelete}
        style={{ marginLeft: "10px" }}
      >
        <DeleteOutlined />
      </Button>
    </>
  );
};

export default CustomInputElement;
