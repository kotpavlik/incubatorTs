import React from 'react';
import style from './ToggleButton.module.css';

const ToggleButton = () => {
    const [isToggle, setIsToggle] = useToggle();
    return (
        <div className={style.toggleWrapper}>
            {isToggle
                ? <button onClick={setIsToggle} className={style.on}>on</button>
                : <button onClick={setIsToggle} className={style.off}>off</button>
            }
            {isToggle
                ? <div className={style.heartGreen} ></div>
                : <div className={style.heartRed}></div>
            }
        </div>
    );
};

export default ToggleButton;

const useToggle = (initialState: boolean = false): [boolean, any] => {
    const [state, setState] = React.useState<boolean>(initialState);
    const toggle = React.useCallback((): void => setState(state => !state), []);
    return [state, toggle]
}