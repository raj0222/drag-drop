import React, { useState } from "react";
import Inputdrag from "./InputDrag";
import { useDrop } from "react-dnd";
import "../App.css";
import Draggable from "react-draggable";
import Header from "./Header";

const InputList = [
  {
    id: 1,
    type: "text",
    placeholder: "enter text here ",
  },
  {
    id: 2,
    type: "number",
    placeholder: "enter your number ",
  },
  {
    id: 3,
    type: "button",
    placeholder: "clicked the button",
    className: "btn btn-danger",
  },
  {
    id: 4,
    type: "radio",
    placeholder: "your above 18+",
    className: "btn btn-danger",
  },
  {
    id: 5,
    type: "file",
  },
];

function DragDrop() {
  const [board, setBoard] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [data, setdata] = useState([]);

  const handleChange = (e) => {
    setFirstName(e.target.value);
    console.log("name-----", setFirstName);
  };

  const handleSubmit = () => {
    setdata((olditem) => {
      return [...olditem, firstName];
    });
    console.log("data----", data);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "input",
    drop: (item) => addInputToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addInputToBoard = (id) => {
    const InputList1 = InputList.filter((Inputdrag) => id === Inputdrag.id);
    setBoard((board) => [...board, InputList1[0]]);
    // setBoard(board);
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-start">
        <div className="row bg-info bg-gradient text-dark mt-4">
          {InputList.map((InputDrag) => {
            return (
              <div key={InputDrag.id}>
                <div className="mt-5 ">
                  {/* <Draggable> */}
                  <Inputdrag
                    type={InputDrag.type}
                    id={InputDrag.id}
                    placeholder={InputDrag.placeholder}
                    onChange={handleChange}
                  />
                  {/* </Draggable> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="Board col-md-8" ref={drop}>
          {board.map((InputDrag) => {
            return (
              <div key={InputDrag.id}>
                {/* <Draggable>
                  <div>
                    <input
                      type="text"
                      placeholder="enter ur name here"
                      onChange={handleChange}
                    />

                    <button
                      classname="btn btn-danger"
                      type="button"
                      value="submit"
                      onClick={handleSubmit}
                    >
                      click
                    </button>
                  </div>
                </Draggable> */}

                <Draggable>
                  <div>
                    <Inputdrag
                      type={InputDrag.type}
                      id={InputDrag.id}
                      placeholder={InputDrag.placeholder}
                      value={InputDrag.type}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-warning"
                      type="button"
                      value="submit"
                    >
                      move
                    </button>
                  </div>
                </Draggable>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DragDrop;
