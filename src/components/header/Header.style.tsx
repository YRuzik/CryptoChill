import styled from "styled-components";
import { Link } from "react-router-dom";
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
    justify-content: center;
    background-color:#FCFBFE;
    align-items:center;
    width:87%;
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
    margin-right:15px
`
export const Links = styled(Link)`
    display:flex;
    align-items:center;
    text-decoration:none;
`