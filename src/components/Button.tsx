import React from 'react';

type ButtonType = {
    ButtonCallBack: () => void
    className: string
    name: string
}

const Button = ({ButtonCallBack, name, className, ...props}: ButtonType) => {

    return (
        <div>
            <button className={className}
                    onClick={ButtonCallBack}>
                {name}
            </button>
        </div>
    );

};

export default Button;