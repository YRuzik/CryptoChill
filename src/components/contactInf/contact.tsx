import {Container, ContainerItem } from './contact.style'
//@ts-ignore
import Eugene from '../../resources/img/Eugen.jpg'
//@ts-ignore
import Andrey from '../../resources/img/Andrey.jpg'
//@ts-ignore
import Github from '../../resources/img/github.png'

const Contact = () =>{
    return(
        <Container >
            <ContainerItem>
                <img width='350px' src={Eugene} />
                <h3>EUGENE RAZZHIVALOV</h3>
                <a href='https://github.com/byehappy'><img width='120px' src={Github} /></a>
            </ContainerItem>
            <ContainerItem>
                <img width='350px' src={Andrey} />
                <h3>ANDREY VAVANOV</h3>
                <a href='https://github.com/YRuzik'><img width='120px' src={Github} /></a>
            </ContainerItem>
        </Container>
    )
}

export default Contact;