import React, {useState} from 'react';
import Default_button from '../default_button/default_button';
import HomeworkEasyType from './HomeworkEasyType';


type nameButtonType = 'all' | 'ruble' | 'dollar'

const NewComponent = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [nameButton, setNameButton] = useState<nameButtonType>('all');

    let currentMoney = money;
    if (nameButton === 'ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots.toLocaleLowerCase() === 'rubls')
    }
    if (nameButton === 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots.toLocaleLowerCase() === 'dollars')
    }

    const onClickHandler = (nameButton: nameButtonType) => {
        setNameButton(nameButton)
    }
    let allButton:string = 'uk-button uk-button-secondary';
    let rubleButton:string = 'uk-button uk-button-primary';
    let dollarButton:string = 'uk-button uk-button-danger';

    return (
        <div>
            <div className="filter_cash">
                <HomeworkEasyType currentMoney={currentMoney}/>
            </div>
            <div className="uk-button-group">
                <Default_button
                    name={'all'}
                    onClickHandler={() => onClickHandler('all')}
                    styleButton={allButton}/>

                <Default_button
                    name={'ruble'}
                    onClickHandler={() => onClickHandler('ruble')}
                    styleButton={rubleButton}/>

                <Default_button
                    name={'dollar'}
                    onClickHandler={() => onClickHandler('dollar')}
                    styleButton={dollarButton}/>

            </div>
        </div>
    );
};

export default NewComponent;