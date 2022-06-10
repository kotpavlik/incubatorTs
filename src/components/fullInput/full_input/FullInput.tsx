import React, {ChangeEvent, MouseEventHandler, useState} from 'react';


type FullInputPropsType = {
    addMessage: (values:string ) => void
}

export const FullInput = (props: FullInputPropsType) => {
    const [values, setValue] = useState('')


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(typeof e)
        setValue(e.currentTarget.value);

    }
    const onClickButtonHandler = () => {
        props.addMessage(values);
        setValue('');
    }

    return (
        <div>
            <input value={values} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>X</button>
        </div>
    );
};

