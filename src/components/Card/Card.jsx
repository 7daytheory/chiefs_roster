import './Card.css';
import Avatar from '../Avatar/Avatar';

function Card(props) {
    return (
      <div className="card">
        <div className="top">
        <h2 className="name">{props.name}</h2>
        <p className="position">{props.position}</p>
          <Avatar
          url={props.url}
          alt={props.name}
          />
        </div>
        <div className="bottom">
        <h3 className="info">Player Info</h3>
        <p className="height">Height : {props.height}</p>
        <p className="weight">Weight : {props.weight}</p>
        <p className="age">Age : {props.age} years</p>
        <p className="exp">{props.exp} Years Experience</p>
        <p className="num">#{props.num}</p>
        </div>
      </div>
    )
}

export default Card;
