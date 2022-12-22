import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBView, MDBMask } from 'mdbreact';

export default class About extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidMount() {
    document.title = "SmartAvvy Tech | About";
  }

  render() {
    return (
      <React.Fragment>
        <MDBContainer fluid className="pl-0 pr-0">
          <MDBAnimation type="" duration="2s">
            <MDBView src='https://ik.imagekit.io/excellenceclasses/about-bg_aPLgCxaZr.jpg' className="h-40vh">
              <MDBMask overlay="black-strong" className="d-flex justify-content-center text-white text-center align-items-end">
                <MDBAnimation type="zoomIn" duration="1s" delay="0.3s">
                  <div className="page-bg">
                    <p>About Us</p>
                  </div>
                </MDBAnimation>
              </MDBMask>
            </MDBView>
          </MDBAnimation>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol className="mt-5">
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="h4-responsive font-weight-500">Who We Are</p>
              </MDBAnimation>
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="font-size-1-1rem">
                SmartAvvy is a software solutions company providing project development and staff augmentation services to companies in various industries.
            </p>
              </MDBAnimation>
              <br/>
              <br/>
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="h4-responsive font-weight-500">What We Do</p>
              </MDBAnimation>
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="font-size-1-1rem">
                SmartAvvy helps organizations operate more efficiently through higher productivity and profitability by providing specialized project implementation.            </p>
              </MDBAnimation>
              <br/>
              <br/>

              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="h4-responsive font-weight-500">What You Get</p>
              </MDBAnimation>
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="font-size-1-1rem">
                When clients engage third parties it is often a guessing game on what they are getting. With SmartWorks, what you see is what you get.                </p>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}