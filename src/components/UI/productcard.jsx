import React from "react";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
const productimg = require("../../assets/products/coffee.png");

export function ProductCard() {
  return (
    <Col lg="3" md="2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="product__item"
      >
        <div className="product__image">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={productimg}
            alt="productimg"
          />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to="/shop/id" style={{ textDecoration: "solid" }}>
              Coffee Matches
            </Link>
          </h3>

          <span className="text-center">Matchbox</span>
          <div className="price">120 Rs.</div>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between">
          <motion.span
            style={{ scale: 2, marginLeft: "15vw", marginTop: -45,display: 'flex',
            alignItems: 'center',
            columnGap: '2.7rem',
            marginBottom: 0 }}
            whileTap={{ scale: 1.3 }}
          >
            <i class="ri-add-circle-fill fa-fw"></i>
          </motion.span>
        </div>
      </motion.div>
    </Col>
  );
}
