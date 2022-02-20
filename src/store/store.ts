
import {applyMiddleware, combineReducers, createStore} from "redux";
import {changeCounterReducer} from "./changeCounterReducer";
import thunk from "redux-thunk";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    changeCount: changeCounterReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));