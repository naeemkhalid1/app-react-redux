import react, { useEffect,useState } from "react";
import { connect } from "react-redux";
import Pagination from "./pagination";
import { doArchiveStory } from "../action/archive";
import './Story.css';
const Story=({story,counter,columns,onArchive})=>{

const{ title,url,author,num_comments,points,objectID,}=story;

// let[currentcounter,setcounter]=useState(1);
counter++;

 return(
         <div className="story"> 
         
            <span style={{width:columns.id.width}} >{counter++}</span>
            <span style={{width:columns.title.width}}><a href={url}>{title}</a></span>
            <span style={{width:columns.author.width}}>{author}</span>
            <span style={{width:columns.comments.width}}>{num_comments}</span>
            <span style={{width:columns.archive.width}}>{points}</span>
    <button type="button" className="button-inline" onClick={()=>onArchive(objectID)}>Archive</button>
            </div>
            
    )
  
    }
    
    const mapDispatchToProps=dispatch=>({ onArchive:id=>dispatch(doArchiveStory(id)),});
    export default connect(
        null,mapDispatchToProps
    )(Story);
    // export default Story;