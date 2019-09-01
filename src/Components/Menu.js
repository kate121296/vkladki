import React from 'react';
import './Menu.css';

function Menu({
    data
              }) {
    return (
        <ul className="li-wrapper">
            {data.map(user=>{
                const key = user.id
                const userTitle = user.title
                return (
                    <li className="li" key={key}>{userTitle}</li>
                )
            })}

        </ul>
    );
}

export default Menu;


