import React from 'react';
import './App.css';

/* import Imagem from './components/imagem/imagem.component'; */

import { Apresentacao } from './components/apresentacao/apresentacao.component';
import { Projetos } from './components/projetos/projetos.component'
import { Footer } from './components/footer/footer.component';

function App() {
  return (
    <div className='app'>
      <Apresentacao/>
      <Projetos/>
      <Footer/>
    </div>
  );
}

export default App;
