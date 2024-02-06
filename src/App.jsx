import Header from './layout/Header';
import Banner from './layout/Banner';
import Categorias from './layout/Categorias';
import Vitrine from './layout/Vitrine';
import Parceiros from './layout/Parceiros';
import ProdutosRelacionados from './layout/ProdutosRelacionados';
import Marcas from './layout/Marcas';
import Footer from './layout/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categorias />
      <Vitrine />
      <Parceiros />
      <ProdutosRelacionados />
      <Marcas />
      <Footer />
    </div>
  );
}

export default App;
