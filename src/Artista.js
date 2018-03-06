import React, { Component } from 'react';
import './Artista.css';
import Shakira from './shakira.jpg'

class Artista extends Component {
  render() {
    const {name, img, bio} = this.props;
    // const name = this.props.name;
    // const img = this.props.img;
    // const bio = this.props.bio;
    const canciones = this.props.canciones.map((cancion, index) => {
      return <li key={index}>{cancion}</li>
    });
    return(
      <div>
        <img src={Shakira} alt={name}/>
        <h3>
          {name}
        </h3>
        <p>Biografía</p>
        <ul>
          {canciones}
        </ul>
        <p>{bio}</p>
      </div>
    )
  }
}

export default Artista;