import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import YTSearch from 'youtube-api-search';

import SearchComponent from './components/search_component';
import VideoList from './components/video_list_component';
import VideoDetailComponent from './components/video_detail_component';

const API_KEY = 'AIzaSyCXQp4KOCgIF1Xmo6NwonPXvFojhq7FOnU';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchVideos : [],
            selectedVideo: null
        };
        this.searchVideo('React Tutorial');
    }
    searchVideo(term){
        YTSearch({ key: API_KEY, term: term, max: '1-50' }, response => {
            this.setState({searchVideos: response, selectedVideo: response[0]});
        });
    }
    render() {
    return (
        <div className="container">
            
                <div className="form-group">
                    <SearchComponent onkeyChange={term=>this.searchVideo(term)}/>
                </div>
                <div className="form-group">
                    <VideoDetailComponent  video={this.state.selectedVideo} />
                </div>
                <div className="col-md-5 pull-right form-group">
                    <VideoList onVideoSelect = { selectedVideo=>this.setState({selectedVideo}) } videos={this.state.searchVideos} />
                </div>
            
        </div>
        
    );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
 registerServiceWorker();
