import Flashcard from "./Flashcard.jsx";
import styled from "styled-components";
import cards from "./cards.js";

export default function ListaFlashcards( {concluidos, setConcluidos} ) {
    return (
        <>
            <ContainerLista>
                {cards.map ((card, index) => ( <Flashcard key={index} question={card.question} answer={card.answer} indice={index} concluidos={concluidos} setConcluidos={setConcluidos}/> ))}
            </ContainerLista>
        </>
    );
}

const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    margin-top: 10px;   
`;