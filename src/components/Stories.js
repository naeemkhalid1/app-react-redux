import React, {useState,useEffect} from "react";
import './Stories.css';
import Story from './Story';
import { connect } from "react-redux";
import { doArchiveStory  } from "../action/archive";
import { getReadableStories } from "../selectors/story";
import Pagination from './pagination';
// import { useEffect, useState } from 'react';
 
const COLUMNS={
    id:{label:'sr.no',width:'10%'},
    title:{label:'Title',width:'40%',},
    author:{label:'Author',width:'30%',},
    comments:{label:'Comments',width:'10%',},
    points:{label:'Points',width:'10%',},
    archive:{width:'10%',},};
const Stories =({stories})=>{
const[story,setStory]= useState([]);
const[currentPage,setCurrentPage]=useState(1);
const[postsPerPage,setPostPerPage]=useState(3);
  useEffect(()=>{
    setStory(stories);

  })


 const indexOfLastPost=currentPage*postsPerPage;
 const indexOfFirstPost=indexOfLastPost-postsPerPage; 
 const currentPosts=story.slice(indexOfFirstPost,indexOfLastPost);
const paginate=(pageNumber)=>{ 

  {setCurrentPage(pageNumber)}
}

let tempvar=story.length;


 

 return(
  
 <div className="stories">
   <Pagination postsPerPage={postsPerPage} totalPosts={story.length} paginate={paginate}/>
     <div className="stories-header">
      {Object.keys(COLUMNS).map(key =>
        <span key={key} style={{ width: COLUMNS[key].width }} >
          {COLUMNS[key].label}
        </span>
      )}
    </div>

     {
       
     (currentPosts ||[]).map((story1,i)=><Story counter={i} key={story1.objectID} story={story1} columns={COLUMNS}/>)
     }
     <Pagination postsPerPage={postsPerPage} totalPosts={story.length} paginate={paginate} />
  
 </div>
   
 );

}
 const mapStateToProps=state=>({stories:getReadableStories(state),});
//  const mapDispatchToProps= dispatch =>({onArchive:id=>dispatch(doArchiveStory(id)),});
 export default connect(mapStateToProps)(Stories);
//  export default Stories;