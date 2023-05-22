import { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Topo from './components/Topo.jsx'
import ListaFlashcards from './components/ListaFlashcards';
import Rodape from './components/Rodape.jsx';

export default function App() {
  const [concluidos, setConcluidos] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Conteudo>
        <Topo />
        <ListaFlashcards
          concluidos={concluidos}
          setConcluidos={setConcluidos}/>
      </Conteudo>
      <Rodape 
          concluidos={concluidos}/>
    </>
  );
}

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FB6B6B;
  }
`;