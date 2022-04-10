import React, {ChangeEvent} from 'react';
type inputType = {
    values:string
    onChangeSetValue:(value:string)=>void
}
export const Input = (props:inputType) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeSetValue(e.currentTarget.value);
    }

    return (
        <div>
            <input value={props.values} onChange={onChangeInputHandler}/>
        </div>
    );
};

