import React, {useEffect, useState} from 'react';


export default {
    title: 'UseEffectsDemo',

};

export const SetTimeOutExample = () => {
    const [text, setText] = useState('');
    console.log('component render with ' + text)

    useEffect(() => {
        const TimeId = setTimeout(() => {
            console.log('TIME EXPIRED');
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(TimeId)
        }
    }, [])
    return <>
        text:{text}
    </>
}
export const KeyTrackerExample = () => {
    const [text, setText] = useState('');
    console.log('component render with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText( text + e.key)
        }
        window.addEventListener('keypress',handler)
        return () => {
            window.removeEventListener('keypress',handler)
        }
    }, [text])
    return <>
        You Press Keys : {text}
    </>
}