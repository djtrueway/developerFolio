import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function Contact() {
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">Contact Me ☎️</h1>
          <p className="subTitle contact-subtitle">Discuss a project or just want to say hi my inbox is open for all</p>
        </div>
        <div className="contact-text-div">
          <h1 className="contact-detail">+50936685393</h1>

          <h1 className="contact-detail-email">peterson@sajesunlock.com</h1>

          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
