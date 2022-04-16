import React, {Dispatch, MouseEventHandler, SetStateAction} from 'react';
import Star from './star/Star';
import style from './Rating.module.css'


const No_Control_Rating = () => {


    const [rating, setRating] = React.useState(0);
    const returnStar = (id: number): void => {
        setRating(id)
    }


    return (
        <div className={style.all_wrapper_stars}>
            <Star returnStar={returnStar} idStar={1} selected={rating > 0}/>
            <Star returnStar={returnStar} idStar={2} selected={rating > 1}/>
            <Star returnStar={returnStar} idStar={3} selected={rating > 2}/>
            <Star returnStar={returnStar} idStar={4} selected={rating > 3}/>
            <Star returnStar={returnStar} idStar={5} selected={rating > 4}/>
        </div>
    )
};

export default No_Control_Rating;
