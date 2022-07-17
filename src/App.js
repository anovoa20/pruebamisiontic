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
                    <i class="fa-solid fa-magnifying-glass button iconoBusqueda"></i>  
                </div>
            </li>
            <li><button class="button secondaryButton">Iniciar Sesión</button></li>
            <li><button class="button mainButton">Registro</button></li>
        </ul>
    </header>
    <main>
        <section>
            <h1>Razas de Perros</h1>
            <ul class="breedCardContainer">
                <li class="breedCard">
                    <div class="contenedorImagen">
                        <img src="./media/borderCollie.jpg" alt="Border Collie"/>
                    </div>
                    <span class="breedTitle">Border Collie</span>
                </li>
                <li class="breedCard">
                    <div class="contenedorImagen">
                        <img src="./media/rhodesian.jpg" alt="Rhodeesian"/>
                    </div>
                    <span class="breedTitle">Rhodeesian</span>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
