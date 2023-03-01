import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
let myStyle ={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#13466e':'white',
    border:"1px solid",
    borderColor:props.mode==='dark'?'white':'black'
}
    
    return (
        <div className="container py-3" style={myStyle}>
            {/* <button type="button" onClick={toggleStyle} className="btn btn-dark my-3">{btntext}</button> */}
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={{
                            color: props.mode === 'dark' ? 'white' : 'black',
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            // border: "1px solid",
                            // borderColor: props.mode === 'dark' ? 'white' : 'black'
                        }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <strong>Annalyze Your Text</strong> 
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{
                            color: props.mode === 'dark' ? 'white' : 'black',
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            // border: "1px solid",
                            // borderColor: props.mode === 'dark' ? 'white' : 'black'
                        }}>
                        TextUtils is here to provide you all facilities you need to manipulate your Words, Paragraphs, Sentance and even Essays. Thanks for believing in Us.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" style={{
                            color: props.mode === 'dark' ? 'white' : 'black',
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            // border: "1px solid",
                            // borderColor: props.mode === 'dark' ? 'white' : 'black'
                        }} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       <strong>Free to use</strong> 
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{
                            color: props.mode === 'dark' ? 'white' : 'black',
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            // border: "1px solid",
                            // borderColor: props.mode === 'dark' ? 'white' : 'black'
                        }}>
                        We Provide you best experience at FREE of cost here, make your work easy and approachable. suitable for writing text with word/ character limits. 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" style={{
                            color: props.mode === 'dark' ? 'white' : 'black',
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            // border: "1px solid",
                            // borderColor: props.mode === 'dark' ? 'white' : 'black'
                        }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                       <strong>Browser Compatible</strong> 
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{
                            color: props.mode === 'dark' ? 'white' : 'black',
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            // border: "1px solid",
                            // borderColor: props.mode === 'dark' ? 'white' : 'black'
                        }}>
                        It is Compatible for all devices and at fastest service.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
