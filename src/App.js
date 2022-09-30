function Card() {
    return (
      <div>
        <h2>Patrick Mahomes</h2>
        <img src="images/thisimage.png"
        alt="Patrick Mahomes"
        />
        <p>123 456 789</p>
        <p>height</p>
        <p>Weight</p>
      </div>
    )
}

function App() {
  return (
      <header>
          <Card />
          <Card />
      </header>
  );
}

export default App;
