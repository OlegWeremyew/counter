
export const initialState = {
    value: 0,
}

export type initialStateType = typeof initialState

export const changeCounterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "CHANGE-CURRENT-VALUE" : {
            return {...state, value: state.value + 1}
        }
        case "RESET-VALUE" : {
            return {...state, value: 0}
        }
        case "SET_VALUE_FROM_LOCAL_STORAGE" : {
            return {...state, value: action.value}
        }
        default:
            return state
    }
}

type ActionType =
    | ChangeCurrentValueType
    | ResetCurrentValueType
    | setValueFromLocalStorageType


export type ChangeCurrentValueType = ReturnType<typeof changeCurrentValueAC>
export const changeCurrentValueAC = () => {
    return {
        type: "CHANGE-CURRENT-VALUE"
    } as const
}

export type ResetCurrentValueType = ReturnType<typeof resetCurrentValueAC>
export const resetCurrentValueAC = () => {
    return {
        type: "RESET-VALUE",
    } as const
}

export type setValueFromLocalStorageType = ReturnType<typeof setValueFromLocalStorageAC>
export const setValueFromLocalStorageAC = (value: number) => {
    return {
        type: "SET_VALUE_FROM_LOCAL_STORAGE",
        value
    } as const
}

//Thunk

/*export const IncValueTC = () => (dispatch: Dispatch<ActionType>, getState: () => AppRootStateType) => {
    const currentValue = getState().changeCount.value
    localStorage.setItem("startValue", JSON.stringify(currentValue + 1))
    dispatch(changeCurrentValueAC())
}

export const ResetValueTC = () => (dispatch: Dispatch<ActionType>) => {
    localStorage.setItem("startValue", JSON.stringify(0))
    dispatch(resetCurrentValueAC())
}

export const setValueFromLocalStorageTC = () => (dispatch: Dispatch<ActionType>) => {
    let valueAsString = localStorage.getItem("startValue")
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        dispatch(setValueFromLocalStorageAC(newValue))
    }
}*/
