import styled from 'styled-components';
import Topo from './Topo.jsx';
import ListaFlashcards from './ListaFlashcards';
import Rodape from './Rodape.jsx';

export default function Principal() {

  return (
    <>
      <Conteudo>
        <Topo />
        <ListaFlashcards  />
        </Conteudo>
        <Rodape />
      
    </>
  );
}

const Conteudo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FB6B6B;
    margin-bottom: 80px;
`;


//<ListaFlashcards cards={cards}/>
//<GlobalStyle />