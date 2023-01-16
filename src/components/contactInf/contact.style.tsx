import styled from 'styled-components';

const TextContent =`
    font-family: 'Quicksand';
    font-style: normal;
    font-size: 30px;
`

export const Container = styled.div`
    padding-top: 35px;
    display:flex;
    justify-content: center;
    align-items:center;
`

export const ContainerItem = styled.div`
    width:45%;
    ${TextContent};
`