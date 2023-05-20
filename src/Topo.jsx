import logo from './assets/logo.png';
import styled from 'styled-components';

export default function Topo() {
    return (
        <>
            <Cabecalho>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </Cabecalho>
        </>
    );
}

const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Righteous', cursive;
    color: #FFFFFF;
    img {
        height: 60px;
        width: 52px;
    }
    h1 {
        font-size: 36px;
        font-weight: 400;
    }
`;