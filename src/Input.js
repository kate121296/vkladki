import React from 'react';
import './Input.css';

function Input({
                   onChange=()=>{},
                   onButtonAdd=()=>{},
                   value=''
               }) {
    return (
        <form className="form-wrapper">
            <input
                className="input"
                type="text"
                placeholder="Enter product"
                onChange={onChange}
                value={value}
            />
            <button
                className="button"
                onClick={onButtonAdd}
            >
                Add
            </button>
        </form>
    );
}

export default Input;


