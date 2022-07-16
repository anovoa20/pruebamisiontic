import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <ul class="navbar">
            <li><img src="./media/logo.png" alt="Logo" class="logo"/></li>
            <li><button class="button mainButton">Nuevo post</button></li>
            <li>
                <div class="buscar">
                    <input placeholder="Buscar una Raza"/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </li>
            <li><button class="button secondaryButton">Iniciar Sesion</button></li>
            <li><button class="button mainButton">Registro</button></li>
        </ul>
    </header>
    <main>
        <section></section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
