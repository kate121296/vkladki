import React from 'react';
import './Ul.css';

function Ul({data}) {
    return (
        <div className="root">
            <ul className="list-wrapper">
                {data.map(user => {
                    const key = user.id;
                    const userName = user.name;
                    return (
                        <div
                            className="list"
                            key={key}
                        >
                            {userName}
                        </div>
                    )
                })}
            </ul>
        </div>
    );
}

export default Ul;


