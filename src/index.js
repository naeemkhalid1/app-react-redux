import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Store from "./store/Index";
import {STORY_ARCHIVE  } from "./constants/actionTypes";
import archiveReducer from './reducers/archive';
import { getReadableStories } from "./selectors/story";
import { doArchiveStory } from "./action/archive";
import { Provider } from "react-redux";


// const stories=[{
//   title:'React',
//   url:'https://facebook.github.io/react/',
//   author:'jordan Walke',
//   num_comments:3,
//   points:4,
//   objectID:0,
// },
// {
//   title:'Redux',
//   url:'https://github.com/reactjs/redux/',
//   author:'Dan Abramov,Andrew Clark',
//   num_comments:5,
//   points:4,
//   objectID:1,                   
// },
// ]
// function render(){
ReactDOM.render(
  <Provider store={Store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
// }
// Store.subscribe(render);
// render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
