import {applyMiddleware, combineReducers, createStore} from "redux";
import {changeCounterReducer} from "./changeCounterReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localStorrage-utils";

const rootReducer = combineReducers({
    count: changeCounterReducer,
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
    saveState({
        count: store.getState().count
    });
})
type AppStoreType = typeof  store

export type AppRootStateType = ReturnType<typeof rootReducer>
