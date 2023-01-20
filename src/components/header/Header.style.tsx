import styled from "styled-components";
const TextBase =`
    font-family: 'Quicksand';
    font-style: 'normal';
    color: #7e7e7e;
    @media (min-width: 300px){
        font-size: 1rem;
    }
    @media (min-width: 768px){
        font-size: 150%;
    }
    @media (min-width:1350px){
        font-size: 200%;
    }
    line-height:44px;
    white-space: nowrap;
    `

export const NavContainer = styled.div`
    flex-direction: row;
    Height: 95px;
    @media (min-width: 300px) {
        display: inline-block;
        margin: 0 0;
        justify-content: center;
    }
    @media (min-width: 768px) {
        padding-top:2%;
        display: flex;
        margin: 0 auto ;
        justify-content: space-between;
    }
    align-items:center;
    max-width:70%;
`
export const Box = styled.ul`
    @media (min-width: 300px) {
        padding-inline-start:0;
    }
    list-style-type: none;
    display:flex;
    text-decoration:none;
    justify-content:flex-end;
`
export const BoxItem = styled.li`
    ${TextBase};
    display:flex;
    align-items:center;
    margin-right:15px;
    a{text-decoration:none}
    img{ 
        
        @media (min-width: 300px) {
            width: 4rem   
        };
        @media (min-width: 768px) {
            width: 6rem   
        };
        @media (min-width: 1024px) {
            width: 7rem   
        };
    }
`