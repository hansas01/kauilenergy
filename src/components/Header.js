import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    Badge
} from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectCart } from '../features/products/productSlice';
import KauilLogo from '../app/assets/img/LOGOOFICIAL300X87.png';

import '../css/Header.css'; // Import the CSS file

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const cart = useSelector(selectCart);
    const navigate = useNavigate();

    const handleNavLinkClick = () => {
        setMenuOpen(false);
    };

    const cartItemCount = cart.length;

    return (
        <Navbar dark style={{ backgroundColor: '#1E2146' }} sticky='top' expand='md'>
            <div className='container-fluid d-flex justify-content-between align-items-center'>
                <NavbarBrand className='ms-0' href='/'>
                    <img src={KauilLogo} alt='kauil logo' className='kauil-logo' />
                </NavbarBrand>
                {!menuOpen && (
                    <button
                        className="navbar-toggler order-md-1"
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                )}
                <Collapse isOpen={menuOpen} navbar className='order-md-3'>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/' onClick={handleNavLinkClick}>
                                <i className='fa fa-home fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/Cotizador' onClick={handleNavLinkClick}>
                                <i className='fa fa-calculator fa-lg' /> Cotizador
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/Casa-Kauil' onClick={handleNavLinkClick}>
                                <i className='fa fa-hammer fa-lg' /> Casa Kauil
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/Tienda' onClick={handleNavLinkClick}>
                                <i className='fa fa-shopping-cart fa-lg' /> Tienda
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/Nosotros' onClick={handleNavLinkClick}>
                                <i className='fa fa-info fa-lg' /> Nosotros
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/Contacto' onClick={handleNavLinkClick}>
                                <i className='fa fa-address-card fa-lg' /> Contacto
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/Blog' onClick={handleNavLinkClick}>
                                <i className='fa fa-book fa-lg' /> Blog
                            </NavLink>
                        </NavItem>
                        {cartItemCount > 0 && (
                            <NavItem>
                                <NavLink className='nav-link' to='/checkout' onClick={handleNavLinkClick}>
                                    <i className='fa fa-shopping-cart fa-lg' />
                                    <Badge color='success' pill className='ms-1'>
                                        {cartItemCount}
                                    </Badge>
                                </NavLink>
                            </NavItem>
                        )}
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
};

export default Header;
