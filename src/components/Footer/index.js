import React from 'react';
import { Logo } from '../Logo';
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import { FooterWrapper, Title, Icon, Contact } from './styles';

export function Footer() {
  return (
    <FooterWrapper>
       <hr />
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-12">
            <div className="box">
              <Logo />
            </div>
          </div>

          <div class="col-md-3 col-12" id="p1">
            <Title>Nosotros</Title>
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              eaque!
            </h5>
          </div>

          <div class=" col-md-3 col-12" id="p3">
            <Title>Contactanos</Title>
            <Contact>
              <Icon>
                <FaWhatsapp />
              </Icon>
              <h5>Whatsapp</h5>
            </Contact>
           
            <Contact>
              <Icon>
                <FaInstagram />
              </Icon>
              <h5>Instagram</h5>
            </Contact>
            <Contact>
              <Icon>
                <FaFacebook />
              </Icon>
              <h5>Facebook</h5>
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
