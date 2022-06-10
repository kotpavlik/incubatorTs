import React, {useEffect, useState} from 'react';
import container_style from '../../assets/css_modules/Container.module.css'
import style from './Clock.module.css'


const utilsForClock = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {
    const [count, setCount] = useState(new Date())


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        <div className={container_style.container}>
            <div className={style.clock}>
                <span>{utilsForClock(count.getHours())}:</span>
                <span>{utilsForClock(count.getMinutes())}:</span>
                <span>{utilsForClock(count.getSeconds())} </span>
            </div>
        </div>
    );
};

