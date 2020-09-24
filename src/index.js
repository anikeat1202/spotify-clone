import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DataLayer,DataLayerContext} from "../src/DataLayer";
import {initialState,reducer} from "../src/reducer";


ReactDOM.render(
  <React.StrictMode>
  <DataLayer initialState={initialState} reducer={reducer}>
  <App/>
  </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

