import React from 'react';
import { Logo } from '../Logo';
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import { FooterWrapper, Title, Icon, Contact } from './styles';
import { StyledLink } from '../StyledLink';

export function Footer() {
  return (
    <FooterWrapper>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12">
            <div className="box">
              <Logo />
            </div>
          </div>

          <div className="col-md-3 col-12" id="p1">
            <Title>Nosotros</Title>
            <p>
              Contactanos para cotizaciones especiales en eventos y diseños
              florales exclusivos
            </p>
          </div>

          <div className=" col-md-3 col-12" id="p3">
            <Title>Contactanos</Title>
            <Contact>
              <Icon>
                <FaWhatsapp />
              </Icon>
              <StyledLink to="https://wa.me/525627152044">
                <h5>Whatsapp</h5>
              </StyledLink>
            </Contact>

            <Contact>
              <Icon>
                <FaInstagram />
              </Icon>
              <StyledLink to="https://www.instagram.com/omarprado.floraldesign/">
                <h5>Instagram</h5>
              </StyledLink>
            </Contact>
            <Contact>
              <Icon>
                <FaFacebook />
              </Icon>
              <StyledLink to="https://www.facebook.com/omarprado.floraldesigner">
                <h5>Facebook</h5>
              </StyledLink>
            </Contact>
            <Contact>
              <Icon>
                <FaEnvelope />
              </Icon>
              <h5>contacto@opfloraldesign.com</h5>
            </Contact>
          </div>
        </div>

        <hr />
      </div>
    </FooterWrapper>
  );
}


//https://wa.me/525627152044