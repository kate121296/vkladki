import React from 'react';
import './Select.css';


function Select({
    bodyPartsTitles=[],
    onTitleClick = () =>  {},
    onColorChoose = () =>  {},
}) {
    return (
        <div className="select-wrapper">
            <div>
                {bodyPartsTitles.map(part=>{
                    const title = part.title;
                    return(
                        <div onClick={()=>onTitleClick(title)} className="text">{title}</div>
                    )
                })}
            </div>
                  <div >
                        <div className="select">
                            <select className="color" onChange={onColorChoose}  >
                                <option
                                    className="color"
                                    value="black"
                                >
                                    black
                                </option>
                                <option
                                    className="color"
                                    value="green"

                                >
                                    green
                                </option>
                                <option
                                    className="color"
                                    value="yellow"
                                >
                                    yellow
                                </option>
                                <option
                                    className="color"
                                    value="pink"
                                >
                                    pink
                                </option>
                                <option
                                    className="color"
                                    value="blue"
                                >
                                    blue
                                </option>
                            </select>
                        </div>
                    </div>
        </div>
    );
}

export default Select;


