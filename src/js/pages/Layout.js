import React from "react";
import { Link } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";


export default class Layout extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div class="container-fluid">
        <Header />

        <nav>
          <Link to="/"> home </Link>
          <Link to="second"> second-page </Link>
        </nav>


        {this.props.children}

        <Footer />
      </div>
    );
  }
}
