import './VideoItem.css';
import React from 'react';

//Destructor object prior to use sample
//const VideoItem = ({video}) => {
//    return <div>{video.snippet.title}</div>
//}
const VideoItem = (props) => {
    return (
        <div onClick={() => props.onVideoSelect(props.video)} className="item video-item">
            <img 
                alt={props.video.snippet.title}
                className="ui image"
                src={props.video.snippet.thumbnails.medium.url}>
            </img>
            <div className="content">
                <div className="header">
                    {props.video.snippet.title}
                </div>
            </div>
        </div>
    );
}


export default VideoItem;