import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Name from './components/Name.jsx';
import Price from './components/Price.jsx';
import Description from './components/Description.jsx';
import Image from './components/Image.jsx';

// You can change this to your first name or leave it empty
const firstName = "Mohamet"; // Change this to your name or set to "" for "Hello, there!"

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card style={{
              borderRadius: '25px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              border: 'none',
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 70px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
            }}>
              <Card.Body style={{ padding: '40px 30px' }}>
                <Image />
                <Name />
                <Price />
                <Description />
              </Card.Body>
            </Card>

            {/* Greeting Message */}
            <div className="text-center mt-4">
              <h2 style={{
                color: '#fff',
                fontWeight: '600',
                fontSize: '1.8rem',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                marginBottom: '20px'
              }}>
                {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
              </h2>
              
              {/* Conditional Image Display */}
              {firstName && (
                <div className="welcome-image-container">
                  <img 
                    src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Welcome"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                      border: '4px solid rgba(255,255,255,0.8)',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'rotate(360deg) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'rotate(0deg) scale(1)';
                    }}
                  />
                  <p style={{
                    color: '#fff',
                    marginTop: '15px',
                    fontSize: '1.1rem',
                    textShadow: '0 1px 3px rgba(0,0,0,0.3)'
                  }}>
                    Welcome to our store!
                  </p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;