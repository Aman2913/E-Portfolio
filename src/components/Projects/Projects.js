import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Event Automation"
              description="Implemented automation to start and stop AWS EC2 instances during off-hours using AWS Lambda,
 EventBridge, and Terraform."
              ghLink="https://github.com/Aman2913/Event-Automation"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tourist Companion"
              description="Tourist Companion is a modern real estate web platform designed using HTML, CSS, and JavaScript to
 showcase premium properties with an elegant, user-friendly interface."
              ghLink="https://github.com/Aman2913/Tourist-Companion"
              demoLink="https://aman-luxury-villa.netlify.app/"
            />
          </Col>

          

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
