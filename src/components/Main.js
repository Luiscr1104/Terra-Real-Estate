import React from "react";
import { Carousel, Card } from "react-bootstrap";

function Main() {
  return (
    <main>
      <section style={{ margin: "50px 20px 50px 70px" }}>
        <h1 style={{ color: "#51ae32b7" }}>Terra Real Estate</h1>
        <h3>Ventas de quintas y propiedades</h3>
        <p>Somos una empresa de bienes y raíces.</p>
        <h3 style={{ marginTop: "35px" }}>
          Propiedades en <span style={{ color: "#51ae32" }}>Oferta</span>
        </h3>
      </section>
      <section className="propiedades-en-oferta">
        <Carousel>
          <Carousel.Item>
            <div className="d-flex">
            <Card style={{ width: "18rem", maxHeight: "400px" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Propiedad 1</Card.Title>
                <Card.Text>Descripción de la propiedad 1.</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", maxHeight: "400px" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Propiedad 2</Card.Title>
                <Card.Text>Descripción de la propiedad 1.</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", maxHeight: "400px" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Propiedad 3</Card.Title>
                <Card.Text>Descripción de la propiedad 1.</Card.Text>
              </Card.Body>
            </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-flex">
            <Card style={{ width: "18rem", maxHeight: "400px" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Propiedad 4</Card.Title>
                <Card.Text>Descripción de la propiedad 1.</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", maxHeight: "400px" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Propiedad 5</Card.Title>
                <Card.Text>Descripción de la propiedad 1.</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", maxHeight: "400px" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Propiedad 6</Card.Title>
                <Card.Text>Descripción de la propiedad 1.</Card.Text>
              </Card.Body>
            </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </main>
  );
}

export default Main;
