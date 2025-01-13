import React from 'react';


function MyCounter({ digitSixth, digitFifth, digitFourth, digitThird, digitSecond, digitFirst }) {
    return (
        <div className="theDisplay">
        <div className="theCounter">
            <div className="clockIcon">
                <i className="far fa-clock"></i>
            </div>
            <div className="four box">{digitSixth % 10}</div>
            <div className="three box">{digitFifth % 10}</div>
            <div className="four box">{digitFourth % 10}</div>
            <div className="three box">{digitThird % 10}</div>
            <div className="two box">{digitSecond % 10}</div>
            <div className="one box">{digitFirst % 10}</div>
        </div>
        </div>
    );
}

export default MyCounter