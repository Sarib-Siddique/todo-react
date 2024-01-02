import React, { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [list, setList] = useState([]);
  let [inputText, setInputText] = useState("");

  function updateText(e) {
    setInputText(e.target.value);
  }

  function addItem() {
    if (inputText !== "") {
      var copyList = [...list];
      copyList.push(inputText);
      setList(copyList);
      let getInp = document.getElementById("getInp");
      getInp.value = "";
      console.log(getInp.value);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Input Fields Are Empty",
      });
    }
  }

  function indexFunction(e) {
    var copyList = [...list];
    copyList.splice(e, 1);
    setList(copyList);
  }

  function updateBtn(e) {
    console.log(e);
    let getInp = document.getElementById("getInp");
    getInp.value = e;
    console.log(setList.value);
  }

  function deleteAll() {
    setList([]);
  }

  return (
    <div className="">
      <h1>Todo App</h1>

      <input type="text" onChange={updateText} id="getInp" />
      <button onClick={addItem}>Add Item</button>
      <button onClick={deleteAll}>Delete All</button>

      <ul>
        {list.map((value, index) => {
          return (
            <li key={index}>
              {value} <button onClick={updateBtn}>Update</button>
              <button onClick={() => indexFunction(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
