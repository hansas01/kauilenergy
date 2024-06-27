import {Container, Row, Col} from "reactstrap";
import { Link } from "react-router-dom";
import '../css/Footer.css'; // Import the CSS file


const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row> 
                <Col xs={{ size: 4, offset: 1 }} sm="2">
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Inicio</Link>
                            </li>

                            <li>
                                <Link to='/Cotizador'>Cotizador</Link>
                            </li>
                            <li>
                                <Link to='/Tienda'>Tienda</Link>
                            </li>
                            <li>
                                <Link to='/Nosotros'>Nosotros</Link>
                            </li>
                            <li>
                                <Link to='/Contacto'>Contacto</Link>
                            </li>
                            <li>
                                <Link to='/Blog'>Blog</Link>
                            </li>

                        </ul>
                    </Col>
                    
                    <Col xs='6' sm='3' className='text-center'>
                        <h5>Siguenos en Redes</h5>
                        <a
                            className='btn btn-social-icon btn-linkedin'
                            href='https://www.linkedin.com/company/kauil-energy//'
                        >
                            <i className='fa fa-linkedin' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='https://www.facebook.com/KauilEnergyHyZ/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        
                        <a
                            className='btn btn-social-icon btn-whatsapp'
                            href='https://web.whatsapp.com/product/7155954227759682/5217771075382'
                        >
                            <i className='fa fa-whatsapp' />
                        </a>{' '}
                        {/*
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                        */}
                    </Col>
                    <Col sm='4' className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+527771075382'
                        >
                            <i className='fa fa-phone' /> +52 777 107 5382
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> info@kauilenergy.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer