import React, {
    Component
} from 'react';
import VideoListItem from './video_list_item_component';

class VideoList extends Component {
    render() {
        const VideoItems = this.props.videos.map((video) => {
            return <VideoListItem onVideoSelect={this.props.onVideoSelect} key={video.etag} video = { video } />
        });
        return ( <ul className="list-group">
                { VideoItems }
            </ul>      
        );
    }
}

export default VideoList;

