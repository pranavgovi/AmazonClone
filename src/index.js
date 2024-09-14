import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { StateProvider } from './components/StateProvider';
import { initialstate } from './components/reducer';
import { reducer } from './components/reducer';
ReactDOM.render(
    <StateProvider initialstate={initialstate} reducer={reducer}>
        <App/>
    </StateProvider>
    
    
,document.getElementById("root")
);

