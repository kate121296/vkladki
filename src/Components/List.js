import React from 'react';
import './List.css';
import { getOr } from "lodash/fp";

function List({
                  items=[],
                  onItemClick=()=>{}
              }) {

    return (
        <div className="ul-wrapper">
            <ul className="ul">
                {items.map((item,index) =>{
                    const key = getOr ('', ['id'], item);
                    const name = getOr ('', ['name'], item);
                    const img = getOr ('', ['img'], item);
                    return(
                        <div key={key} className="li-wrapper" onClick={()=>onItemClick(index)}>
                            <div className="li">{name}</div>
                            <img className="img" src={img} alt=""/>
                        </div>
                    )
                })}

            </ul>
        </div>
    );
}

export default List;


