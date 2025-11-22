import React, { useState } from "react";
import { Navbar as RBNavbar, Nav, Container } from "react-bootstrap";
import { FaCode } from "react-icons/fa"; // Developer icon

export default function NavBarComponent() {
  
  const [expanded, setExpanded] = useState(false);

  return (
    <RBNavbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      style={{
        background: "rgba(0, 0, 0, 0.35)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "8px 0",
        transition: "all 0.3s ease",
      }}
    >
      <Container>
        
        {/* Brand */}
        <RBNavbar.Brand
          href="#home"
          className="fw-bold"
          style={{
            color: "#0d6efd",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.35rem",
            letterSpacing: "1px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaCode size={22} />
          Alwin's Portfolio
        </RBNavbar.Brand>

        {/* Hamburger */}
        <RBNavbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
          style={{
            border: "none",
            outline: "none",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#0d6efd",
              margin: "6px 0",
              transition: "0.3s",
            }}
          ></span>
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#0d6efd",
              margin: "6px 0",
              transition: "0.3s",
            }}
          ></span>
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#0d6efd",
              margin: "6px 0",
              transition: "0.3s",
            }}
          ></span>
        </RBNavbar.Toggle>

        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ gap: "15px" }}>

            {[
              { id: "home", label: "Home" },
              { id: "skills", label: "Skills" },
              { id: "experience", label: "Experiences" },
              { id: "projects", label: "Projects" },
              { id: "summary", label: "Summary" },
              { id: "education", label: "Education" },
              { id: "certifications", label: "Certifications" },
            ].map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                className="text-light nav-link-custom"
                onClick={() => setExpanded(false)}   // 👈 CLOSE NAVBAR ON CLICK
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.95rem",
                  padding: "6px 10px",
                }}
              >
                {item.label}
              </Nav.Link>
            ))}

          </Nav>
        </RBNavbar.Collapse>
      </Container>

      {/* Styles */}
      <style>{`
        .nav-link-custom {
          transition: all 0.25s ease;
        }

        .nav-link-custom:hover {
          color: #0d6efd !important;
          transform: translateY(-2px);
        }

        .nav-link-custom.active {
          color: #0d6efd !important;
          font-weight: 600;
        }

        .navbar-toggler:hover span {
          background-color: #6610f2;
          transform: scaleX(1.15);
        }
      `}</style>
    </RBNavbar>
  );
}



