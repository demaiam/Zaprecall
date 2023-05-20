import Flashcard from "./Flashcard.jsx";
import styled from "styled-components";

export default function ListaFlashcards( {concluidos, setConcluidos} ) {
    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
      ];

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