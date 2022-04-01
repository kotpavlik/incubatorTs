import React from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import PageTitle from './components/pageTitle/PageTitle';
import Raiting from './components/raiting/Raiting';
import MicroTasks from './components/TestMap/MicroTasks';
import NewComponent from './components/newComponent/newComponent';

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <div className="App">
            <div className="App-header">
                <PageTitle title={'Hello hacking wold'}/>
                <PageTitle title={'Hello hacking wold, my dear hackers'}/>
            </div>
            <Raiting value={3}/>
            <Accordion title={'Menu : '} collapsed={true}/>
            <Accordion title={'Users : '} collapsed={true}/>
            <MicroTasks cars={topCars}/>
            <NewComponent/>
        </div>
    );
}

export default App;
