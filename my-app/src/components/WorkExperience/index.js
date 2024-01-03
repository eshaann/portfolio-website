import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Typed from 'react-typed';
import Ria from '../../images/riaa.png';
import McD from '../../images/mcd.png';
import Fireside from '../../images/fireside.png'

function WorkExperience() {
  return (
    <Container fluid style={{ backgroundColor: 'white', minHeight: '100vh' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '50px', marginTop: '50px', color:"purple", position: "relative", zIndex: 5 }}>
      <Typed
      strings={["Work Experience"]}
      typeSpeed={40}
      showCursor={false}
      /> </h1>
    <Row className="d-flex justify-content-center">
      <Col xs={12} md={6}>
        <Card bg="dark" text="white" className="mb-3" style={{ minHeight: '200px' }}>
        <Card.Img variant="top" src={Ria} style={{ maxHeight: '150px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title>Software Engineering and Digital Intern</Card.Title>
            <Card.Subtitle className="mb-2" style={{ color: "#A9A9A9" }}>Ria Money Transfer</Card.Subtitle>
            <Card.Subtitle className="mb-2" style={{ color: "#A9A9A9" }}>Summer 2022</Card.Subtitle>
            <Card.Text>
              <ul>
                <li>Built a webscaper in C# to gather competitor money transfer rates for key corridors and store in SQL database</li>
                <li>Automated data collection of competitor rates - shaved 30+ minutes per day if done manually</li>
                <li>Built Vue js component for digital app and Angular js component for internal-utilized Selenium for Webdriver</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="dark" text="white" className="mb-3" style={{ minHeight: '200px' }}>
        <Card.Img variant="top" src={McD} style={{ maxHeight: '200px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title>Kitchen Crew Member</Card.Title>
            <Card.Subtitle className="mb-2" style={{ color: "#A9A9A9" }}>McDonald's</Card.Subtitle>
            <Card.Subtitle className="mb-2" style={{ color: "#A9A9A9" }}>May - August 2023</Card.Subtitle>
            <Card.Text>
              <ul>
                <li>Quickly and efficiently assembled and prepared a high volume of orders, demonstrating strong attention to detail and accuracy</li>
                <li>Adapted to fast-paced working conditions, effectively prioritizing tasks and maintaining a smooth workflow</li>
              </ul> 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="dark" text="white" className="mb-3" style={{ minHeight: '200px' }}>
        <Card.Img variant="top" src={Fireside} style={{ maxHeight: '150px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title>Cashier</Card.Title>
            <Card.Subtitle className="mb-2" style={{ color: "#A9A9A9" }}>Fireside Cafe</Card.Subtitle>
            <Card.Subtitle className="mb-2" style={{ color: "#A9A9A9" }}>October 2023 - Current</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default WorkExperience