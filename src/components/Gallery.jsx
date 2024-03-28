import React, { useState, useEffect } from 'react';
import beasts from '../assets/beasts.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function RenderBeast({ title, imageURL, description, onClick, favCount, increaseFavs }) {
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
  const [filterValue, setFilterValue] = useState(null);
  const [favCounts, setFavCounts] = useState({}); // State to hold favorite counts

  useEffect(() => {
    // Initialize favorite counts based on beasts
    const initialFavCounts = beasts.reduce((acc, beast) => {
      acc[beast.title] = 0;
      return acc;
    }, {});
    setFavCounts(initialFavCounts);
  }, []);

  const openModal = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedBeast(null);
    setShowModal(false);
  };

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "") {
      // Reset the filter when "All" option is selected
      setFilterValue(null);
    } else {
      setFilterValue(parseInt(selectedValue));
    }
  };

  const increaseFavs = (title) => {
    setFavCounts((prevCounts) => ({
      ...prevCounts,
      [title]: prevCounts[title] + 1,
    }));
  };

  const loadBeasts = () => {
    let filteredBeasts = beasts;
    if (filterValue !== null) {
      filteredBeasts = beasts.filter(beast => beast.horns === filterValue);
    }
    return filteredBeasts.map((beast) => (
      <section className='beastCard' key={beast.title}>
        <RenderBeast
          title={beast.title}
          imageURL={beast.image_url}
          description={beast.description}
          onClick={() => openModal(beast)}
          favCount={favCounts[beast.title]} // Pass favCount as prop
          increaseFavs={() => increaseFavs(beast.title)} // Pass function to increase favs
        />
      </section>
    ));
  };

  return (
    <main className='main'>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Filter by Number of Horns</Form.Label>
          <Form.Control as="select" custom onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="1">One Horn</option>
            <option value="2">Two Horns</option>
            <option value="3">Three Horns</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>
      </Form>
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
