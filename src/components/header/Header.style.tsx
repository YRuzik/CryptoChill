import styled from "styled-components";
const TextBase =`
    font-family: 'Quicksand';
    font-style: 'normal';
    color: #7e7e7e;
    @media (min-width: 300px){
        font-size: 90%;
    }
    @media (min-width: 768px){
        font-size: 150%;
    }
    @media (min-width:1350px){
        font-size: 200%;
    }
    line-height:44px
    `

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    Height: 95px;
    @media (min-width: 300px) {
        margin: 0 auto ;
        justify-content: center;
    }
    @media (min-width: 768px) {
        margin: 0 auto ;
        justify-content: space-between;
    }
    align-items:center;
    max-width:65%;
`
export const Box = styled.ul`
    padding-inline-start:0;
    list-style-type: none;
    display:flex;
    text-decoration:none;
`
export const BoxItem = styled.li`
    ${TextBase};
    display:flex;
    align-items:center;
    margin-right:15px;
    a{text-decoration:none}
`