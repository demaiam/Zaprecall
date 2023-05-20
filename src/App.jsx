import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Topo from './Topo.jsx';
import ListaFlashcards from './ListaFlashcards';
import Rodape from './Rodape.jsx';
import { useState } from 'react';

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
          concluidos={concluidos}
          setConcluidos={setConcluidos}/>
    </>
  );
}

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FB6B6B;
  }
`;