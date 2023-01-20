import { NavContainer, Box, BoxItem } from './Header.style';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import Logo from '../../resources/img/Logo.png'



const Header = () => {
    const on = {
        color: '#000000'
    }
    const off = {
        color: '#7e7e7e'
    }
    return (
        <div>
            <NavContainer>
                <Box style={{ textAlign: "center" ,paddingInlineStart:'0'}}>
                    <NavLink  to='/'>
                        <BoxItem>
                            <img src={Logo}/>
                        </BoxItem>
                        </NavLink>
                        <BoxItem>
                        <NavLink style={({ isActive }) =>
                                isActive ? on : off
                            } to='/'>
                            CRYPTO CHILL
                            </NavLink>
                        </BoxItem>
                </Box>
                <nav>
                    <Box>
                        <BoxItem
                            style={{ marginRight: '10px' }}>
                            <NavLink style={({ isActive }) =>
                                isActive ? on : off
                            }
                                to='/about'>
                                About us
                            </NavLink>
                        </BoxItem>
                        <BoxItem><NavLink style={({ isActive }) =>
                                isActive ? on : off
                            } to='/contacts'>Contact us</NavLink></BoxItem>
                    </Box>

                </nav>
            </NavContainer>
        </div>
    )
}

export default Header;
