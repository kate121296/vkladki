import React from 'react';

import {getOr} from "lodash/fp";

import './Input.css';
function App({
     onAddItem=()=>{},
     onUrlChange=()=>{},
     onTitleChange=()=>{},
     onDescriptionChange=()=>{},
     onLinkChange=()=>{},
     values=null,
 }) {
    const urlItem = getOr('', ['url'], values);
    const titleItem = getOr('', ['title'], values);
    const descriptionItem = getOr('', ['description'], values);
    const linkItem = getOr('', ['link'], values);
    return (
        <div className="input-wrapper">
            <input
                onChange={onUrlChange}
                className="input"
                type="text"
                value={urlItem}
                placeholder="Enter the url of picture"
            />
            <input
                className="input"
                type="text"
                onChange={onTitleChange}
                value={titleItem}
                placeholder="Enter the title of the card"
            />
            <input
                className="input"
                type="text"
                onChange={onDescriptionChange}
                value={descriptionItem}
                placeholder="Enter a description"
            />
            <input
                className="input"
                type="text"
                onChange={onLinkChange}
                value={linkItem}
                placeholder="Enter the link of the website"
            />
            <button
                onClick={onAddItem}
                className="button"
            >
                Add
            </button>
        </div>
    );
}

export default App;


