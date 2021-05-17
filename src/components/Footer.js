import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { Box, Divider, Typography } from '@material-ui/core';
import { PRIMARY_COLOR, WHITE_COLOR } from '../styles/colors';

const Footer = () => {
    return (
        <footer className="footer">
            <Row className="footer">
                <Col className="footer-column">
                    <Typography className="footer-txt" style={{ textAlign: 'center', fontSize: 20, color: '#eee' }}>
                        Need help? Call or send a message on whatsApp to our support team between 10AM and 8PM.</Typography>
                    <Box>
                        <Typography style={{ textAlign: 'center', fontSize: 35, marginTop: '.5rem', fontWeight: 'bold', color: 'brown' }}>08089021442</Typography>
                    </Box>                    
                </Col>
            </Row>
            <Divider style={{ backgroundColor: '#333' }} />
            <Row className="footer">
                <Col className="footer-column">
                    <div style={{ textAlign: 'center' }}>
                        <Image width={200} src={Logo} />
                        <Row style={{ display:'flex', justifyContent: 'center' }}>
                            <a className="footerLink social" href="https://web.facebook.com/Cable-Cinema-106682834896203" target="_blank"><FaFacebookF /></a>
                            <a className="footerLink social" href="https://twitter.com/cablecinema" target="_blank"><FaTwitter /></a>
                            <a className="footerLink social" href="https://www.instagram.com/thecablecinema/" target="_blank"><FaInstagram /></a>
                            <a className="footerLink social" href="mailto:hello@thecablecinema.com"><FaEnvelope /></a>
                        </Row>
                    </div>
                </Col>
                <Col className="footer-column">
                    <ul className="footerLinkGroup">
                        <Typography variant="h5" >Account</Typography>
                        <li className="footerLink"><Link className="footerLink" to="/">Account</Link></li>
                        <li className="footerLink"><Link className="footerLink" to="/">Register</Link></li>
                        <li className="footerLink"><Link className="footerLink" to="/">Login</Link></li>
                    </ul>
                </Col>
                <Col className="footer-column">
                    <ul className="footerLinkGroup">
                        <Typography variant="h5" >Company</Typography>
                        <li className="footerLink"><Link className="footerLink" to="/">Now Showing</Link></li>
                        <li className="footerLink"><Link className="footerLink" to="/">Cinemas</Link></li>
                        <li className="footerLink"><Link className="footerLink" to="/">About</Link></li>
                    </ul>
                </Col>
                <Col className="footer-column">
                    <ul className="footerLinkGroup">
                        <Typography variant="h5" >Info</Typography>
                        <li className="footerLink"><Link className="footerLink" to="/">FAQ</Link></li>
                        <li className="footerLink"><Link className="footerLink" to="/">Privacy Policy</Link></li>
                        <li className="footerLink"><Link className="footerLink" to="/">Terms of Use</Link></li>
                    </ul>
                </Col>
                <Col className="footer-column">
                    <ul className="footerLinkGroup">
                        <Typography variant="h5" >App Stores</Typography>
                        <li><Link to="/"><Image style={{ border: '1px solid #eee', borderRadius: 10, marginBottom: 10, marginTop: 5 }} width={120} src="https://mynollyapp.com/assets/images/play-store.png" /></Link></li>
                        <li><Link to="/"><Image style={{ border: '1px solid #eee', borderRadius: 10 }} width={120} src="https://mynollyapp.com/assets/images/apple-store.png" /></Link></li>
                    </ul>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer

