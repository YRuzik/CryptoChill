import { Container, ImagePlace, ContainerText, Name, Description, Social, ScocialItem } from './Contact.style'
//@ts-ignore
import Eugene from '../../resources/img/Eugen.jpg'
//@ts-ignore
import Andrey from '../../resources/img/Andrey.jpg'
//@ts-ignore
import Github from '../../resources/img/github.png'

const Contact = () => {
    return (
        <>
            <Container>
                <ImagePlace>
                    <img src={Andrey} style={{ width: '100%' }} />
                </ImagePlace>
                <ContainerText>
                    <Name>ANDREY VAVANOV </Name>
                    <Description>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  <br />
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. <br />
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                    </Description>
                    <Social>
                        <ScocialItem>
                            <a href='https://github.com/YRuzik'>
                                <img style={{ opacity: 0.25 }} width='9%' src={Github} />
                            </a>
                            <a href='https://github.com/YRuzik'>
                                <img style={{ opacity: 0.25 }} width='9%' src={Github} />
                            </a>
                            <a href='https://github.com/YRuzik'>
                                <img style={{ opacity: 0.25 }} width='9%' src={Github} />
                            </a>
                            <a href='https://github.com/YRuzik'>
                                <img style={{ opacity: 0.25 }} width='9%' src={Github} />
                            </a>
                            <a href='https://github.com/YRuzik'>
                                <img style={{ opacity: 0.25 }} width='9%' src={Github} />
                            </a>
                            <a href='https://github.com/YRuzik'>
                                <img style={{ opacity: 0.25 }} width='9%' src={Github} />
                            </a>
                            <a href='https://github.com/YRuzik'>
                                <img style={{ opacity: 0.25 }} width='9%' src={Github} />
                            </a>

                        </ScocialItem>
                    </Social>
                </ContainerText>
            </Container>
            <Container style={{ direction: 'rtl' }}>
                <ImagePlace>
                    <img src={Eugene} style={{ width: '100%' }} />
                </ImagePlace>
                <ContainerText>
                    <Name>EUGEN RAZZHIVALOV</Name>
                    <Description>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  <br />
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. <br />
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                    </Description>
                    <Social>
                        <a href='https://github.com/YRuzik'>
                            <img width='9%' src={Github} />
                        </a>
                    </Social>
                </ContainerText>
            </Container>
        </>
    )
}

export default Contact;