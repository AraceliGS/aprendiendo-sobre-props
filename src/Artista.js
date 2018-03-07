import React, { Component } from 'react';
import './Artista.css';
import PropTypes from 'prop-types';

class Artista extends Component {
  render() {
    const {items} = this.props;
    console.log(this.props);

    return(
      <div>
        {items && items.map((item, key) => 
         <div key={item.id}className="music-card">
           <div className="music-card-image">
             <img src={item.img} alt={item.name}/>
           </div>
         <div className="music-card-content">
           <h3 className="music-title-artist">{item.name}</h3>
           <p>Biografía</p>
           <ul>
             {item.songs.map((song, index) => 
              <li key={song}>{song}</li>
             )}
           </ul>
           <p>{item.bio}</p>
         </div>
       </div>  
        )}
      </div>
    )
  }
}

Artista.defaultProps = {
  items : {
    name: 'Araceli',
    img: 'Araceli.jpg',
    bio: 'Soy Araceli, una estudiante de Laboratoria. Mucho gusto!',
    songs: ['Roar', 'Imagine', 'Boulevard Broken']
  }
}

Artista.propTypes = {
  items: PropTypes.array.isRequired
}

export default Artista;

/* <div className="music-card">
        <div className="music-card-image">
          {items && items.map((item, key) => 
            <img key={key} src={item.img} alt={item.name}/>)
          }
        </div>
        <div className="music-card-content">
          {items && items.map((item, key) => 
            <h3 key= {key} className="music-title-artist">{item.name}</h3>)
          }
          <p>Biografía</p>
          <ul>
            {songs.map((cancion, index) => 
             <li key={index}>{cancion}</li>
            )}
          </ul>
          {items && items.map((item, key) => 
            <p key={key}>{item.bio}</p>)
          }
        </div>
      </div> */