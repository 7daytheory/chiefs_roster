import Players from './components/Players/Players';
import Avatar from './components/Avatar/Avatar';

import patrickMahomes from './images/patrickMahomes.webp';

function App() {
  return (
    <div>
      <header className="center">
        <h2>Player List</h2>
        <Avatar
          url={patrickMahomes}
          alt="Patrick Mahomes"
        />
        <p>Captain of KC Chiefs</p>
      </header>
      <Players />
    </div>
  );
}

export default App;
