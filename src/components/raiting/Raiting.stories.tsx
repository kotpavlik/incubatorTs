import react from 'react';
import { Rating } from './Raiting';

export default {
  title: 'Rating',
  component: Rating,
};

export const emptyStars = () => <Rating rating={0} setRating={x=>x}  />;
export const oneStars = () => <Rating rating={1} setRating={x=>x}  />;
export const twoStars = () => <Rating rating={2} setRating={x=>x}  />;
export const threeStars = () => <Rating rating={3} setRating={x=>x}  />;
export const fourStars = () => <Rating rating={4} setRating={x=>x}  />;
export const fiveStars = () => <Rating rating={5} setRating={x=>x}  />;