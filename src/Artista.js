import React, { Component } from 'react';
import './Artista.css';

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
      <div className="music-card">
        <div className="music-card-image">
         <img src={img} alt={name}/>
        </div>
        <div className="music-card-content">
          <h3 className="music-title-artist">{name}</h3>
          <p>Biografía</p>
          <ul>
           {canciones}
          </ul>
          <p>{bio}</p>
        </div>
      </div>
    )
  }
}

export default Artista;