import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/gus.png";
import chatify from "../../Assets/Projects/image.png";
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
              title="GitHub-User-Search"
              description="A web application that allows users to search for GitHub profiles and retrieve key details such as repositories, followers, and activity stats. Built with TailwindCSS, React, JavaScript, GitHub API, it features a clean UI, fast search functionality, and responsive design. This project showcases expertise in API integration, frontend development, and dynamic data rendering."
              ghLink="https://github.com/Mahiamk/github-user-search"
              demoLink="https://anwarkoji.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="I-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Mahiamk"
              demoLink="https://blogs.Anwarkoji.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Daily-Pulse"
              description="A custom-built news reader that aggregates and curates real-time headlines from multiple sources, delivering a streamlined and personalized reading experience. Designed with a clean UI and efficient content parsing, it provides users with an intuitive way to stay informed. Developed with TailwindCSS, React, Node.js, APIs, Daily Pulse demonstrates expertise in web development, data aggregation, and user-centric design."
              ghLink="https://github.com/Mahiamk/ALX_Capstone"
              demoLink="https://editor.Anwarkoji.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
