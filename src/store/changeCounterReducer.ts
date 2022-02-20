export const initialState = {
    startValue: 0,
    MaxValue: 5,
}

export type initialStateType = typeof initialState

export const changeCounterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "CHANGE-CURRENT-VALUE" : {
            let currentValue = state.startValue + 1
            return (state.MaxValue < state.startValue && state.startValue > 0) ? {...state, startValue: currentValue} : state
        }
        case "RESET-VALUE" : {
            return {...state, startValue: 0}
        }
        default:
            return state
    }
}

type ActionType =
    | ChangeCurrentValueType
    | ResetCurrentValueType


export type ChangeCurrentValueType = ReturnType<typeof changeCurrentValueAC>
export const changeCurrentValueAC = () => {
    return {
        type: "CHANGE-CURRENT-VALUE",
    }
}

export type ResetCurrentValueType = ReturnType<typeof resetCurrentValueAC>
export const resetCurrentValueAC = () => {
    return {
        type: "RESET-VALUE",
    }
}