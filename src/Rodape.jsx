import styled from 'styled-components';

export default function Rodape() {
    return (
        <>
            <ContainerRodape>
                0/4 Concluídos
            </ContainerRodape>
        </>
    );
}

const ContainerRodape = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    height: 70px;
    width: 100%;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
`;