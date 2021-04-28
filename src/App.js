import logo from './logo.svg';
import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Album from './Components/Album'
import Albums from './Components/Albums'
import Nav from './Components/Nav'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [
        {id: 1, artist: "unknown", album_title: "title", album_cover: "music", songs: "Song",img:"https://img.freepik.com/free-vector/retro-microphone-vintage-background-poster_1284-11700.jpg?size=626&ext=jpg"},
        {id: 2, artist: "swift", album_title: "you don't know", album_cover: "Music ", songs: "Sound Track2",img:"https://i.ytimg.com/vi/QE9f24372uA/maxresdefault.jpg"},
        {id: 3, artist: "vishnu kant", album_title: "setii mare", album_cover: "sara ali", songs: "Sound Track3",img:"https://i.ytimg.com/vi/5o-SeTPbMkM/maxresdefault.jpg"},
      ],
      errorMsg: ''
    }
  }
  render(){
  return (
    <div className="App">
      <Nav />
        <div className="container">
          <div className="row">
            <Album />
          </div>
          <div className="row">
            <div className="col-sm-3">
            <Albums albums={this.state.albums} />
            </div>
           
          </div>
        </div>
    </div>
  );
}
}
export default App;
