import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = "AIzaSyCxNxfwCqWR9p0EffNV8ZZecZbLeWpD8rM";
class App extends React.Component {

    state = { videos: [], selectedVideo: null};


    onSearchSubmit = async (term) => {
        const response = await youtube.get("/youtube/v3/search", {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY,
                safeSearch: 'none'
            }
        });
        
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });

    }


    onVideoSelect = (video) => {
        
        this.setState({selectedVideo: video});
    }

    componentDidMount() {
        this.onSearchSubmit('react programming');
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className='five wide column'>
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;