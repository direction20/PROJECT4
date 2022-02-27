import React from "react";
import "./style/Home.css";
import Navs from "../components/Navs";
import Footer from "../components/Footer";
import consultation from "./style/images/consultation.jpg";

import { Card, Accordion, Container } from "react-bootstrap";

function Information() {
  return (
    <>
      <Navs />
      {/* QNA */}
      <h1 className="h1 text-center mt-2">FAQ</h1>
      <Accordion className="acc" defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Genetic Disorder ?</Accordion.Header>
          <Accordion.Body className="description">
            A genetic disorder is a health problem caused by one or more
            abnormalities in the genome. It can be caused by a mutation in a
            single gene (monogenic) or multiple genes (polygenic) or by a
            chromosomal abnormality.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Do Genetic conditions tend to run in families ?
          </Accordion.Header>
          <Accordion.Body className="description">
            Yes,Genetic conditions tend to run in families. Parents pass genes
            on to their children, and some of these genes may contain the basis
            of a genetic disorder.You can inherit a gene mutation from one or
            both parents. Also A mutation can also happen during your lifetime.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            If a genetic disorder runs in my family, what are the chances that
            my children will have the condition?
          </Accordion.Header>
          <Accordion.Body className="description">
            Although the chances of inheriting a genetic condition appear
            straightforward, factors such as a person's family history and the
            results of genetic testing can sometimes modify those chances. In
            addition, some people with a disease-causing variant never develop
            any health problems or may experience only mild symptoms of the
            disorder. If a disease that runs in a family does not have a
            clear-cut inheritance pattern, predicting the likelihood that a
            person will develop the condition can be particularly difficult.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How to find if you have particular genetic disorder ?
          </Accordion.Header>
          <Accordion.Body className="description">
            Medical tests can help detect a condition, determine a diagnosis,
            plan treatment, check to see if treatment is working, or monitor the
            condition over time. A doctor may order these tests as part of a
            routine checkup, to check for certain diseases and disorders, or to
            monitor your health.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What are genes?</Accordion.Header>
          <Accordion.Body className="description">
            Your genes contain the information your body uses to control how you
            grow, develop and function. They determine most of your physical
            characteristics, including: whether you are male or female,blood
            type,eye colour,height.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            How common are genetic conditions?{" "}
          </Accordion.Header>
          <Accordion.Body className="description">
            Approximately 6 out of 10 people will be affected by a condition
            which has some genetic background. Genetic conditions can range from
            mild to very severe.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            How your genes affect your health?
          </Accordion.Header>
          <Accordion.Body className="description">
            Almost all known conditions have a genetic basis. For example:
            around 5 per cent of cancers are passed down through families, early
            onset of conditions such as Alzheimer’s disease, cancer and
            osteoporosis are often because there is a family history of the
            condition. Your environment also interacts with your genes to
            increase the risk of conditions such as diabetes, asthma and
            autoimmune disorders.Social changes, such as women having children
            later in life, are also associated with: an increased number of
            pregnancies at risk of genetic conditions and birth defects
            increased need for pregnancy screening and diagnostic tests.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Where to get help?</Accordion.Header>
          <Accordion.Body className="description">
            Talk to your doctor.Contact Genetic Services of WA for more
            information, phone 1234567890
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* QNA */}
      {/* CARDS */}
      <Container>
        <Card className="bg-dark text-dark mb-4">
          <Card.Img
            src={consultation}
            style={{ height: "20rem" }}
            alt="Consultation" fluid
          />
          <Card.ImgOverlay>
            <Card.Title className="title">Consultation for Genetic Disorder</Card.Title>
            <Card.Text>
            Genetic disorders are complex and it needs a genetic specialist to 
            help you understand the mystery before making a decision related to 
            diagnosis and management. Take a counseling session with our Sujanan 
            Genetic Experts who can guide and support you in making informed 
            decisions about your health.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
      {/* CARDS */}

      <Footer />
    </>
  );
}
export default Information;
