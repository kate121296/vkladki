import React from 'react';

import './Card.css';

function App({
  cards=[]
 }) {
    return (
        <div className="cards">
            {cards.length > 0 && cards.map(card=>{
                return(
                    <div className="card" key={card.title}>
                        <img className="img" src={card.url} alt=""/>
                        <p className="title">{card.title}</p>
                        <p className="text">{card.description}</p>
                        <a className="link" href={card.link}>press me please!</a>
                    </div>
                )
            })}
        </div>
    );
}

export default App;


