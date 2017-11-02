import React,{Component} from 'react';

class VideoListItem extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        console.log(this.props.video);
        const videoObj = this.props.video;
        const videoUrl = videoObj.snippet.thumbnails.default.url;
        const title = videoObj.snippet.title;
        
        return (
            <a  onClick={()=>this.props.onVideoSelect(videoObj)} className="list-group-item">
                <div className="media">
                    <div className="media-left">
                        <img  src={videoUrl} alt={title} />
                    </div>
                    <div className="media-body ">
                        <div className="media-heading">
                            {title}
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}
export default VideoListItem;