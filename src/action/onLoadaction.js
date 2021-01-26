// import { STORIES_LOAD } from "../constants/actionTypes";
// import{fetchPostsSuccess } from "./story";
// import axios from 'axios'
// export const fetchPosts =  () => {
//     return async dispatch => {
//         try {
//             let posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
//             dispatch(fetchPostsSuccess(posts.data.splice(0, 5))) //store first five posts
//         }
//         catch(e){
//             console.log(e)
//         }
//     }
// }