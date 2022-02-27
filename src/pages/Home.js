import React from "react";
import "./style/Home.css";
import Navs from "../components/Navs";
import Footer from "../components/Footer";

import { Container, Card, CardGroup } from "react-bootstrap";

function Home() {
  return (
    <>
      <Navs />

      <Container className="jumbcard">
        {/* JUMBOTRON */}
        <div class=" jumbotron p-5 mb-4 bg-light rounded-5">
          <div class="container-fluid py-5">
            <h1 class=" display-5 fw-bold">Breed is Stronger than Pasture</h1>
            <p class="col-md-8 fs-4">
            Like many chronic conditions, Genetic Conditions may require continual attention and lack 
            cures or treatments.
            </p>
          </div>
        </div>
        {/* JUMBOTRON */}

        {/* CARD-GROUP */}
        <CardGroup>
          <Card className="cards1" 
          style={{  height: "12rem",marginRight:"4px",borderTopRightRadius:"30px",borderBottomLeftRadius:"30px"}}>
            <Card.Body>
              {/* <Card.Title className="title">Information</Card.Title> */}
              <h1 className="title">Information</h1>
            </Card.Body>
          </Card>

          <Card className="cards2" 
          style={{  height: "12rem",marginRight:"4px",borderTopRightRadius:"20px",borderBottomLeftRadius:"30px"}}>
            <Card.Body>
              {/* <Card.Title className="title">Prediction</Card.Title> */}
              <h1 className="title">Prediction</h1>
            </Card.Body>
          </Card>

          <Card className="cards3" 
          style={{  height: "12rem",marginRight:"4px",borderTopRightRadius:"20px",borderBottomLeftRadius:"30px"}}>
            <Card.Body>
              {/* <Card.Title className="title">Consultation</Card.Title> */}
              <h1 className="title">Consultation</h1>
            </Card.Body>
          </Card>
        </CardGroup>
        {/* CARD-GROUP */}
      </Container>
      {/* IMAGE-CARD */}
      <div class="cardi jumbotron text-center p-3 mb-4 mt-5 rounded-5 text-white">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Breed is Stronger than Pasture</h1>
          <p class="para">
          Like many chronic conditions, Genetic Conditions may require continual attention and lack 
            cures or treatments. Low awareness of the importance of genetic testing 
            contributes to the increase in the incidence of hereditary disorders. 
            Many children succumb to these disorders and it is extremely important 
            that genetic testing be done during pregnancy.
          </p>
          <button class="btn btn-light btn-lg"type="button">
            <a className="abut" href="/" >Get More Information</a>
            
          </button>
        </div>
      </div>
      {/* IMAGE-CARD */}

      <Footer />
    </>
  );
}

export default Home;
