import React from 'react';

type CurrentType = {
    current: number
    MaxValue: number
}

const Counter = ({current, MaxValue,...props}: CurrentType) => {

    const CurrentClassName = (current === MaxValue) ? `table tableBlock` : "table"
    const Message = (current === MaxValue) ? `${current} - это мой предел` : current

    return (
        <div className={CurrentClassName}>
            {Message}
        </div>
    );
};

export default Counter;