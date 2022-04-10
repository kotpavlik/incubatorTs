import React from 'react';
import {FullInput} from './full_input/FullInput';

export const StartDirectory = () => {
    const [message, setMessage] = React.useState(
        [{message: 'hello my friend'},
            {message: 'what is your name'},
            {message: 'what is your age'},
            {message: 'Good game well played'}]
    );

    const addMessage =(value:string)=> {
        setMessage([{message:value},...message])

    }
    return (
        <div>
            <FullInput addMessage={addMessage}/>
            <div>
                {message.map((m, index) => {
                    return <div key={index}>{m.message}</div>
                })}
            </div>
        </div>
    );
};

