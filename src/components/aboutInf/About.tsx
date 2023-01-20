import { Content, ContentItemMcduck, ContentItemText } from "./About.style"
import McDuck from 'resources/img/McDuck_1.png'
import {useSelector} from "react-redux";

const About = () =>{
    const {bitcoin, ethereum, cardano, tether}: any = useSelector(state => state)
    return(
        <Content style={{paddingBottom: '11rem'}}>
            <ContentItemText>
                <h1>Information</h1>
                This web application provides information about the current states of 4 cryptocurrencies in real time.
                
                <h2 style={{marginBottom:'10px'}}>There are:</h2>
                <li>{bitcoin.name} <span style={{opacity: 0.5}}>{bitcoin.symbol}</span></li>
                <li>{ethereum.name} <span style={{opacity: 0.5}}>{ethereum.symbol}</span></li>
                <li>{cardano.name} <span style={{opacity: 0.5}}>{cardano.symbol}</span></li>
                <li>{tether.name} <span style={{opacity: 0.5}}>{tether.symbol}</span></li>
                
            </ContentItemText>
            <ContentItemMcduck style={{paddingLeft: '10%'}}><img alt={'mcDuck'} src={McDuck}></img></ContentItemMcduck>
        </Content>
    )
}

export default About
