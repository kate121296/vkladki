import React, { useState} from 'react';
import './List.css';

function List({
                  products=[],
                  onDeleteItem=()=>{}
              }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleMouseEnter = index => {
        setHoveredIndex(index)
    }
    const handleMouseLeave = index => {
        setHoveredIndex(index)
    }

    return (
        <div className="list-wrapper">
            <p className="text">Products list</p>
            <ul className="ul">
                {products.map((product, index)=>{
                    return(
                        <li
                            className="li"
                            key={product}
                            onMouseEnter={()=>handleMouseEnter(index)}
                            onMouseLeave={()=>handleMouseLeave(index)}
                        >
                            {product}
                            {hoveredIndex===index && (
                                <p onClick={()=>onDeleteItem(index)} className="close">X</p>
                            )}
                        </li>
                    )
                })}

            </ul>
        </div>
    );
}

export default List;


