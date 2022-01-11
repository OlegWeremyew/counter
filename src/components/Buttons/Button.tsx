import React from 'react';

type ButtonType = {
    ButtonCallBack: () => void
    className?: string
    name: string
    disabled?: boolean
}

const Button = ({ButtonCallBack, name, className, disabled, ...props}: ButtonType) => {

    return (
        <div>
            <button className={className}
                    onClick={ButtonCallBack}
                    disabled={disabled}>
                {name}
            </button>
        </div>
    );

};

export default Button;