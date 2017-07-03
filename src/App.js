import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDfYfqjaxl_KP0ROZOxnmH5skdz13BiYZU';  //google api key
//React data flow rule: most parent component should be responsible for fetching the data

class App extends Component {
  constructor(props) {
      super(props);

      this.state = { videos: [] };

      YTSearch({key: API_KEY, term: 'react tutorial'}, (videos) => {
        this.setState({ videos });
        console.log(this.state.videos[0]);
      })
  }  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
              <SearchBar />
              <VideoDetail video={this.state.videos[0]}/>
            </div>
            <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
