import React, { useState } from 'react';
import beasts from '../assets/beasts.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function RenderBeast({title, imageURL, description, onClick}) {
  const [favCount, setFavCount] = useState(0);

  const increaseFavs = () => setFavCount(favCount + 1);

  return (
    <Card>
      <Card.Img variant="top" src={imageURL} alt='Horned Beast Image' onClick={onClick} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button onClick={increaseFavs} variant="primary">❤️ : {favCount}</Button>
      </Card.Body>
    </Card>
  )
}

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState(null);

  const openModal = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedBeast(null);
    setShowModal(false);
  };

  const loadBeasts = () => {
    return beasts.map((beast, index) => (
      <section className='beastCard' key={index}>
        <RenderBeast
          title={beast.title}
          imageURL={beast.image_url}
          description={beast.description}
          onClick={() => openModal(beast)}
        />
      </section>
    ));
  };

  return (
    <main className='main'>
      <div className="grid-container">{loadBeasts()}</div>
      {selectedBeast && (
        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedBeast.image_url} alt={selectedBeast.title} style={{ maxWidth: '100%' }} />
            <p>{selectedBeast.description}</p>
          </Modal.Body>
        </Modal>
      )}
    </main>
  )
}

export default Gallery;
