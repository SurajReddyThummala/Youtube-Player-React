import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/Searchbar';
import YTSearch from 'youtube-api-search';
import Videolist from './components/Videolist';
import Videodetail from './components/Videodetail';
import _ from 'lodash';
const API_KEY = 'AIzaSyCGLyF_iF84DxIFxzMV2NLcfKfWm-NfIJA';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] , selectedVideo: null } ;
    this.videoSearch('UNT');
   
  }

    videoSearch(term){
      YTSearch({ key: API_KEY, term: term }, (videos) => {
        this.setState({ videos, selectedVideo: videos[0] });
      });
    }
    render(){
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 350 )
    return (
        <div>
      <SearchBar onSearchTermChange = {videoSearch} />
      <Videodetail video = {this.state.selectedVideo} />

      <Videolist 
      onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
      videos = {this.state.videos} />
      </div>
      );
  }
}
ReactDOM.render(<App />,document.querySelector('.container'));

