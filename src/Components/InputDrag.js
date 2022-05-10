import React from "react";
import { useDrag } from "react-dnd";

function InputDrag({ id, type, placeholder, value, handleSubmit }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "input",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <input
        ref={drag}
        type={type}
        placeholder={placeholder}
        value={value}
        onClick={handleSubmit}
      />
    </>
  );
}

export default InputDrag;
