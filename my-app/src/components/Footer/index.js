import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <Container fluid style={{backgroundColor: '#343A40', color: '#fff', position: 'fixed', bottom: '0', width: '100%'}}>
      <Row>
        <Col className="text-center py-3">
          <a href="https://www.linkedin.com/in/eshaan-nair-29087621a/" target="_blank" style={{ color: '#fff' }}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ margin: '0 15px' }} />
          </a>
          <a href="https://www.instagram.com/virat.kohli/?hl=en" target="_blank" style={{ color: '#fff' }}>
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ margin: '0 15px' }} />
          </a>
          <a href="https://github.com/eshaann" target="_blank" style={{ color: '#fff' }}>
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ margin: '0 15px' }} />
          </a>
          <div>© 2023 Eshaan Nair All Rights Reserved.</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer