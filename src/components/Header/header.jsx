import React from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import {Link} from 'react-router-dom'
import { ShoppingCart, User } from "phosphor-react";

const logo = require("../../assets/logo/logo.png");


export function Header() {
  return (
    <div>
      <header className="header">
        <Container>
          <Row>
            <div className="nav__wrapper">
              <div className="logo">
                <img src={logo} alt="logo" style={{height:'50px'}}/>
                <div>
                  <h1>Matchforest</h1>
                </div>
              </div>
              <div className="navigation">
                <ul className="menu">
                  <li className="nav__item">
                    <Link to='home'>Home</Link>
                  </li>
                  <li className="nav__item">
                    <Link to='shop'>Shop</Link>
                  </li>
                  <li className="nav__item">
                    <Link to='cart'>Cart</Link>
                  </li>
                </ul>
              </div>
              <div className="nav__icons" style={{padding:'5px'}}>
                <Link to='/login'>
                <User className="logoprops" size={30} />
                </Link>
                <Link  to='/cart'>
                <ShoppingCart className="logoprops" size={30}/>
                </Link>
               
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </div>
  );
}
