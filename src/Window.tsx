import React from 'react';
import Counter from "./Counter";
import Buttons from "./Buttons";

type WindowType = {
    changeCurrent: () => void
    ButtonReset: () => void
    current: number
    MaxValue: number
    startValue: number
}

const Window = ({changeCurrent, ButtonReset, MaxValue, current, startValue,...props}: WindowType) => {

    return (
        <div className="conteiner">
            <Counter current={current}/>
            <Buttons current={current}
                     changeCurrent={changeCurrent}
                     ButtonReset={ButtonReset}
                     MaxValue={MaxValue}
                     startValue={startValue}
            />
        </div>
    );
};


export default Window;
