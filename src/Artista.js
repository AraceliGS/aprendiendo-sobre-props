import React, { Component } from 'react';
import './Artista.css';
import PropTypes from 'prop-types';

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

Artista.defaultProps = {
  name: 'Araceli',
  img: 'katy_perry.jpg',
  bio: 'Soy Araceli. Mucho gusto!',
  canciones: ['Roar', 'Imagine', 'Boulevard Broken']
}
Artista.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  canciones: PropTypes.array.isRequired
}

export default Artista;