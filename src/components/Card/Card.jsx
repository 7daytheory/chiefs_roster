import './Card.css';

function Card(props) {
  console.log(props);
    return (
      <div className="card">
        <div className="top">
        <h2 className="name">{props.name}</h2>
        <p className="num">#{props.num}</p>
        <p className="position">{props.position}</p>
        <img
          className="player_image"
          src={props.url}
          alt={props.name}
        />
        </div>
        <p className="height">{props.height}</p>
        <p className="weight">{props.weight}</p>
        <p className="exp">{props.exp}</p>
        <p className="age">{props.age}</p>
      </div>
    )
}

export default Card;
