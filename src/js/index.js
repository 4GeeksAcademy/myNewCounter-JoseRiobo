import React from 'react';
import ReactDOM from 'react-dom/client';
// Include bootstrap npm library into the bundle

import '../styles/index.css';
import MyCounter from "./component/MyCounter.jsx"




let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(() => {
    const sixthTimer = Math.floor(counter / 10000);
    const fifthTimer = Math.floor(counter / 10000);
    const fourthTimer = Math.floor(counter / 1000);
    const thirdTimer = Math.floor(counter / 100);
    const secondTimer = Math.floor(counter / 10);
    const firstTimer = Math.floor(counter / 1);
    counter++;
    
    root.render(
        <MyCounter digitFirst={firstTimer} digitSecond={secondTimer} digitThird={thirdTimer} digitFourth={fourthTimer} digitFifth={fifthTimer} digitSixth={sixthTimer}/>
    );
}, 1000);
