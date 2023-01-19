import { Content, ContentItemMcduck, ContentItemText } from "./About.style"
import McDuck from 'resources/img/McDuck_1.png'

const About = () =>{
    return(
        <Content>
            <ContentItemText>
                <h1>Information</h1>
                This web application provides information about the current states of 4 cryptocurrencies in real time.
                
                    <h2 style={{marginBottom:'10px'}}>There are:</h2>
                    <li>Bitcoin</li>
                    <li>Ethereum</li>
                    <li>Tether</li>
                    <li>Cardano</li>
                
            </ContentItemText>
            <ContentItemMcduck style={{paddingLeft: '10%'}}><img width='75%' src={McDuck}></img></ContentItemMcduck>
        </Content>
    )
}

export default About
