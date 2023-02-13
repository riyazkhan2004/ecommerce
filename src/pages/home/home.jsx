import React from "react";
import { Helmet } from "../../components/Helmet/helmet";
import { Container, Row, Col } from "reactstrap";
import "./home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shop } from "../shop/shop";
import { ProductList } from "../../components/UI/productlist";
const logo = require("../../assets/products/cycle.jpeg");

export function Home() {
  const year = new Date().getFullYear();

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col>
              <div className="hero__content">
                <p className="hero__subtitle">Trending Matchboxes in {year}</p>
                <h1>CYCLE MATCHES</h1>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <motion.img src={logo} alt="logo" initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} />
              </div>
            </Col>
          </Row>
        </Container>
        <Link to="../shop">
          <motion.button
            whileTap={{ scale: 1.2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="shop__btn"
            whileHover={{ scale: 1.2 }}
          >
            SHOP NOW
          </motion.button>
        </Link>
      </section>
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='10'>
              <h2 className="section__title">
                Trending Products
              </h2>
            </Col>
            <ProductList/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
