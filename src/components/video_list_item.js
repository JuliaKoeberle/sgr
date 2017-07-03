import React from 'react';

const VideoListItem = ({video}) => {
console.log(video.snippet.thumbnails);
    return( 
        <li className="list-group-item">
            <p>{video.snippet.title}</p>
            <img src={video.snippet.thumbnails.medium.url} className="img-responsive" alt={video.snippet.title} />
        </li>
    )
};

export default VideoListItem;