import React from 'react';

type currentMoneyPropsType = {
    currentMoney: Array<moneyType>
}
type moneyType = {
    banknots: string
    value: number
    number: string
}
const HomeworkEasyType = (props: currentMoneyPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((money, index) => {

                    return (
                        <li key={index} className="money_list">
                            <span>banknotes: {money.banknots} </span>
                            <br/>
                            <span>nominal: {money.value} </span>
                            <br/>
                            <span>number: {money.number} </span>
                            <br/>
                        </li>
                    )
                })}</ul>
        </>
    );
};

export default HomeworkEasyType;