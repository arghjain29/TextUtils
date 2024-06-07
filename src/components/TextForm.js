import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("handleOnChange was clicked");
        setText(event.target.value);
    }
    const countWords = (text) => {
        return text.split(/\s+/).filter(word => word.length > 0).length;
    }

    return (
        <>
            <div className="mb-3 container">
                <h1>{props.header}</h1>
                <textarea className="form-control mt-3" value={text} onChange={handleOnChange} placeholder='Enter Text here' id="myBox" rows="8"></textarea>
                <button className="btn btn-primary mt-4" onClick={handleUpClick} >Convert to upper Case</button>
                <button className="btn btn-success mt-4 mx-2" onClick={handleLoClick} >Convert to lower Case</button>
            </div>
            <div className="container mt-3">
                <h1>Your text Summary</h1>
                <p>{countWords(text)} words and {text.length} characters</p>
                <p>{0.008 * countWords(text)} Minutes read</p>
                <br />
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
