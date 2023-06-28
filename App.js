import './Style.css';
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className= "containerImput">
        <input         
        type="text"
        placeholder="Digite seu CEP..."
        />

        <button classname="buttonSearch">
          Procurar
        </button>
        </div>
        <main className="main">?
          <h2>CEP: 03884100</h2>

          <spam>Rua Honorio Emiliano Bueno</spam>
          <spam>Complemento: 12345</spam>
        </main>
    </div>
  );
}

export default App;
