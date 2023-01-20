import { Container, ContainerContentFirst, ContainerContentSecond, Description, ImagePlace, Name, ScocialItem } from './Contact.style'

import Eugene from 'resources/img/Eugen.jpg'
import Andrey from 'resources/img/Andrey.jpg'


const Contact = () => {
    return (
        <>
            <Container>
                <ImagePlace>
                    <img alt={'developer_andrey'} src={Andrey} style={{ width: '100%' }} />
                </ImagePlace>
                <ContainerContentFirst>
                    <Name>ANDREY VAVANOV </Name>
                    <Description>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                    </Description>
                    <div>
                        <ScocialItem style={{textAlign:'end',paddingRight:'1%', right: 0}}>
                            <a target='_blank' rel={'noreferrer'} href='https://github.com/YRuzik'>
                                <i className="fa-brands fa-github fa-2x" />
                            </a>
                            <a target='_blank' rel={'noreferrer'} href='https://t.me/xsivv'>
                                <i className="fa-brands fa-telegram fa-2x" />
                            </a>
                            <a target='_blank' rel={'noreferrer'} href='https://vk.com/gdevsepeople'>
                                <i style={{paddingLeft:'7px',paddingRight:'7px'}} className="fa-brands fa-vk fa-2x" />
                            </a>
                        </ScocialItem>
                    </div>
                </ContainerContentFirst>
            </Container>
            <Container style={{ direction: 'rtl' }}>
                <ImagePlace>
                    <img alt={'developer_eugene'} src={Eugene} style={{ width: '101%' }} />
                </ImagePlace>
                <ContainerContentSecond>
                    <Name>EVGENY RAZZHIVALOV</Name>
                    <Description style={{ direction: 'ltr', textAlign:'left' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                    </Description>
                    <div>
                        <ScocialItem style={{left: '1%'}}>
                            <a target='_blank' rel={'noreferrer'} href='https://vk.com/eugeneraz'>
                               <i style={{paddingLeft:'7px',paddingRight:'7px'}} className="fa-brands fa-vk fa-2x" />
                            </a>
                            <a target='_blank' rel={'noreferrer'} href='https://t.me/byhappys'>
                               <i className="fa-brands fa-telegram fa-2x" />
                            </a>
                            <a target='_blank' rel={'noreferrer'} href='https://github.com/byehappy'>
                                <i className="fa-brands fa-github fa-2x" />
                            </a>
                        </ScocialItem>
                    </div>
                </ContainerContentSecond>
            </Container>
        </>
    )
}

export default Contact;
