import Card from '../Card/Card';

import patrickMahomes from '../../images/patrickMahomes.webp';
import justinReid from '../../images/justinReid.webp';

function Players() {
  return (
    <div>
        <Card
          url={patrickMahomes}
          name="Patrick Mahomes"
          position="QB"
          num="15"
          exp="5"
          age="25"
          height="6'2"
          weight="202"
          />

        <Card
          url={justinReid}
          name="Justin Reid"
          position="S"
          num="30"
          exp="3"
          age="24"
          height="6'1"
          weight="210"
          />
    </div>
  );
}

export default Players;
