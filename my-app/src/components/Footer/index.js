import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faLinkedin, faInstagram, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <Container fluid style={{backgroundColor: '#343A40', color: '#fff', position: 'fixed', bottom: '0', width: '100%', zIndex: 9998}}>
      <Row className="justify-content-md-center text-center p-3">
        <Col md={6}>
          <div className="mt-3">
            <h2 style={{ color: '#fff' }}>Connect with me</h2>
            <SocialIcon url="mailto:nair.eshaan@gmail.com" style={{ height: 40, width: 40, margin: '0 15px' }}/>
            <SocialIcon network="linkedin" url="https://www.linkedin.com/in/eshaan-nair-29087621a/" style={{ height: 40, width: 40, margin: '0 15px' }}/>
            <SocialIcon network="instagram" url="https://www.instagram.com/virat.kohli/?hl=en" style={{ height: 40, width: 40, margin: '0 15px' }}/>
            <SocialIcon network="github" url="https://github.com/eshaann" style={{ height: 40, width: 40, margin: '0 15px' }}/>
          </div>
        </Col>
      </Row>
      <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: "purple", color: "white", border: "none", borderRadius: "50%", padding: "10px 15px" }}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </Container>
  );
}

export default Footer;