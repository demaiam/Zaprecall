import logo from '.././assets/logo.png';
import styled from 'styled-components';

export default function Topo() {
    return (
        <>
            <Cabecalho>
                <img src={logo} alt="logo" />
                <a>ZapRecall</a>
            </Cabecalho>
        </>
    );
}

const Cabecalho = styled.div`
    padding: 20px;
    width: 230px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: 'Righteous', cursive;
    font-size: 36px;
    font-weight: 400;
    color: #FFFFFF;
    img {
        height: 60px;
        width: 52px;
    }
`;