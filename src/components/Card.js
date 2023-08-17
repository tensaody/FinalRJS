// create one card, it has 3props, ចាំទទួល imagesURL, title and desc

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}
export default Card
// export to  outsite (App.js)





