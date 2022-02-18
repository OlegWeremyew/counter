import React from 'react';
import Button from "./Button";

type ButtonType = {
    ButtonReset: () => void
    changeCurrent: () => void
    current: number
    MaxValue: number
    startValue: number
}

const Buttons = ({ButtonReset, changeCurrent, MaxValue, startValue, current}: ButtonType) => {

    const ButtonCurrentClassName = (current === MaxValue) ? "buttonCurrentMax" : "buttonCurrent"
    const ButtonResetClassName = (current !== startValue) ? "buttonResetActive" : "buttonReset"

    return (
        <div className="current">
            <Button ButtonCallBack={changeCurrent}
                    className={ButtonCurrentClassName}
                    name={"Увеличить"}/>
            <Button ButtonCallBack={ButtonReset}
                    className={ButtonResetClassName}
                    name={"Сброс"}/>
        </div>
    );
};

export default Buttons;