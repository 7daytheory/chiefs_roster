import patrickMahomes from '../src/images/patrickMahomes.webp';
import justinReid from '../src/images/justinReid.webp';

function Card(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <h3>{props.position}</h3>
        <h3>{props.num}</h3>
        <img
          src={props.url}
          alt={props.name}
        />
        <p>{props.exp}</p>
        <p>{props.age}</p>
      </div>
    )
}

function App() {
  return (
      <header>
      <Card
        url={patrickMahomes}
        name="Patrick Mahomes"
        position="Quarterback"
        num="15"
        exp="5 years"
        age="25"
        />

        <Card
          url={justinReid}
          name="Justin Reid"
          position="Safety"
          num="30"
          exp="3 years"
          age="24"
          />
      </header>
  );
}

export default App;
