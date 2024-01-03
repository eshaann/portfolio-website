import React from 'react'
import './index.css';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = (props) => {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghUrl} target="_blank">Go to project</Button>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard