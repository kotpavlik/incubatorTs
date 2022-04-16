import React, {useState} from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import PageTitle from './components/pageTitle/PageTitle';
import Rating from './components/raiting/Raiting';
import MicroTasks from './components/TestMap/MicroTasks';
import NewComponent from './components/newComponent/newComponent';
import ToggleButton from './components/ToggleBut/ToggleButton';
import {StartDirectory} from './components/fullInput/Start_directory';
import {OnlyButtonOnlyInput} from './components/onlyButtonOnlyInput/onlyButtonOnlyInput';
import No_Control_Rating from './components/no_control_raiting/Raiting';

type topCarsType = {
    manufacturer: string
    model: string
}
export type ratingType = number;

function App() {
    const topCars: Array<topCarsType> = [
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
            <Rating rating={rating} setRating={setRating}/>
            <No_Control_Rating />
            <Accordion title={'Menu : '} collapsed={true}/>
            <Accordion title={'Users : '} collapsed={true}/>
            <MicroTasks cars={topCars}/>
            <ToggleButton/>
            <div className="button_input_default_and_no_default"><StartDirectory/>
                <OnlyButtonOnlyInput/></div>
            <NewComponent/>
        </div>
    );
}

export default App;


