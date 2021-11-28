import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../Footer/footer.css";

const Footer = () => {

  const SocialLogo = Link;
  const SocialIconLink = Link;

  return (
    <footer className = "footerContainer">
      <div className ="footerWrap">
        <section className = "socialMedia">
          <div className = "socialMediaWrap">
            <SocialLogo className ="socialIconLogo" to='/home'>Pizza</SocialLogo>
              <div className = "socialIcons">
                <a className ="SocialIconLink" href="https://www.facebook.com/" target="_blank" aria-label='Facebook'>
                  <FaFacebook />
                </a>
                <a className ="SocialIconLink" href="https://www.instagram.com/" target="_blank"  aria-label='Instagram'>
                  <FaInstagram />
                </a>
                <a className ="SocialIconLink" href="https://www.youtube.com/watch?v=nID9oWlxOuI" target="_blank"   aria-label='Youtube'>
                  <FaYoutube />
                </a>
                <a className ="SocialIconLink" href="https://twitter.com/?lang=en" target="_blank" aria-label='Twitter'>
                <FaTwitter />
              </a>
              <a className ="SocialIconLink" href="https://www.linkedin.com/" target="_blank"  aria-label='Linkedin'>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
