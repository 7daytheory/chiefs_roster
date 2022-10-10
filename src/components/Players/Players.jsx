import Card from '../Card/Card';

import chiefs from '../../chiefs.js';

function createCard(chiefs) {
  return (
    <Card
    key={chiefs.PlayerID}
    url={chiefs.PhotoUrl}
    name={chiefs.FirstName}
    lastName={chiefs.LastName}
    position={chiefs.Position}
    num={chiefs.Number ? chiefs.Number : 'N/A'}
    exp={chiefs.Experience}
    age={chiefs.Age}
    heightFeet={chiefs.HeightFeet}
    heightInches={chiefs.HeightInches}
    weight={chiefs.Weight}
  />
);
}

function Players() {
  return (
    <div>
    {chiefs.map(createCard)}
    </div>
  );
}

export default Players;
