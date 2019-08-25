import React from 'react';

import './tabs.css';

function Tabs({
    onTabClick = () => {},
    selectedTab = 0,
}) {
    return (
        <div className="buttons">
            <div className="button"
                 onClick={()=>onTabClick(1)}
                 style={{borderBottom: selectedTab===1 ? '4px solid darkred' : 'none' }}
            >
                Vkladka1
            </div>
            <div className="button"
                 onClick={()=>onTabClick(2)}
                 style={{borderBottom: selectedTab===2 ? '4px solid darkred' : 'none' }}
            >
                Vkladka2
            </div>
        </div>
    );
}

export default Tabs;


