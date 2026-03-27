import React from "react";

export default function Footer() {
  return (
    <>
      <section className="wed-hom-footer">
        <div className="container">
          <div className="row foot-supp">
            <h2>
              <span> Free support: </span>
              +92 (8800) 68 - 8960 &nbsp;&nbsp;|
              <span> Email: </span>
              info@example.com
            </h2>
          </div>

          <div className="row wed-foot-link wed-foot-link-1">
            <div className="col-md-4">
              <h4>Get In Touch</h4>
              <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
              <p>
                Phone: <a href="tel:+917904462944"> +92 (8800) 68 - 8960 </a>
              </p>
              <p>
                Email: <a href="mailto:info@example.com"> info@example.com </a>
              </p>
            </div>

            <div className="col-md-4">
              <h4>HELP &amp; SUPPORT</h4>
              <ul>
                <li>
                  <a href="about-us.html"> About company </a>
                </li>
                <li>
                  <a href="#!"> Contact us </a>
                </li>
                <li>
                  <a href="#!"> Feedback </a>
                </li>
                <li>
                  <a href="about-us.html"> FAQs </a>
                </li>
                <li>
                  <a href="about-us.html"> Testimonials </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 fot-soc">
              <h4>SOCIAL MEDIA</h4>
              <ul>
                <li>
                  <a href="#!">
                    <img alt="" loading="lazy" src="images/social/1.png" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img alt="" loading="lazy" src="images/social/2.png" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img alt="" loading="lazy" src="images/social/3.png" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img alt="" loading="lazy" src="images/social/5.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row foot-count">
            <p>
              Company name Site - Trusted by over thousands of Boys &amp; Girls
              for successfull marriage.
              <a className="btn btn-primary btn-sm" href="sign-up.html">
                Join us today !
              </a>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="cr">
          <div className="container">
            <div className="row">
              <p>
                Copyright ©<span id="cry"> 2023&nbsp;</span>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Jainvarvadhu.com
                </a>{" "}
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


