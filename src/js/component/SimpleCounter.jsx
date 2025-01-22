import React, { useEffect, useState } from "react";


export const SimpleCounter = () => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [start, setStart] = useState('Start');
    const [icon, setIcon] = useState('clock')
    const [subtitle, setSubtitle] = useState({ text: 'Clock', color: 'primary' })

    const handleStart = () => {
        setIsRunning(!isRunning)
        setIcon('stopwatch')
        setSubtitle({ text: 'Chronometer', color: 'warning', })
        if (isRunning) {
            counter == 0 ? setStart('Start') : setStart('Continue');
        } else {
            setStart('Pause')
        }
    }

    const handleReset = () => {
        setSubtitle({ text: 'Clock', color: 'primary', })
        setStart('Start');
        setIcon('clock')
        setCounter(0);
        setIsRunning(false)
    }

    useEffect(() => {
        if (isRunning) {
            const newInterval = setInterval(() => {
                setCounter(counter => counter + 1);
            }, 10);

            return () => clearInterval(newInterval);
        }
    }, [isRunning]);


    return (
        <div className="container">
            <h2 className={`text-${subtitle.color}`}>{subtitle.text}</h2>
            <div className="big-counter">
                <div><i className={`fa fa-${icon} fa-lg`}></i></div>
                <div>{Math.floor(counter / 10000000 % 10)}</div>
                <div>{Math.floor(counter / 1000000 % 10)}</div>
                <div>{Math.floor(counter / 100000 % 10)}</div>
                <div>{Math.floor(counter / 10000 % 10)}</div>
                <div>{Math.floor(counter / 1000 % 10)}</div>
                <div>{Math.floor(counter / 100 % 10)}</div>
                <div>,</div>
                <div>{Math.floor(counter / 10 % 10)}</div>
                <div>{Math.floor(counter % 10)}</div>
                <div>
                    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                        <button onClick={handleStart} type="button" className="btn btn-outline-success">{start}</button>
                        <button onClick={handleReset} type="button" className="btn btn-outline-danger">{'Reset'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}









// import React from "react";
// import PropTypes from "prop-types";

// export const SimpleCounter = (props) => {
//     //Código de JS

//     SimpleCounter.PropTypes = {
//         digitFour: PropTypes.number,
//         digitThree: PropTypes.number,
//         digitTwo: PropTypes.number,
//         digitOne: PropTypes.number
//     }

//     const counter = 0;

//     setInterval (function(){
//         const four = Math.floor(counter/1000);
//         const three = Math.floor(counter/100);
//         const two = Math.floor(counter/10);
//         const one = Math.floor(counter/1);

//         counter++;

//         ReactDOM.render (<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
//         document.querySelector("#app"));
//     },1000);

//     return (
//         <div className="bigCounter">
//             <div className="title">Counter</div>
//             <div className="four">{props.digitFour}</div>
//             <div className="three">{props.digitThree}</div>
//             <div className="two">{props.digitTwo}</div>
//             <div className="one">{props.digitOne}</div>
//         </div>
//     )
// }