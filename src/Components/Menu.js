import React, {Fragment} from 'react';
import './Menu.css';

function Menu({
      menuItems=[],
      isMenuVisible=false,
      onCloseMenu=()=>{},
      onButtonChoose=()=>{},
  }) {
    return (
        <Fragment>
            {isMenuVisible && (
                <div className="menu-wrapper">
                    <button
                        className="close"
                        onClick={onCloseMenu}
                    >
                        X
                    </button>
                    {menuItems.map((item, index) => {
                        return(
                            <button
                                className="item"
                                key={item}
                                onClick={()=>onButtonChoose(index)}
                            >
                                {item}
                            </button>
                        )
                    })}
                </div>
            )}
        </Fragment>

        );
}

export default Menu;


