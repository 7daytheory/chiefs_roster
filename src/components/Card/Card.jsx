import './Card.css';
import chiefs from '../../chiefs.js';

function Card(props) {
    console.log(chiefs)
    return (
      <div className="card">
        <div className="top">
        <h2 className="name">{props.name}</h2>
        <p className="position">{props.position}</p>
        <img
          className="player_image"
          src={props.url}
          alt={props.name}
        />
        </div>
        <div className="bottom">
        <h3 className="info">Player Info</h3>
        <p className="height">Height : {props.height}</p>
        <p className="weight">Weight : {props.weight}</p>
        <p className="exp">{props.exp} Years Experience</p>
        <p className="age">Age : {props.age} years</p>
        <p className="num">#{props.num}</p>
        </div>
      </div>
    )
}

export default Card;
