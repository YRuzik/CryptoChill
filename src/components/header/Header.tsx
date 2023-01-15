import { NavContainer, Box, BoxItem } from './Header.style';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import Logo from './Logo'



const Header = () => {
    const on = {
        color: '#000000'
    }
    const off = {
        color: '#7e7e7e'
    }
    return (
        <div style={{ borderBottom: '1px solid black' }}>
            <NavContainer>
                <Box style={{ textAlign: "center" }}>
                    <NavLink  to='/'>
                        <BoxItem  >
                            <Logo />
                        </BoxItem>
                        </NavLink>
                        <BoxItem style={{ paddingLeft: '25px' }}>
                        <NavLink style={({ isActive }) =>
                                isActive ? on : off
                            } to='/'>
                            CRYPTO CHILL
                            </NavLink>
                        </BoxItem>
                </Box>
                <Box style={{ margin: '9%' }}></Box>
                <nav>
                    <Box>
                        <BoxItem
                            style={{ marginRight: '10px' }}>
                            <NavLink style={({ isActive }) =>
                                isActive ? on : off
                            }
                                to='/about-us'>
                                About us
                            </NavLink>
                        </BoxItem>
                        <BoxItem><NavLink style={({ isActive }) =>
                                isActive ? on : off
                            } to='/contact-us'>Contact us</NavLink></BoxItem>
                    </Box>

                </nav>
            </NavContainer>
        </div>
    )
}

export default Header;
