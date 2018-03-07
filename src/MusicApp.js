import React, { Component } from 'react';
import './MusicApp.css';
import Artista from './Artista';
import items from './data/menu';

class MusicApp extends Component {
  render() {

    return (
      <div>
       <Artista items={items}/>
      </div>
    );
  }
}



export default MusicApp;
