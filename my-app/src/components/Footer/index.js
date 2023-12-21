import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <Container fluid style={{backgroundColor: '#343A40', color: '#fff', position: 'fixed', bottom: '0', width: '100%'}}>
      <Row className="justify-content-md-center text-center p-3">
        <Col md={6}>
          <div className="mt-3">
            <h2 style={{ color: '#fff' }}>Connect with me</h2>
            <a href="mailto:nair.eshaan@gmail.com" style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faGoogle} size="2x" style={{ margin: '0 15px' }} />
            </a>
            <a href="https://www.linkedin.com/in/yourLinkedInHandle" target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ margin: '0 15px' }} />
            </a>
            <a href="https://www.instagram.com/yourInstagramHandle" target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
              <FontAwesomeIcon icon={faInstagram} size="2x" style={{ margin: '0 15px' }} />
            </a>
            <a href="https://github.com/yourGithubHandle" target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
              <FontAwesomeIcon icon={faGithub} size="2x" style={{ margin: '0 15px' }} />
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center py-3">
          © 2023 Eshaan Nair All Rights Reserved.
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;