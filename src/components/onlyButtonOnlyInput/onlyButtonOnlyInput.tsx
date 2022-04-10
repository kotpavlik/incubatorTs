import React, {ChangeEvent, useState} from 'react';
import {Input} from './onlyInput/Input';
import {Button} from './onlyButton/Button';
import s from './onlyButtonOnlyInput.module.css';


export const OnlyButtonOnlyInput = () => {
    const [message, setMessage] = React.useState(
        [{message: 'hello my friend'},
            {message: 'what is your name'},
            {message: 'what is your age'},
            {message: 'Good game well played'}]
    );
    const [values, setValue] = useState('')


    const onChangeSetValue = (value:string) => {
        setValue(value)
    }

    const addMessage =()=> {
        setMessage([{message:values},...message])
        setValue('')

    }

    return (
        <div>
            <div className={s.button_input_all_wrapper}>
                <Input values={values} onChangeSetValue={onChangeSetValue}/>
                <Button addMessage={addMessage} name={'x'} />
            </div>
                <div>
                    {message.map((m, index) => {
                        return <div key={index}>{m.message}</div>
                    })}
                </div>

        </div>
    );
};

