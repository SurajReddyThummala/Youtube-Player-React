import React from 'react';
import Videoitem from './Videoitem';

const Videolist = (props) => {
 const Videolistitems =  props.videos.map((video) => {
    return (
      <Videoitem 
      onVideoSelect = {props.onVideoSelect}
       key = {video.etag} 
       video = {video} />
    )
  });


  return(
    <ul className = "col-md-4 list-group">
      {Videolistitems}
    </ul>
  );
}
export default Videolist;