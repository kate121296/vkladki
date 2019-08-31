import React, {Fragment} from 'react';
import './Data.css';

function Data({
                  selectedItemsIndex='',
                  datas=[]
              }) {
    console.log(Boolean(datas[selectedItemsIndex]))
    return (
        <Fragment>
            {datas[selectedItemsIndex] && (
                <div className="data-wrapper">
                    <div className="text">name: {datas[selectedItemsIndex].name}</div>
                    <div className="text">kingdom: {datas[selectedItemsIndex].kingdom}</div>
                    <div className="text">class: {datas[selectedItemsIndex].class}</div>
                    <div className="text">order: {datas[selectedItemsIndex].order}</div>
                    <div className="text">family: {datas[selectedItemsIndex].family}</div>
                    <div className="text">genus: {datas[selectedItemsIndex].genus}</div>
                    <img className="img2" src={datas[selectedItemsIndex].img} />
                </div>
            )}
        </Fragment>

    );
}

export default Data;


