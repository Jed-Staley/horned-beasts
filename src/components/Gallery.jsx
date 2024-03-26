import { useState } from 'react';
import beasts from '../assets/beasts.json'

function HornedBeast(title, imageURL, description) {
  const [favCount, setFavCount] = useState(0);

  const increaseFavs = () => setFavCount(favCount + 1);

  return (
    <section> 
      <h2>{title}</h2>
      <img src={imageURL} alt='Animal Picture' title={title}></img>
      <p>{description}</p>
      <button onClick={increaseFavs}>
        <span role="img" aria-label="Heart">❤️</span> Favorites: {favCount}
      </button>
    </section>
  )
}

function loadBeasts() {
  const beastComponents = beasts.map((beast, index) => (
    <section key={index}>
      {HornedBeast(beast.title, beast.image_url, beast.description)}
    </section>
  ));
  return beastComponents;
}

function Gallery() {
  return (
    <main>
      {loadBeasts()}
    </main>
  )
}

export default Gallery;