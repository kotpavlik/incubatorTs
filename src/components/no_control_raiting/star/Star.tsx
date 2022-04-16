import React, {MouseEventHandler} from 'react';
import style from './Star.module.css';

type StarType = {
    selected: boolean;
    returnStar: (idStar: number) => void;
    idStar: number;
};
const Star = (props: StarType) => {
    let onClickChange =()=> {
         props.returnStar(props.idStar);
    };
    return (
                props.selected ? (<span onClick={onClickChange} className={style.star}> star </span>) : (
                    <span onClick={onClickChange} className={style.noActiveStars}> star  </span>)

    )
}

export default Star;
