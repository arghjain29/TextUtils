import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("handleOnChange was clicked");
        setText(event.target.value);
    }
    return (
        <>
            <div className="mb-3">
                <h1>{props.header}</h1>
                <textarea className="form-control mt-3" value={text} onChange={handleOnChange} placeholder='Enter Text here' id="myBox" rows="8"></textarea>
                <button className="btn btn-primary mt-4" onClick={handleUpClick} >Convert to upper Case</button>
            </div>
        </>
    )
}
