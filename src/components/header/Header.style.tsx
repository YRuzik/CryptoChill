import styled from "styled-components";
const TextBase =`
    font-family: 'Quicksand';
    font-style: 'normal';
    color: #7e7e7e;
    font-size: 35px;
    line-height:44px
    `

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    Height: 95px;
    margin: 0 auto ;
    justify-content: space-between;
    background-color:#FCFBFE;
    align-items:center;
    width:65%;
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