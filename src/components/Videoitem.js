import React from 'react'

const Videoitem = ({ video, onVideoSelect }) => {
return (
  <li onClick = { () => onVideoSelect(video) } className = "list-group-item">
    <div className = "video-list media">
        <div className = "media-left">
            <img className = "media-object" src = {video.snippet.thumbnails.default.url} />
        </div>
            <div className = "media-right">
            <div className = "media-heading">
            {video.snippet.title}
            </div>
          </div>

    </div>
    </li>
);
}

export default Videoitem;