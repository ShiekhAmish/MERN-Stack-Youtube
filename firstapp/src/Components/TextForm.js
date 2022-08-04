import React,{useState} from 'react'

export default function TextForm(props) {

    const HandleUpClick =()=>
        {
            console.log("Upper Case Click");
            let newtext = text.toUpperCase();
            setText(newtext);
        }
        const HandleExtraSpaces =()=>
        {
            
            let newText = text.split(/[ ]+/);
		setText(newText.join(" "))
        }
        const HandleLowClick =()=>
        {
            console.log("Lower Case Click");
            let newtext = text.toLowerCase();
            setText(newtext);
        }
        const HandleCopy =()=>
        {
            
            var text = document.getElementById("MyText");
		text.select();
            navigator.clipboard.writeText(text.value);
        }
        const HandleClearClick =()=>
        {
            
            let newtext = '';
            setText(newtext);
        }
        const HandleOnChange =()=>
        {
            console.log("On Change Click");
            setText(event.target.value);
        }
    const [text, setText] = useState("");

  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
   
   <div className="container">
   <div className="mb-3">
     <label htmlfor="MyText" className="form-label">{props.heading}</label>
     <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white' }} value={text} onChange={HandleOnChange} id="MyText" rows="10"></textarea>
   </div>
   <button className="btn btn-primary mx-1" onClick={HandleUpClick}>
       Convert Upper Case
   </button>

   <button className="btn btn-primary mx-1" onClick={HandleLowClick}>
       Convert Lower Case
   </button>
   <button className="btn btn-primary mx-1" onClick={HandleClearClick}>
       Clear
   </button>
   <button className="btn btn-primary mx-1" onClick={HandleCopy}>
       Copy
   </button>
   <button className="btn btn-primary mx-1" onClick={HandleExtraSpaces}>
       Set Spaces
   </button>
   </div>
       </div>
       <div className="container my-3" style={{color:props.mode==='light'?'red':'white'}}>
        <h2>Your Text Summary:</h2>
        <p>{text.split(" ").length} words and {text.length} charecters..</p>
        <p>{0.008 * text.split(" ").length} Minutes Read..</p>
        <h2>Preview:</h2>
        <p>{text.length>0? text:"Enter Some Text Here to Preview"}</p>
       </div>
    </>
  )
}
