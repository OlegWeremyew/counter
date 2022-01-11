import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputPropsType = DefaultInputPropsType &{
    value: number
    onChangeInputHandler: (value: number) => void
    spanClassName?: string
    error?: boolean
}

const Input = (props: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeInputHandler(+e.currentTarget.value)
    }

    return (
        <input
            type="number"
            value={props.value}
            onChange={onChangeHandler}
        />
    );
};

export default Input;