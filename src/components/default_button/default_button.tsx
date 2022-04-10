import React from 'react';

type ButtonType = {
    name:string
    onClickHandler:() => void
    styleButton:string
 }

const DefaultButton = (props:ButtonType) => {

    return (

            <button className={props.styleButton} onClick={props.onClickHandler}>{props.name}</button>

    );
};

export default DefaultButton;