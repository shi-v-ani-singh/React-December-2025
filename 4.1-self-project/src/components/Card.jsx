function Card({ color }) {
  return (
    <div className="main-div">
      <div style={{ backgroundColor: color, width: "150px", height: "150px", borderRadius: "25px" }}>
      </div>
      <div className="color-name">
        <p>{color}</p>
      </div>
    </div>
  );
}

export default Card;
