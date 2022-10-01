import patrickMahomes from '../src/images/patrickMahomes.webp';
import justinReid from '../src/images/justinReid.webp';

import Card from './components/Card/Card';

function App() {
  return (
      <header>
        <Card
          url={patrickMahomes}
          name="Patrick Mahomes"
          position="QB"
          num="15"
          exp="5 years"
          age="25"
          />

        <Card
          url={justinReid}
          name="Justin Reid"
          position="S"
          num="30"
          exp="3 years"
          age="24"
          />
      </header>
  );
}

export default App;
