import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("uppercase was clicked" + text);
    let nextText = text.toUpperCase();
    setText(nextText);
    props.showAlert("Converted into UpperCase", "success");
  };
  const handlelowerClick = () => {
    let nextTextLower = text.toLowerCase();
    setText(nextTextLower);
    props.showAlert("Converted into LowerCase", "success");
  };

  const handleCopy = () => {
    var newTextCopy = document.getElementById("textBox");
    newTextCopy.select();
    navigator.clipboard.writeText(newTextCopy.value);
    props.showAlert("Text Copy", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are removed", "success");
  };

  const handleOnChange = (event) => {
    //console.log("handle on change");
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>

        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelowerClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>{0.008 * text.split(" ").length} Mintues Read.</h2>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
