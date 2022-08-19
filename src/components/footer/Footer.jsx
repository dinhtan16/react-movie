import React from 'react';
import './Footer.scss';


import {Link} from 'react-router-dom'
import bg from '../../assets/footer-bg.jpg'
import logo from '../../assets/tmovie.png'

const Footer = () => {
    return (
    <div className="footer" style={{backgroundImage:`url(${bg})`}}>
        <div className="footer__content">
            <div className="footer__content__logo">
               <div className="logo">
               <img src={logo} alt="" />
                <Link to='/'>TanFilms</Link>
               </div>
            </div>
            <div className="footer__content__menus">
                <div className="footer__content__menu">
                    <Link to='/'>Home</Link>
                    <Link to=''>Contact us</Link>
                    <Link to=''>Terms of Service</Link>
                    <Link to=''>About Tan</Link>
                </div>
                <div className="footer__content__menu">
                    <Link to='/'>Live</Link>
                    <Link to=''>Privacy</Link>
                    <Link to=''>FAQ</Link>
                    <Link to=''>Premium</Link>
                </div> <div className="footer__content__menu">
                    <Link to='/'>You must watch</Link>
                    <Link to=''>Recent Watch</Link>
                    <Link to=''>Top IDMB</Link>
                </div>
            </div>
        </div>

    </div>
    
        );
};

export default Footer;
