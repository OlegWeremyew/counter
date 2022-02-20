import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRedux from "./AppRedux";
import {Provider} from "react-redux";
import {store} from "./store/store";

/*ReactDOM.render(
    <App />,
  document.getElementById('root')
)*/
;

ReactDOM.render(
    <Provider store={store}>
        <AppRedux/>
    </Provider>, document.getElementById('root')
);


reportWebVitals();
