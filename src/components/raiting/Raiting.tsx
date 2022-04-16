import React, {Dispatch, MouseEventHandler, SetStateAction} from 'react';
import Star from './star/Star';
import style from'./Rating.module.css'

type RatingType = {
    rating: number;
    setRating: Dispatch<SetStateAction<number>>;
};

const Rating = (props: RatingType) => {

    const IdStars = [1, 2, 3, 4, 5];
    const returnStar = (id:number):void  => {
        props.setRating(id);
    }



    return (
        <div className={style.all_wrapper_stars}>
            <Star returnStar={returnStar} idStar={IdStars[0]} selected={props.rating > 0}/>
            <Star returnStar={returnStar} idStar={IdStars[1]} selected={props.rating > 1}/>
            <Star returnStar={returnStar} idStar={IdStars[2]} selected={props.rating > 2}/>
            <Star returnStar={returnStar} idStar={IdStars[3]} selected={props.rating > 3}/>
            <Star returnStar={returnStar} idStar={IdStars[4]} selected={props.rating > 4}/>
        </div>
    )
};

export default Rating;
