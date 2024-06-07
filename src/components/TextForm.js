import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = () => {
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("handleOnChange was clicked");
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        const toggle = document.getElementById('toggle');
        
        msg.onend = () => {
            toggle.innerHTML = "Speak";
        };
    
        if (toggle.textContent === "Speak") {
            window.speechSynthesis.speak(msg);
            toggle.innerHTML = "Stop";
        } else {
            window.speechSynthesis.cancel();
            toggle.innerHTML = "Speak";
        }
    };
    
    const countWords = (text) => {
        return text.split(/\s+/).filter(word => word.length > 0).length;
    }

    return (
        <>
            <div className="mb-3 container">
                <h1>{props.header}</h1>
                <textarea className="form-control mt-3" value={text} onChange={handleOnChange} placeholder='Enter Text here' id="myBox" rows="8"></textarea>
                <div className='d-flex'>
                    <button className="btn btn-primary mt-4" onClick={handleUpClick} >Convert to upper Case</button>
                    <button className="btn btn-success mt-4 mx-2" onClick={handleLoClick} >Convert to lower Case</button>
                    <button onClick={speak} className="btn btn-warning mt-4 mx-2 ms-auto" id="toggle">Speak</button>
                    <button className="btn btn-warning mt-4 mx-2" onClick={handleClear} >Clear Text</button>
                </div>
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