import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

export function ShippingForm() {
  return (
    <Container>
      <Form
        name="contact paymentSucces"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        action="/succes"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact paymentSucces" />

        <p hidden>
          <label>
            Don´t fill this out: <input name="bot-field" />
          </label>
        </p>

        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control required size="lg" type="text" name="first-name" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Apellido(s)</Form.Label>
              <Form.Control required size="lg" type="text" name="last-name" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Celular</Form.Label>
              <Form.Control required size="lg" type="text" name="phone" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control required size="lg" type="text" name="email" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Fecha de Entrega (dd/mm) </Form.Label>
              <Form.Control required size="lg" type="text" name="schedule" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Horario de Entrega (am/pm)</Form.Label>
              <Form.Control required size="lg" type="text" name="hour" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Alcaldía</Form.Label>
              <Form.Control required size="lg" type="text" name="addres-1" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Dirección</Form.Label>
              <Form.Control required size="lg" type="text" name="addres-2" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label> Código Postal </Form.Label>
              <Form.Control required size="lg" type="text" name="zip-code" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group>
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows="5"
            placeholder="¿Qué quieres decirle a ésta persona con una tarjeta única?"
            name="info"
          />
        </Form.Group>
        <Button type="submit" variant="success">
          ¡Enviar!
        </Button>
      </Form>
    </Container>
  );
}
