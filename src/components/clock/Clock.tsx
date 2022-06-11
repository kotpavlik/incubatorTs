import React, {useEffect, useState} from 'react';
import container_style from '../../assets/css_modules/Container.module.css'
import style from './Clock.module.css'


const utilsForClock = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {
    const [count, setCount] = useState(new Date())
    const [toggleClock, setToggleClock] = useState<boolean>(true)


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }

    }, [])



    const onClickHandler = () => { setToggleClock(!toggleClock)}
    const secondRatio:number = Number(count.getSeconds()/60)
    const minuteRatio:number = Number((secondRatio + count.getMinutes())/ 60)
    const hourRatio:number = Number((minuteRatio + count.getHours())/12)


    return (

        <div className={`${container_style.container} ${style.container}`} onClick={onClickHandler}>
            {toggleClock === true ? <div className={style.clock_num}>
                <span>{utilsForClock(count.getHours())}:</span>
                <span>{utilsForClock(count.getMinutes())}:</span>
                <span>{utilsForClock(count.getSeconds())} </span>
            </div> :
                <div className={style.clock} onClick={onClickHandler}>

                    <div className={`${style.hand} ${style.hour}`}
                         style={
                             {
                                 transform: `translate(-50%) rotate(${hourRatio * 360}deg)`
                             }
                         }></div>
                    <div className={`${style.hand} ${style.minute}`}
                         style={
                             {
                                 transform: `translate(-50%) rotate(${minuteRatio * 360}deg)`
                             }
                         }></div>
                    <div className={`${style.hand} ${style.second}`}
                         style={
                             {transform: `translate(-50%) rotate(${secondRatio * 360}deg)`}
                         }></div>

                    <div className={`${style.number} ${style.number1}`}>
                        <div>1</div>
                    </div>
                    <div className={`${style.number} ${style.number2}`}>
                        <div>2</div>
                    </div>
                    <div className={`${style.number} ${style.number3}`}>
                        <div>3</div>
                    </div>
                    <div className={`${style.number} ${style.number4}`}>
                        <div>4</div>
                    </div>
                    <div className={`${style.number} ${style.number5}`}>
                        <div>5</div>
                    </div>
                    <div className={`${style.number} ${style.number6}`}>
                        <div>6</div>
                    </div>
                    <div className={`${style.number} ${style.number7}`}>
                        <div>7</div>
                    </div>
                    <div className={`${style.number} ${style.number8}`}>
                        <div>8</div>
                    </div>
                    <div className={`${style.number} ${style.number9}`}>
                        <div>9</div>
                    </div>
                    <div className={`${style.number} ${style.number10}`}>
                        <div>10</div>
                    </div>
                    <div className={`${style.number} ${style.number11}`}>
                        <div>11</div>
                    </div>
                    <div className={`${style.number} ${style.number12}`}>
                        <div>12</div>
                    </div>
                </div>
            }



        </div>

    );
};

