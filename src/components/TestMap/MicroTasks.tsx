import React from 'react';
import s from './MicroTasks.module.css'

type topCarsType = {
    cars: Array<carsType>
}

type carsType = {
    manufacturer: string
    model: string
}


const MicroTasks = (props: topCarsType) => {
    return (
        <div className={s.wrapper_micro_tasks}>
            <table className={s.cars}>
                <tbody>
                {props.cars.map((cars, index) => {
                    return (
                        <tr key={index}>
                            <td> manufacturer: {cars.manufacturer} </td>
                            <td> model: {cars.model}</td>
                        </tr>

                    )
                })}</tbody>
            </table>
        </div>
    );
};

export default MicroTasks;