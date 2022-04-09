import React, {useState} from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import PageTitle from './components/pageTitle/PageTitle';
import Raiting from './components/raiting/Raiting';
import MicroTasks from './components/TestMap/MicroTasks';
import NewComponent from './components/newComponent/newComponent';

type topCarsType = {
    manufacturer:string
    model:string
}
export type ratingType = number;

function App() {
    const topCars:Array<topCarsType>= [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const [rating, setRating] = useState(4 as ratingType);

    return (
        <div className="App">
            <div className="App-header">
                <PageTitle title={'Hello hacking wold'}/>
                <PageTitle title={'Hello hacking wold, my dear hackers'}/>
            </div>
            <Raiting  rating={rating} setRating={setRating}/>
            <Accordion title={'Menu : '} collapsed={true}/>
            <Accordion title={'Users : '} collapsed={true}/>
            <MicroTasks cars={topCars}/>

            <NewComponent/>
        </div>
    );
}

export default App;


