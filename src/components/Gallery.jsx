function HornedBeast(title, imageURL, description) {
  return (
    <section>
      <h2>{title}</h2>
      <img src={imageURL} alt='Animal Picture' title={title}></img>
      <p>{description}</p>
    </section>
  )
}

function Gallery() {
  return (
    <main>
      {HornedBeast('Rhino', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9oLhq3AB-1LDyZAPLQ7EtNhg04nfkjMxHDupQVTipDJpgUVEcrZZ6cCUiuN0fBHCBh4&usqp=CAU', 'This is a Rhino. Be nice.')}
      {HornedBeast('Unicorn', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-aF0EqtsPWd20nHAD7iuxTG3XivpxHhStg&usqp=CAU', 'This is a unicorn. Be nice.')}
    </main>
  )
}

export default Gallery;