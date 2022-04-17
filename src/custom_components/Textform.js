import React,{useState} from 'react'

export default function Textform(props) {
        const [text, setText] = useState("Please Write some text here");
        function handleonClick(){
            let newText = text.toUpperCase();
            setText(newText);
        }
        function handlelowerClick(){
            let newText = text.toLowerCase();
            setText(newText);
        }
        function handlefirstLetterClick(){
            let firstChar = text.split(" ");// Make0 Sure1 Great2
            var con = "";
            firstChar.forEach(function(value){
                var dest = value.charAt(0).toUpperCase();
                con += dest + value.slice(1).toLowerCase() + " ";
            });
            setText(con);

        }
       function handleonChange(event){
            setText(event.target.value);
        }
        function handleclear(){
            setText("");
        }
        return (
            <>
            <div className={`${props.content_color}`}>
                <h1>{props.innerh1}</h1>
        
                <textarea className="form-control my-3" value = {text} onChange = {handleonChange} placeholder="Leave a comment here" id="floatingTextarea" rows="8"></textarea>
                <button className = "btn btn-primary" onClick = {handleonClick} >Convert to Uppercase</button>
                <button className = "btn btn-primary mx-2" onClick = {handlelowerClick} >Convert to Lowercase</button>
                <button className = "btn btn-primary " onClick = {handlefirstLetterClick} >Convert Every First Letter to Uppercase</button>
                <button className = "btn btn-primary mx-2" onClick = {handleclear} >Clear Textarea</button>
            </div>
            <div className={`my-3 ${props.content_color}`} >
                <h2>Text Summary</h2>
                <p>{text.trim().split(" ").filter(function(e){return e!="";}).length} <b>Words</b> and {text.trim().length} <b>Characters</b></p>
                <p><b>{(0.008 * text.split(" ").length).toFixed(2)}</b> minutes takes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            
            </>
    )
}
