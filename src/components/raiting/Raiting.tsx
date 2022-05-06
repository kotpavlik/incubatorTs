import React, {Dispatch, MouseEventHandler, SetStateAction} from 'react';
import Star from './star/Star';
import style from'./Rating.module.css'

type RatingType = {
    rating: number;
    setRating: Dispatch<SetStateAction<number>>;
};

export const Rating = (props: RatingType) => {


    const returnStar = (id:number):void  => {
        props.setRating(id);
    }



    return (
        <div className={style.all_wrapper_stars}>
            <Star returnStar={()=>{returnStar(1)}}  selected={props.rating > 0}/>
            <Star returnStar={()=>{returnStar(2)}}  selected={props.rating > 1}/>
            <Star returnStar={()=>{returnStar(3)}}  selected={props.rating > 2}/>
            <Star returnStar={()=>{returnStar(4)}}  selected={props.rating > 3}/>
            <Star returnStar={()=>{returnStar(5)}}  selected={props.rating > 4}/>
        </div>
    )
};


