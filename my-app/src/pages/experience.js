import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import Typed from 'react-typed';
import './experience.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Cursor from '../components/Cursor'

function Experience() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <div>
            <div className="bg">
      <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "background": {
          color: "#000000", // Background color in hexadecimal format
        },
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#2900ff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#6600ff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }}
    />
      </div>
      <div>
      <Container fluid style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px', color:"purple"}}>Work Experience</h1>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={6}>
          <Card bg="dark" text="white" className="mb-3" style={{ minHeight: '200px' }}>
            <Card.Body>
              <Card.Title>Software Engineering and Digital Intern, Ria Money Transfer | Summer 2022</Card.Title>
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
            <Card.Body>
              <Card.Title>Kitchen Crew Member, McDonald’s | May - August 2023</Card.Title>
              <Card.Text>
                <ul>
                  <li>Quickly and efficiently assembled and prepared a high volume of orders, demonstrating strong attention to detail and accuracy</li>
                  <li>Adapted to fast-paced working conditions, effectively prioritizing tasks and maintaining a smooth workflow</li>
                </ul> 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white" className="mb-3" style={{ minHeight: '200px' }}>
            <Card.Body>
              <Card.Title>Cashier, Fireside Cafe | October 2023-current</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    <Cursor />
    </div>
  )
}

export default Experience