import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDfYfqjaxl_KP0ROZOxnmH5skdz13BiYZU';  //google api key
//React data flow rule: most parent component should be responsible for fetching the data

class App extends Component {
  constructor(props) {
      super(props);

      this.state = { 
        videos: [],
        selectedVideo: null
      };
      this.videoSearch('react tutorial');

  }

  videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({ 
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  } 

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},1000);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
              <SearchBar onSearchTermChange={videoSearch} />
              <VideoDetail video={this.state.selectedVideo}/>
          </div>
            <VideoList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
