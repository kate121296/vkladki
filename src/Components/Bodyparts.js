import React from 'react';
import './Bodyparts.css';


function Bodyparts ({
    colorParts
}){
    return (
        <div>
            <div>
                <div
                    className="head"
                    style={{backgroundColor: colorParts.head}}
                    />
                <div className="body-wrapper">
                    <div
                        className="left-arm"
                        style={{backgroundColor: colorParts.left_arm}}
                        />
                    <div
                        className="body"
                        style={{backgroundColor: colorParts.body}}
                        />
                    <div
                        className="right-arm"
                        style={{backgroundColor: colorParts.right_arm}}
                        />
                </div>
                <div className="body-wrapper">
                    <div
                        className="left-leg"
                        style={{backgroundColor: colorParts.left_leg}}
                        />
                    <div
                        className="right-leg"
                        style={{backgroundColor: colorParts.right_leg}}
                        />
                </div>
            </div>
        </div>
    )
}

export default Bodyparts;


