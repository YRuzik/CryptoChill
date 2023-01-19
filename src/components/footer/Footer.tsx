import {FooterContainer, FooterContent, FooterLink, Support, Wrapper} from "./Footer.style";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Link style={{fontWeight: 'bolder', textDecoration: 'none', color: "white"}} to={'/'}><h1>CRYPTO CHILL</h1></Link>
                <Wrapper>
                    <div style={{paddingBottom: '0.5rem'}}>
                        <FooterLink to={'about'}>About us</FooterLink>
                        <FooterLink to={'contacts'}>Contact us</FooterLink>
                    </div>
                    <div style={{opacity: 0.5}}>
                        © 2023 Crypto Chill. All right reserved.
                    </div>
                </Wrapper>
                <Support>
                    <ul>Support:
                        <li>yruzik@gmail.com</li>
                        <li>byehappy@yandex.ru</li>
                    </ul>
                </Support>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer;
