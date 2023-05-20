import { useState } from 'react';
import styled from 'styled-components'
import virar from './assets/seta_virar.png';
import play from './assets/seta_play.png';
import certo from './assets/icone_certo.png';
import quase from './assets/icone_quase.png';
import erro from './assets/icone_erro.png';

export default function Flashcard( props ) {
    const [conteudo, setConteudo] = useState('conteudo branco encolhido');
    const [iconeDireita, setIconeDireita] = useState('icone-direita');
    const [nomeIcone, setNomeIcone] = useState(play);
    const [rotacionar, setRotacionar] = useState('virar escondido');
    const [containerCaixas, setContainerCaixas] = useState('container-caixas escondido');
    const [texto, setTexto] = useState(`Pergunta ${props.indice + 1}`);
    const [estiloTexto, setEstiloTexto] = useState('texto');

    function playCard() {
        setTexto(props.question);
        setConteudo('conteudo amarelo estendido');
        setIconeDireita('icone-direita escondido');
        setRotacionar('virar');
    }

    function virarCard() {
        setTexto(props.answer);
        setRotacionar('virar escondido');
        setContainerCaixas('container-caixas');
    }

    function nao() {
        setTexto(`Pergunta ${props.indice + 1}`);
        setConteudo('conteudo branco encolhido');
        setContainerCaixas('container-caixas escondido');
        setIconeDireita('icone-direita');
        setNomeIcone(erro);
        setEstiloTexto('texto cor1 riscado');
    }

    function quaseNao() {
        setTexto(`Pergunta ${props.indice + 1}`);
        setConteudo('conteudo branco encolhido');
        setContainerCaixas('container-caixas escondido');
        setIconeDireita('icone-direita');
        setNomeIcone(quase);
        setEstiloTexto('texto cor2 riscado');
    }

    function zap() {
        setTexto(`Pergunta ${props.indice + 1}`);
        setConteudo('conteudo branco encolhido');
        setContainerCaixas('container-caixas escondido');
        setIconeDireita('icone-direita');
        setNomeIcone(certo);
        setEstiloTexto('texto cor3 riscado');
    }

    return (
        <>
            <ContainerCard>
                <div className={conteudo}>
                    <div className="padrao">
                        <p class={estiloTexto}>{texto}</p>
                        <img className={iconeDireita} src={nomeIcone} alt="play" onClick={() => playCard()} />
                        <img className={rotacionar} src={virar} alt="virar" onClick={() => virarCard()} />
                    </div>
                    <div className={containerCaixas}>
                        <button className="caixa1" onClick={nao}>Não lembrei</button>
                        <button className="caixa2" onClick={quaseNao}>Quase não lembrei</button>
                        <button className="caixa3" onClick={zap}>Zap!</button>
                    </div>
                </div>
            </ContainerCard>
        </>
    );
}

const ContainerCard = styled.div`
    .conteudo  {
        display: flex;
        flex-direction: column;
        width: 300px;
        color: #333333;
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        padding: 1em;
    }
    .container-caixas {
        display: flex;
        justify-content: space-between;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 12px;
    }
    img {
        cursor: pointer;
    }
    .padrao {
        position: relative;
    }
    .icone-direita {
        position: absolute;
        left: 280px;
        top: 15px;
    }
    .virar {
        position: absolute;
        left: 270px;
        top: 95px;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        box-sizing: content-box;
        border-radius: 5px;
        border: none;
        width: 85px;
        height: 37px;
        color: #FFFFFF;
        cursor: pointer;
    }
    .caixa1 {
        background: #FF3030;
    }
    .caixa2 {
        background: #FF922E;
    }
    .caixa3 {
        background: #2FBE34;
    }
    .branco {
        background-color: #FFFFFF;
    }
    .amarelo {
        background-color: #FFFFD4;
    }
    .escondido {
        display: none !important;
    }
    .estendido {
        height: 110px;
    }
    .encolhido {
        height: 50px;
    }
    .texto {

    }
    .riscado {
        text-decoration: line-through;
    }
    .cor1 {
        color: #FF3030;
    }
    .cor2 {
        color: #FF922E;
    }
    .cor3 {
        color: #2FBE34;
    }
`;


        //visibility: ${ (props) => props.selecionada ? 'visible' : 'hidden'};
        
    //background: ${ selecionadas.includes(key) ? '#FFFFD4' : '#FFFFFF'};