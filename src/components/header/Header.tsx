import { NavContainer,Box,BoxItem,Links} from './Header.style';
import {Link} from 'react-router-dom';
// @ts-ignore
import Logo from './Logo'

const Header = () => {

    return (
        <div style={{borderBottom: '1px solid black'}}>
        <NavContainer>
            <Box style={{textAlign:"center"}}>
            <Links to='/'>
                <BoxItem >
                <Logo/>
                </BoxItem>
                <BoxItem style={{paddingLeft:'25px'}}>
                CRYPTO CHILL
                </BoxItem>
                </Links>
            </Box>
            <Box style={{margin:'9%'}}></Box>
            <nav>
                <Box>
                    <BoxItem style={{marginRight: '10px'}}><Link style={{
                        color:'#7E7E7E',
                        textDecoration:'none'
                    }} to='/about-us'>About us</Link></BoxItem>
                    <BoxItem><Link style={{
                        color:'#7E7E7E',
                        textDecoration:'none'
                    }} to='/contact-us'>Contact us</Link></BoxItem>
                </Box>
                
            </nav>
        </NavContainer>
        </div>
    )
}

export default Header;
