import React, { Component } from 'react';
import './MusicApp.css';
import Artista from './Artista';


class MusicApp extends Component {
  render() {
    return (
      <div>
       <Artista
       name='Shakira'
       bio='Shakira Isabel Mebarak Ripoll​​ es una cantautora, productora discográfica, bailarina, modelo, empresaria, actriz, embajadora de buena voluntad de la UNICEF y filántropa colombiana.'
       img='shakira.jpg'
       canciones= {['Ojos Así', 'Inevitable', 'Tú']}
       />
      </div>
    );
  }
}



export default MusicApp;
