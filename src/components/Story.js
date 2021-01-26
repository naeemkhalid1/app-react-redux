import react, { useEffect,useState } from "react";
import { connect } from "react-redux";
import { doArchiveStory } from "../action/archive";
import './Story.css';
const Story=({story,columns,onArchive})=>{
const{
    title,url,author,num_comments,points,objectID,
}=story;
var count=0;
// const temp=Object.keys(story).map(()=>{
//     return(
        
//             <div>
               
//         <span style={{width:columns.id.width}}  >{count++}</span> 
//         <span style={{width:columns.title.width}}><a href={url}>{title}</a></span>
//         <span style={{width:columns.author.width}}>{author}</span>
//         <span style={{width:columns.comments.width}}>{num_comments}</span>
//         <span style={{width:columns.archive.width}}>{points}</span>

//                 </div>
//     )

// })
console.log("object",Object.keys(story));
// console.log("temprary",story);
// const temparay=[];
// var count;
// for(count=0; count<=1; count++)
// {    
      
//        temparay.push( <span style={{width:columns.id.width} } >{count}</span> );
//        temparay.push( <span style={{width:columns.title.width}}><a href={url}>{title}</a></span>);
//        temparay.push( <span style={{width:columns.author.width}}>{author}</span>);
//        temparay.push( <span style={{width:columns.comments.width}}>{num_comments}</span>);
//        temparay.push( <span style={{width:columns.archive.width}}>{points}</span>);
// }
// console.log("temporart",temparay);

return(
    //temp
      <div className="story"> 
      {/* {this.state.map( d => <div>{d}</div>)} */}
       <span style={{width:columns.id.width} } >{count+1}</span> 
        <span style={{width:columns.title.width}}><a href={url}>{title}</a></span>
        <span style={{width:columns.author.width}}>{author}</span>
        <span style={{width:columns.comments.width}}>{num_comments}</span>
        <span style={{width:columns.archive.width}}>{points}</span> 
        <button type="button" className="button-inline" onClick={()=>onArchive(objectID)}>Archive</button> 
        </div>
);
}

const mapDispatchToProps=dispatch=>({ onArchive:id=>dispatch(doArchiveStory(id)),});
export default connect(
    null,mapDispatchToProps
)(Story);
// export default Story;