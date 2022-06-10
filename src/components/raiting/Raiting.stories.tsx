import React from 'react';
import {Rating} from './Raiting';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Rating',
    component: Rating,
};

export const emptyRating = () => <Rating rating={0} setRating={action('rating 0 stars')}/>;
export const Rating1 = () => <Rating rating={1} setRating={action('rating 1 stars')}/>;
export const Rating2 = () => <Rating rating={2} setRating={action('rating 2 stars')}/>;
export const Rating3 = () => <Rating rating={3} setRating={action('rating 3 stars')}/>;
export const Rating4 = () => <Rating rating={4} setRating={action('rating 4 stars')}/>;
export const Rating5 = () => <Rating rating={5} setRating={action('rating 5 stars')}/>;

export const ChangeRating = () =>  {
    const [rating ,setRating] = useState(0)

    return (
    <Rating rating={rating} setRating={setRating}/>
    )
}