function Card(props) {
  const cardStyle = {
    background:
      props.color ||
      "linear-gradient(135deg,rgb(203, 91, 17),rgb(252, 213, 37))", // Default color if no bgColor is provided
    padding: "20px",
    "border-radius": "15px",
    "box-shadow": "0 4px 15px rgba(0, 0, 0, 0.2)",
    color: "#fff",
    "text-align": "center",
    "max-width": "300px",
    margin: "20px auto",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };
  return (
    <div style={cardStyle} className="card">
      <h2 className="card-title">{props.name}</h2>
      <div className="card-content">
        <p>
          <strong>Email:</strong> {props.email}
        </p>
        <p>
          <strong>Age:</strong> {props.age}
        </p>
      </div>
    </div>
  );
}

export default Card;
