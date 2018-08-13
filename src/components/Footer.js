import React from "react";
import FooterLink from "./FooterLink";

const Footer = () => (
  <React.Fragment>
    <FooterLink filter="all">All</FooterLink>
    <FooterLink filter="active">Active</FooterLink>
    <FooterLink filter="completed">Completed</FooterLink>
  </React.Fragment>
);

export default Footer;
