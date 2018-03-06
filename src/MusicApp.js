import React, { Component } from 'react';
import './MusicApp.css';
import Artista from './Artista';

class MusicApp extends Component {
  render() {
    return (
      <div>
       <Artista
       name='Shakira'
       bio='Shakira Isabel Mebarak Ripoll es una cantautora, productora y artista colombiana.'
       img='shakira.jpg'
       canciones= {['Ojos Así', 'Inevitable', 'Tú']}
       />
      </div>
    );
  }
}

export default MusicApp;
