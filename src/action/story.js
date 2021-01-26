import {STORIES_ADD,STORIES_FETCH,FETCH_POSTS_SUCCESS} from '../constants/actionTypes';
   
  const doAddStories = stories => ({
    type: STORIES_ADD,
    stories,
  });
//   const fetchPostsSuccess = posts => ({
//     type: FETCH_POSTS_SUCCESS,
//     payload: { posts }
// })
   
  const doFetchStories = query => ({
    type: STORIES_FETCH,
    query,
  });
   
  export {
    doAddStories,
    doFetchStories,
    // fetchPostsSuccess,
  };