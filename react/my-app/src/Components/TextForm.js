import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("uppercase was clicked");
          let newText = text.toUpperCase();
           setText(newText);
  }
  
  const handleLoClick = () => {
    // console.log("uppercase was clicked");
          let newText = text.toLowerCase();
           setText(newText);
  }

  const handleClearClick = () => {
    // console.log("uppercase was clicked");
          let newText = '';
          setText(newText);
           
  }

  const handleOnChange = (event) => {
    // console.log("on Change");
      //  setText(Event.target.value);
         setText(event.target.value);
  }  

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  
  const [text, setText] = useState("enter text here");
  // text("Enter Text Here");


  return (
    <>
    <div className='container'>

        <h1>{props.header}</h1>
        <div className="mb-4">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Space</button>
        


    </div>


    <div className="container my-4">
      <h1>Your Text Summary</h1>
      <p> {text.split(" ").length} words and Character {text.length} </p>
      <p> {0.008 * text.split(" ").length} minutes read </p>

      <h3>Preview</h3>
      <p> {text}</p>
    </div>


    </>
  )
}

