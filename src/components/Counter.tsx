import React from 'react';

type CurrentType = {
    current: number
}

const Counter = ({current, ...props}: CurrentType) => {

    const CurrentClassName = (current === 5) ? `table tableBlock` : "table"
    const Message = (current === 5) ? `${current} - это мой предел` : current

    return (
        <div className={CurrentClassName}>
            {Message}
        </div>
    );
};

export default Counter;