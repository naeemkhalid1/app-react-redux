import React from "react";
import { STORIES_ADD } from "../constants/actionTypes";
const INITIAL_STATE=[];
const applyAddStories=(state,action)=>action.stories;
function storyReducer(state=INITIAL_STATE,action){
    switch(action.type){
        case STORIES_ADD : {
            return applyAddStories(state, action);
          }
        default:return state;
    }
}
// const INTIAL_STATE=[
//     {
//     title: 'learn web development',
//     url: 'https://facebook.github.io/react/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//     },
//     {
//         title: 'Redux',
//         url: 'https://github.com/reactjs/redux',
//         author: 'Dan Abramov, Andrew Clark',
//         num_comments: 2,
//         points: 5,
//         objectID: 1,
//     },
//     {
//         title: 'php',
//         url: 'https://github.com/reactjs/redux',
//         author: 'Dan Abramov, Andrew Clark',
//         num_comments: 2,
//         points: 5,
//         objectID: 2,
//     },
//     {
//         title: 'php',
//         url: 'https://github.com/reactjs/redux',
//         author: 'Dan Abramov, Andrew Clark',
//         num_comments: 2,
//         points: 5,
//         objectID: 3,
//     },
// ]
export default storyReducer;