import React from "react";
import "./style/Home.css";
import Navs from "../components/Navs";
import Footer from "../components/Footer";

import { Container, Card, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <Navs />

      <Container className="jumbcard">
        {/* JUMBOTRON */}
        <div class=" jumbotron p-5 mb-4 bg-light rounded-5">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>
        {/* JUMBOTRON */}

        {/* CARD-GROUP */}
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <Card className="cardg">
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* CARD-GROUP */}
      </Container>

      {/* IMAGE-CARD */}
      <div class="cardi jumbotron p-3 mb-4 mt-5 rounded-5 text-white">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Custom jumbotron</h1>
          <p class="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <button class="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>
      {/* IMAGE-CARD */}

      <Footer />
    </>
  );
}

export default Home;
