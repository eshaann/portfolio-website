import React from 'react'
import Typed from 'react-typed';
import './projects.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Cursor from '../components/Cursor';
import ProjectCard from '../components/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

const projectData = [
  // replace this data with your actual data
  { title: 'ParkR', description: 'Some quick example text to build on the card title and make up the bulk of the card content.', imgUrl: 'link-to-project-1-image', ghUrl: 'Github-link-of-project-1' },
  { title: 'Zamnazon', description: 'Some quick example text to build on the card title and make up the bulk of the card content.', imgUrl: 'link-to-project-2-image', ghUrl: 'Github-link-of-project-2' },
  { title: 'Kmeans algorithm', description: 'Some quick example text to build on the card title and make up the bulk of the card content.', imgUrl: 'link-to-project-3-image', ghUrl: 'Github-link-of-project-3' },
  { title: 'EcoLink', description: 'Some quick example text to build on the card title and make up the bulk of the card content.', imgUrl: 'link-to-project-1-image', ghUrl: 'Github-link-of-project-1' },
  // add more projects...
];

const particlesInit = async (main) => {
  await loadFull(main);
};

function Projects() {
  return (
    <div>
      <div className="bg">
        <Particles
style={{
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 3
}}
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
      <Container className="project-container">
      <h1 style={{ textAlign: 'center', marginBottom: '50px', marginTop: '50px', color:"purple", position: "relative", zIndex: 5 }}>
      <Typed
      strings={["Projects"]}
      typeSpeed={40}
      showCursor={false}
      /> </h1>
        <Row className="project-grid">
          {
            // map through your data to create grid
            projectData.map((project, i) => (
              <Col sm={12} md={6} key={i}>
                <ProjectCard  
                  title={project.title}
                  description={project.description}
                  imgUrl={project.imgUrl}
                  ghUrl={project.ghUrl}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
      <Cursor />
    </div>
  )
}

export default Projects