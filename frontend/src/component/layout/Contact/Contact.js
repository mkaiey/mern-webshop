import React, { Fragment } from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <Fragment>
      <MetaData title="CONTACT -- webShop" />
      <div className="contactContainer">
        <a className="mailBtn" href="mailto:webshop088@gmail.com">
          <Button>Contact: webshop088@gmail.com</Button>
        </a>
      </div>
    </Fragment>
  );
};

export default Contact;
