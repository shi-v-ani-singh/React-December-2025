const ImgCard = (props) => {
  return (
    <div className='img-card'>

      <div className="date-badge">{props.date}</div>
      <img src={props.img} className="card-img" />

      <div className="info">
        <h1>{props.title}</h1>
        <p>{props.place}</p>
        <p>{props.time}</p>
      </div>
    </div >
  )
}

export default ImgCard