import React from 'react'

export default function About(props) {
    return (
        <>
            <div className='container p-5 mt-3' >
                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>About TextUtils</h1>
                <div className="accordion mt-3" id="accordionExample">

                    <div className="accordion-item"  style={{ color: props.mode === 'light' ? 'black' : 'white',backgroundColor: props.mode==='light'? 'white': 'black'}}>
                        <h2 className="accordion-header">
                            <button style={{backgroundColor: props.mode==='light'? 'white': 'black'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong style={{ color: props.mode === 'light' ? 'black' : 'white' }}> Accordion Item #1</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{ color: props.mode === 'light' ? 'black' : 'white',backgroundColor: props.mode==='light'? 'white': 'black'}}>
                        <h2 className="accordion-header" >
                            <button style={{backgroundColor: props.mode==='light'? 'white': 'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong style={{ color: props.mode === 'light' ? 'black' : 'white' }}> Accordion Item #2</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{ color: props.mode === 'light' ? 'black' : 'white',backgroundColor: props.mode==='light'? 'white': 'black'}}>
                        <h2 className="accordion-header" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                            <button style={{backgroundColor: props.mode==='light'? 'white': 'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong style={{ color: props.mode === 'light' ? 'black' : 'white' }}> Accordion Item #3</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
