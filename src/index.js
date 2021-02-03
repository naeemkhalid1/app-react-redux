import React from 'react';
import ReactDOM from 'react-dom';
// import express from 'express';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Store from "./store/Index";
// import {STORY_ARCHIVE  } from "./constants/actionTypes";
// import archiveReducer from './reducers/archive';
// import { getReadableStories } from "./selectors/story";
// import { doArchiveStory } from "./action/archive";
import { Provider } from "react-redux";

// const app= express();
// app.listen(3000, () =>
//   console.log('Example app listening on port 3000!'),
// );

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
