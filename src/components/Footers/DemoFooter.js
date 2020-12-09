/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer style={{backgroundColor:"lightgray"}} className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="/"
                >
                  Back to top
                </a>
              </li>
              <li>
                <a>
                  Phone: (513-341-3762)
                </a>
              </li>
              <li>
                <a>
                  Email: Clark4a4@outlook.com
                </a>
              </li>
            </ul>
          </nav>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
