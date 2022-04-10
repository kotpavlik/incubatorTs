import React from 'react';

type PropsButtonType = {
    addMessage: () => void
    name: string
}
export const Button = (props:PropsButtonType) => {
    const onClickButtonHandler = () => {
        props.addMessage()
    }

    return (
        <div>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </div>
    );
};

