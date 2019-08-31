import React from 'react';
import './Menu.css';
import { getOr } from "lodash/fp";

function Menu({
                  formDatas=null,

                  onChangeFormData = () => {},
                  onAddData = () => {},
              }) {
    const dataName = getOr ('', ['name'], formDatas);
    const dataKingdom = getOr ('', ['kingdom'], formDatas);
    const dataClass = getOr ('', ['class'], formDatas);
    const dataOrder = getOr ('', ['order'], formDatas);
    const dataFamily = getOr ('', ['family'], formDatas);
    const dataGenus = getOr ('', ['genus'], formDatas);
    const dataImg = getOr ('', ['img'], formDatas);
    return (
        <div className="menu-wrapper">
            <input
                className="input"
                type="text"
                placeholder="name"
                onChange={e => onChangeFormData(e.target.value,'name')}
                value={dataName}
            />
            <input
                className="input"
                type="text"
                placeholder="kingdom"
                onChange={e => onChangeFormData(e.target.value,'kingdom')}
                value={dataKingdom}
            />
            <input
                className="input"
                type="text"
                placeholder="class"
                onChange={e => onChangeFormData(e.target.value,'class')}
                value={dataClass}
            />
            <input
                className="input"
                type="text"
                placeholder="order"
                onChange={e => onChangeFormData(e.target.value,'order')}
                value={dataOrder}
            />
            <input
                className="input"
                type="text"
                placeholder="family"
                onChange={e => onChangeFormData(e.target.value,'family')}
                value={dataFamily}
            />
            <input
                className="input"
                type="text"
                placeholder="genus"
                onChange={e => onChangeFormData(e.target.value,'genus')}
                value={dataGenus}
            />
            <input
                className="input"
                type="text"
                placeholder="image"
                onChange={e => onChangeFormData(e.target.value,'img')}
                value={dataImg}
            />
            <button
                className="button"
                onClick={onAddData}
            >
                Add
            </button>
        </div>
    );
}

export default Menu;


