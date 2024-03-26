import beasts from '../assets/beasts.json'

function HornedBeast(title, imageURL, description) {
  return (
    <section>
      <h2>{title}</h2>
      <img src={imageURL} alt='Animal Picture' title={title}></img>
      <p>{description}</p>
    </section>
  )
}

function loadBeasts() {
  const beastComponents = beasts.map(beast => (
    <>
      {HornedBeast(beast.title, beast.image_url, beast.description)}
    </>
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