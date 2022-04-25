import React, {MouseEventHandler} from 'react';
import style from './Star.module.css';

type StarType = {
    selected: boolean;
    returnStar: () => void;

};
const Star = (props: StarType) => {
    let onClickChange =()=> {
       return  props.returnStar();
    };
    return (
                props.selected ? (<span onClick={onClickChange} className={style.star}> star </span>) : (
                    <span onClick={onClickChange} className={style.noActiveStars}> star  </span>)

    )
}

export default Star;
