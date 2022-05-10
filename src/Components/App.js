import "../App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "../Components/DragDrop";
import Draggable from "react-draggable";

function App() {
  return (
    <>
      {/* <div className="mx-5">
        <Draggable>
          <div>
            <input
              type="submit"
              className="btn btn-success px-1"
              value="submit"
            />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <input
              type="submit"
              className="btn btn-danger px-1"
              value="submit"
            />
          </div>
        </Draggable> */}
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <DragDrop />
        </div>
      </DndProvider>
      {/* </div> */}
    </>
  );
}

export default App;
