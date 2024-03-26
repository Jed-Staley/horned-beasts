import { useState } from 'react';
import beasts from '../assets/beasts.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function loadBeasts() {
  const beastComponents = beasts.map((beast, index) => (
    <section key={index}>
      {HornedBeast(beast.title, beast.image_url, beast.description)}
    </section>
  ));
  return beastComponents;
}

function HornedBeast(title, imageURL, description) {
  const [favCount, setFavCount] = useState(0);

  const increaseFavs = () => setFavCount(favCount + 1);

  return (
    <Card style={{ width: '18rem', margin: '10px'}}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button onClick={increaseFavs} variant="primary">❤️ : {favCount}</Button>
      </Card.Body>
    </Card>
  )
}

function Gallery() {
  return (
    <main>
      {loadBeasts()}
    </main>
  )
}

export default Gallery;