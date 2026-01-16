import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaYoutube } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiNetlify, SiRender, SiVercel, SiNginx } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";



import {
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import { SiDjango, SiTailwindcss, SiPostgresql, SiMysql, SiPycharm, SiPostman } from "react-icons/si";


export default function Portfolio() {
  const canvasRef = useRef(null);

  // Tech grid animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const points = [];

    // Create random data nodes
    for (let i = 0; i < 80; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw nodes
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "#00e5ff";
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0,229,255,${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(circle at center, #0a0f1c 0%, #0d1117 100%)",
        color: "#fff",
        padding: "50px 0",
      }}
    >
      {/* Tech Grid Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Animated blue glow overlay */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle at 30% 70%, rgba(13,110,253,0.15), transparent 70%)",
          zIndex: 1,
        }}
        animate={{
          x: ["0%", "10%", "-10%", "0%"],
          y: ["0%", "-10%", "10%", "0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <Container style={{ position: "relative", zIndex: 2 }}>
   {/* HOME / HEADER */}
<section id="home" style={{ paddingTop: "50px" }}>
  <motion.div
    className="text-center mb-5"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <img
      src="https://github.com/alwinjstanley.png"
      alt="Alwin Joseph Stanley"
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        border: "3px solid #0d6efd",
        marginBottom: "20px",
      }}
    />
    <h1 className="fw-bold text-primary">Alwin Joseph Stanley</h1>


<p className="text-light mt-2">
  Python Full Stack Developer | React | Django | MySQL | REST APIs | JWT | Cloud Deployment
</p>



<div className="d-flex justify-content-center gap-3 mt-3">
      <Button
        style={{
          background: "linear-gradient(45deg, #0d6efd, #6610f2)",
          border: "none",
        }}
        href="https://www.linkedin.com/in/alwinjstanley/"
        target="_blank"
      >
        <FaLinkedin className="me-2" /> LinkedIn
      </Button>

      <Button
        style={{
          background: "linear-gradient(45deg, #0d6efd, #6610f2)",
          border: "none",
        }}
        href="https://github.com/alwinjstanley"
        target="_blank"
      >
        <FaGithub className="me-2" /> GitHub
      </Button>
    </div>

    
  </motion.div>
</section>


        {/* Objective */}
        <motion.div
  id="objective"
  className="mb-5"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
>
  <h3 className="border-start border-4 ps-3 mb-3 text-primary">Introduction</h3>
  <p className="text-light">
  I’m a Python Full Stack Developer specializing in building end-to-end web applications
  using React and Django. I help individuals, startups, and businesses turn ideas into
  reliable, scalable products — from clean user interfaces to secure backend systems
  and production-ready deployments.
</p>

<p className="text-light">
  My work includes frontend development, REST API design, authentication, database
  integration, and cloud deployment. I focus on writing clean, maintainable code and
  delivering solutions that are practical, efficient, and user-focused.
</p>



</motion.div>


        {/* Technical Skills */}
<motion.div
  id="skills"
  className="mb-5"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  <h3 className="border-start border-4 ps-3 mb-4 text-primary">
    Technical Skills
  </h3>

  <Row className="gy-3 justify-content-center">

    {[
      { name: "Python", icon: <FaPython size={20} /> },
      { name: "JavaScript", icon: <FaJs size={20} /> },
      { name: "React", icon: <FaReact size={20} /> },
      { name: "Django", icon: <SiDjango size={20} /> },
      { name: "HTML5", icon: <FaHtml5 size={20} /> },
      { name: "CSS3", icon: <FaCss3Alt size={20} /> },
      { name: "Bootstrap", icon: <FaBootstrap size={20} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
      { name: "MySQL", icon: <SiMysql size={20} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
      { name: "Git", icon: <FaGitAlt size={20} /> },
      { name: "GitHub", icon: <FaGithub size={20} /> },
      { name: "VS Code", icon: <VscVscode size={20} /> },
      { name: "PyCharm", icon: <SiPycharm size={20} /> },
      { name: "Postman", icon: <SiPostman size={20} /> },
      { name: "AWS", icon: <FaAws size={20} /> },
      { name: "Netlify", icon: <SiNetlify size={20} /> },
      { name: "Render", icon: <SiRender size={20} /> },
      { name: "Vercel", icon: <SiVercel size={20} /> },
      { name: "Nginx", icon: <SiNginx size={20} /> },

    ].map((skill, i) => (
      <Col xs="auto" key={i}>
        <Badge
          style={{
            background: "linear-gradient(45deg, #0d6efd, #6610f2)",
            color: "white",
            fontSize: "0.9rem",
            padding: "0.6rem 1rem",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {skill.icon}
          {skill.name}
        </Badge>
      </Col>
    ))}
  </Row>
</motion.div>



{/* Experience */}
<motion.div
  id="experience"
  className="mb-5"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
>
  <h3 className="border-start border-4 ps-3 mb-4 text-primary">
    Relevant Experiences
  </h3>

  <Row className="gy-4">

    <Col md={12}>
      <Card
        className="shadow-sm border-0 hover-zoom"
        style={{
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 0.05)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Card.Body>
          <Card.Title className="fw-bold text-info">
            Python Full Stack Developer Trainee – Techolas Technologies, Kochi
          </Card.Title>
          <Card.Subtitle className="mb-2 text-light">
            Nov 2024 – Present
          </Card.Subtitle>
          <Card.Text>
  
    • Developed full-stack web applications using <strong>React</strong> and
      <strong> Django</strong>, following modern development practices <br/>
    • Designed and implemented <strong>RESTful APIs</strong> for core application
      features including authentication and data management. <br/>
    • Implemented <strong>JWT-based authentication and authorization</strong> to
      ensure secure user access and role-based permissions. <br/>
    • Worked with <strong>MySQL and PostgreSQL</strong> for database design,
      relationships, and backend integration. <br/>
     •  Used <strong>Git and GitHub</strong> for version control and collaborated on
      codebases using structured workflows. <br/>
  
</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col md={12}>
      <Card
        className="shadow-sm border-0 hover-zoom"
        style={{
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 0.05)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Card.Body>
          <Card.Title className="fw-bold text-info">
            Freelance Web Developer – Remote
          </Card.Title>
          <Card.Subtitle className="mb-2 text-light">
            Sept 2023 – Nov 2024
          </Card.Subtitle>
          <Card.Text>
      • Designed and developed responsive, SEO-friendly websites 
      using HTML, CSS, JavaScript, and React. <br/>
      • Worked directly with clients to understand requirements and deliver
      end-to-end solutions. <br/>
      • Focused on UI/UX quality, performance optimization, and
      cross-browser compatibility. <br/>
      • Handled project delivery from development to deployment, ensuring
      reliable and maintainable outcomes. <br/>
</Card.Text>

        </Card.Body>
      </Card>
    </Col>

  </Row>
</motion.div>

{/* Projects Undertaken */}
<motion.div
  id="projects"
  className="mb-5"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  <h3 className="border-start border-4 ps-3 mb-4 text-primary">
    Projects Undertaken
  </h3>

  <Row className="gy-4">

    {[
      {
        title: "Hospital Management System (React + Django Full Stack)",
        github: "https://github.com/alwinjstanley/Hospital_Management",
        video: "https://youtu.be/UTepUEcdsy4?si=QZ9C0WGQivwIk4To",
        desc:  [
  <p> • Built a full-stack hospital management system using React for the frontend and Django for the backend <br/>
     • Designed RESTful APIs to manage patients, appointments, and medical records <br/>
   • Implemented JWT-based authentication and role-based access control for secure user management <br/>
   • Integrated Stripe payment gateway for online billing and transaction handling  <br/>
   • Ensured clean architecture, reusable components, and maintainable backend logic </p>
]
      },
      {
        title: "E-Commerce Clothing Store – Attire",
        github: "https://github.com/alwinjstanley/ATTIRE-ECOM",
        video: "https://youtu.be/Zc_5BOlPmJA",
        desc: <p>• Developed a modern and responsive e-commerce clothing website with a strong
        focus on clean UI/UX.
        <br />

        • Built reusable frontend components using HTML, CSS, JavaScript, and
        Bootstrap.
        <br />

        • Implemented product listing layouts and responsive design for multiple
        screen sizes.
        <br />

        • Focused on performance, accessibility, and visual consistency.
        </p>
      },
      {
  title: "Amaze Academy Website (Freelance Work)",
  github: "https://theamazeacademy.com/",
  video: null,
  isLiveSite: true,
  desc: (
    <p>
      • Contributed to the development of the Amaze Academy website as part of a collaborative freelance project.
      <br />

      • Developed responsive UI components to ensure compatibility across desktop, tablet, and mobile devices.
      <br />

      • Worked closely with team members to integrate frontend features with backend functionality.
      <br />

      • Focused on clean UI design, usability, and performance optimization for a production website.
    </p>
  )
},
      {
        title: "Travel Company Website",
        github: "https://github.com/alwinjstanley/TRAVELS-UI",
        video: null,
        desc: <p> • Designed and developed an interactive travel website showcasing destinations
        and travel packages.
        <br />

        • Implemented responsive layouts and smooth UI interactions.
        <br />

        • Focused on visual appeal, usability, and mobile-first design principles.</p>}
      

    ].map((p, i) => (
      <Col md={12} key={i}>
        <Card
          className="shadow-sm border-0 hover-zoom"
          style={{
            borderRadius: "15px",
            background: "rgba(255, 255, 255, 0.05)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Card.Body>

            {/* Title */}
            <Card.Title className="fw-bold text-info">{p.title}</Card.Title>

            {/* Centered Icon Links */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                margin: "10px 0 15px 0",
              }}
            >
             {p.github && (
  <a
    href={p.github}
    target="_blank"
    rel="noopener noreferrer"
    className="project-icon"
  >
    {p.isLiveSite ? <FaGlobe size={22} /> : <FaGithub size={22} />}
  </a>
)}


              {p.video && (
                <a
                  href={p.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                >
                  <FaYoutube size={26} />
                </a>
              )}
            </div>

            {/* Description */}
            <Card.Text>{p.desc}</Card.Text>

          </Card.Body>
        </Card>
      </Col>
    ))}

  </Row>

  <style>{`
    .project-icon {
      color: #0d6efd;
      transition: 0.3s ease;
    }

    .project-icon:hover {
      color: #6610f2;
      transform: scale(1.25);
    }
  `}</style>
</motion.div>

{/* Call To Action */}
<motion.div
  id="contact"
  className="text-center my-5 py-5"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  style={{
    background: "rgba(255, 255, 255, 0.04)",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)",
  }}
>
  <h2 className="text-primary fw-bold mb-3">
    Let’s Build Something Together
  </h2>

  <p className="text-light mb-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
    I’m available for freelance projects, contract work, and full-time roles.
    If you’re looking for someone who can design, develop, and deploy
    reliable web applications, I’d love to collaborate.
  </p>


  <div className="d-flex justify-content-center gap-3 flex-wrap">

    <Button
    variant="outline-primary"
    href="https://www.linkedin.com/in/alwinjstanley/"
    target="_blank"
    style={{
      padding: "10px 22px",
      fontSize: "1rem",
    }}
  >
    <FaLinkedin className="me-2" />
    LinkedIn
  </Button>
  <Button
    href="mailto:alwinstanley1@gmail.com"
    style={{
      background: "linear-gradient(45deg, #0d6efd, #6610f2)",
      border: "none",
      padding: "10px 22px",
      fontSize: "1rem",
    }}
  >
    <FaEnvelope className="me-2" />
    Get in Touch
  </Button>

  <Button
    variant="outline-primary"
    href="tel:+919645964088"
    style={{
      padding: "10px 22px",
      fontSize: "1rem",
    }}
  >
    <FaPhone className="me-2" />
    Call Me
  </Button>

  
</div>
<br/>
 <p className="text-light">
      <FaEnvelope className="me-2" /> alwinstanley1@gmail.com |{" "}
      <FaPhone className="mx-2" /> +91 96459 64088
    </p>

</motion.div>




 {/* Certifications & Achievements */}
<motion.div
  id="certifications"
  className="mb-5"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  <h3 className="border-start border-4 ps-3 mb-4 text-primary">
    Certifications & Other Achievements
  </h3>

  <Row className="gy-4">

    {/* Certifications */}
    {[
      
      {
        title: "National Council for Technology and Training (NACTET)",
        desc: "Python Full Stack Development",
      },
      {
        title: "Business English Certificate (BEC)",
        desc: "Cambridge University",
      },
      {
        title: "IELTS – Overall 8.0 Band (No band below 7)",
        desc: "Cambridge University",
      },
      {
        title: "Python Full Stack Development Certificate",
        desc: "Techolas Technologies, Kochi",
      }
    ].map((item, i) => (
      <Col md={12} key={i}>
        <Card
          className="shadow-sm border-0 hover-zoom"
          style={{
            borderRadius: "15px",
            background: "rgba(255, 255, 255, 0.05)",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Card.Body>
            <Card.Title className="fw-bold text-info">{item.title}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}

    {/* Achievements */}

    {/* Kerala PSC Rank */}
    <Col md={12}>
      <Card
        className="shadow-sm border-0 hover-zoom"
        style={{
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 0.05)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Card.Body>
          <Card.Title className="fw-bold text-info">
            Kerala PSC Rank Holder
          </Card.Title>
          <Card.Text>
             Assistant, Kerala Administrative Tribunal (KAT).
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Music Performance (merged) */}
    <Col md={12}>
      <Card
        className="shadow-sm border-0 hover-zoom"
        style={{
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 0.05)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Card.Body>
          <Card.Title className="fw-bold text-info">Freelance Musician</Card.Title>
          <Card.Text>
            Skilled in Piano and Drums; performed with various playback singers and artists.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Orchestra Achievement */}
    <Col md={12}>
      <Card
        className="shadow-sm border-0 hover-zoom"
        style={{
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 0.05)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(6px)",
        }}
      >
      </Card>
    </Col>

  </Row>
</motion.div>



        {/* Interests */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="border-start border-4 ps-3 mb-3 text-primary">
            Areas of Interest
          </h3>
          <Row className="gy-2 justify-content-center">
            {[
              "Information Technology",
              "Web Development",
              "Academic Research",
              "Social Media Management",
              "Content Writing",
              "Video Editing",
              "Music (Piano & Drums)",
            ].map((interest, i) => (
              <Col xs="auto" key={i}>
                <Badge
                  style={{
                    background: "linear-gradient(45deg, #0d6efd, #6610f2)",
                    color: "white",
                    fontSize: "0.9rem",
                    padding: "0.5rem 0.8rem",
                  }}
                >
                  {interest}
                </Badge>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Languages */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="border-start border-4 ps-3 mb-3 text-primary">
            Languages Known
          </h3>
          <Row className="gy-2 justify-content-center">
            {["English", "Hindi", "Malayalam"].map((lang, i) => (
              <Col xs="auto" key={i}>
                <Badge
                  style={{
                    background: "linear-gradient(45deg, #0d6efd, #6610f2)",
                    color: "white",
                    fontSize: "0.9rem",
                    padding: "0.5rem 0.8rem",
                  }}
                >
                  {lang}
                </Badge>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-5 pt-4 border-top text-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="mb-0">
            © {new Date().getFullYear()} Alwin Joseph Stanley | Full Stack
            Developer
          </p>
        </motion.div>
      </Container>

      <style>{`
  .hover-zoom {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .hover-zoom:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 12px 25px rgba(13, 110, 253, 0.3);
  }

  /* ⭐ Custom Futuristic Scrollbar ⭐ */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #0d1117;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #0d6efd, #6610f2);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #6610f2, #0d6efd);
  }
`}</style>

    </div>
  );

}



