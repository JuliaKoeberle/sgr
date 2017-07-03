import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
console.log(video.snippet.thumbnails);
    return( 
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <p>{video.snippet.title}</p>
            <img src={video.snippet.thumbnails.medium.url} className="img-responsive" alt={video.snippet.title} />
        </li>
    )
};

export default VideoListItem;