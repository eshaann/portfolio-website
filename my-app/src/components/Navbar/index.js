import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';
import { motion } from 'framer-motion';
import logo from '../../images/EshaanNai.png'

export default function Navigation() {
    //Cursor animation stuff
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  });
  useEffect(() => {
    const mouseMove = e => {
        setMousePosition({
            x:e.clientX,
            y:e.clientY
        })
    }
    window.addEventListener("mousemove", mouseMove);
    return () => {
        window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
        x:mousePosition.x - 16,
        y:mousePosition.y - 16
    }
  }
  return (
    <div>
    <Navbar bg="dark" variant = "dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/"> <img src={logo} alt="Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/Education">Education</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <motion.div className="cursor" variants={variants} animate="default"/>
    </div>

  )
}