import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaYoutube } from "react-icons/fa";

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

    <p className="fs-5 text-light">
      Python Full Stack Developer | React | Django | MySQL
    </p>

    <p className="text-light">
      <FaEnvelope className="me-2" /> alwinstanley1@gmail.com |{" "}
      <FaPhone className="mx-2" /> +91 96459 64088
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
    Hi, I’m Alwin Stanley — a motivated Python Full Stack Developer skilled in React and Django, with hands-on experience building responsive, secure, and scalable web applications. I’m passionate about solving real-world problems through clean code, strong logic, and continuous learning. I love creating user-focused, efficient solutions and enjoy working in collaborative environments where ideas can grow into meaningful products.
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
            Trained in HTML, CSS, Bootstrap, JavaScript, React, Python,
            Django, and MySQL. Developed full-stack applications with JWT
            authentication and REST APIs.
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
            Designed and maintained client websites using HTML, CSS, and
            JavaScript, React. Improved UI performance and SEO while collaborating
            with small teams.
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
        desc: "JWT authentication, role-based permissions, REST APIs for patient registration, appointment scheduling, and Stripe payment integration."
      },
      {
        title: "E-Commerce Clothing Store – Attire",
        github: "https://github.com/alwinjstanley/ATTIRE-ECOM",
        video: null,
        desc: "Modern and responsive clothing store with clean UI, built using HTML, CSS, JavaScript, and Bootstrap."
      },
      {
        title: "Travel Company Website",
        github: "https://github.com/alwinjstanley/TRAVELS-UI",
        video: null,
        desc: "Interactive travel website with destination showcases, smooth UI components, and responsive design."
      },
      {
        title: "E-Commerce Website (Django + Stripe)",
        github: null,
        video: null,
        desc: "User authentication, product management, shopping cart, and Stripe payment gateway integration."
      }
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
                  <FaGithub size={28} />
                </a>
              )}

              {p.video && (
                <a
                  href={p.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                >
                  <FaYoutube size={32} />
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

{/* Career Summary */}
<motion.div
  id="summary"
  className="mb-5"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.15 }}
>
  <h3 className="border-start border-4 ps-3 mb-3 text-primary">
    Career Summary
  </h3>

  <p className="text-light">
    After my graduation, I spent a few years preparing for the 
    <strong> UPSC Civil Services Examination</strong>, one of the toughest 
    competitive exams in the world. This journey strengthened my analytical 
    skills, sharpened my ability to learn quickly, and taught me how to stay 
    focused and disciplined under pressure. As the popular saying about UPSC 
    aspirants goes — <em>“A jack of all trades, master of none,”</em> — those 
    years gave me broad knowledge and the ability to approach problems from 
    multiple perspectives.
  </p>

  <p className="text-light">
    Alongside my preparation, I worked as a <strong>freelance musician </strong>  
     and contributed to our <strong>family business</strong>, gaining practical 
    experience in communication, teamwork, leadership, and day-to-day 
    operations. These roles helped shape my creativity and real-world 
    understanding of how people and systems work.
  </p>

  <p className="text-light">
    My interest in technology began in school, where I first explored 
    programming and became fascinated by how code could bring ideas to life. 
    Even during graduation, I stayed connected to programming through small 
    experiments and online learning. That curiosity eventually grew into a 
    clear direction and guided my transition into <strong>full stack 
    development</strong>.
  </p>

  <p className="text-light">
    Today, I focus on building clean, functional, and scalable applications 
    using modern technologies. I enjoy combining creativity with logic — 
    whether it’s crafting intuitive user interfaces or developing efficient 
    backend architectures. I’m constantly learning, improving, and working on 
    projects that reflect my passion for problem-solving and meaningful, 
    user-centric development.
  </p>
</motion.div>


        {/* Education */}
<motion.div
  id="education"
  className="mb-5"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.65 }}
>
  <h3 className="border-start border-4 ps-3 mb-4 text-primary">
    Education
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
            Bachelor of Arts — English Language & Literature
          </Card.Title>
          <Card.Subtitle className="mb-2 text-light">
            Mar Ivanios College (Autonomous), Trivandrum  
            <br /> University of Kerala
          </Card.Subtitle>
          <Card.Text>
            Aggregate: <strong>80.2%</strong>
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
            Higher Secondary Education (Science)
          </Card.Title>
          <Card.Subtitle className="mb-2 text-light">
            Sacred Heart HSS, Kozhikode
          </Card.Subtitle>
          <Card.Text>
            Aggregate: <strong>85.33%</strong>
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
            Secondary School Leaving Certificate (SSLC)
          </Card.Title>
          <Card.Subtitle className="mb-2 text-light">
            Infant Jesus EMS, Kozhikode
          </Card.Subtitle>
          <Card.Text>
            Aggregate: <strong>90%</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

  </Row>
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
    Certifications & Achievements
  </h3>

  <Row className="gy-4">

    {/* Certifications */}
    {[
      {
        title: "Python Full Stack Development Certificate",
        desc: "Techolas Technologies, Kochi",
      },
      {
        title: "Business English Certificate (BEC)",
        desc: "Cambridge University",
      },
      {
        title: "IELTS – Overall 8.0 Band (No band below 7)",
        desc: "Cambridge University",
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
            Ranked for the post of Assistant, Kerala Administrative Tribunal (KAT).
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
          <Card.Title className="fw-bold text-info">Music Performance</Card.Title>
          <Card.Text>
            Professional keyboard artist; performed with various playback singers, and has extensive live stage experience.
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
        <Card.Body>
          <Card.Title className="fw-bold text-info">
            Arts Fest & Orchestra Awards
          </Card.Title>
          <Card.Text>
            2× Second Prize in ‘Orchestra’ – Inter-College Arts Fest, University of Kerala.  
            Also represented at the 55th Kerala State School Arts Festival (Keyboard – Orchestra).
          </Card.Text>
        </Card.Body>
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
