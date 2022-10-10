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
    num={chiefs.Number}
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
        {// <Card
        //   url={patrickMahomes}
        //   name="Patrick Mahomes"
        //   position="QB"
        //   num="15"
        //   exp="5"
        //   age="25"
        //   height="6'2"
        //   weight="202"
        //   />
        //
        // <Card
        //   url={justinReid}
        //   name="Justin Reid"
        //   position="S"
        //   num="30"
        //   exp="3"
        //   age="24"
        //   height="6'1"
        //   weight="210"
        //   />
      }
    </div>
  );
}

export default Players;
