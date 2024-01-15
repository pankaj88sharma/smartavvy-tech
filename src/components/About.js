import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBView, MDBMask } from 'mdbreact';

export default class About extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidMount() {
    document.title = "VentureSoft Technologies | About";
  }

  render() {
    return (
      <React.Fragment>
        <MDBContainer fluid className="pl-0 pr-0">
          <MDBAnimation type="" duration="2s">
            <MDBView src='https://ik.imagekit.io/excellenceclasses/about-bg_aPLgCxaZr.jpg' className="h-40vh">
              <MDBMask overlay="black-strong" className="d-flex justify-content-center text-white text-center align-items-end">
                <MDBAnimation type="" duration="1s" delay="0.3s">
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
              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="h4-responsive font-weight-500">Who We Are</p>
              </MDBAnimation>
              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="font-size-1-1rem">
                VentureSoft Technologies is a software solutions company providing project development and staff augmentation services to companies in various industries. We are a leading IT firm dedicated to delivering innovative and tailored solutions to empower businesses in the digital era. With a commitment to excellence, we blend technology expertise with a client-centric approach to provide unparalleled services. At Venturesoft Technologies, we stand at the intersection of technology and innovation, driven by a passion to redefine the digital landscape. Our journey began with a vision to empower businesses through cutting-edge IT solutions, and today, we proudly continue that legacy.
            </p>
              </MDBAnimation>
              <br/>
              <br/>
              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="h4-responsive font-weight-500">Our Values</p>
              </MDBAnimation>
              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="font-size-1-1rem">
                <b>Excellence</b>: We are committed to delivering excellence in every project, ensuring our clients receive top-notch solutions that exceed expectations. <br/>
                <b>Innovation</b>: Embracing the spirit of innovation, we stay at the forefront of technology trends, providing our clients with solutions that propel them into the future. <br/>
                <b>Client-Centric Approach</b>: Our clients are at the heart of what we do. We prioritize understanding their unique needs and crafting solutions that drive their success. <br/>
                <b>Collaboration</b>: We believe in the power of collaboration – within our team and with our clients. Together, we achieve more.
                </p>
              </MDBAnimation>
              <br/>
              <br/>

              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="h4-responsive font-weight-500">What You Get</p>
              </MDBAnimation>
              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="font-size-1-1rem">
                <b>Proven Track Record</b>: Explore our portfolio of successful projects that showcase our expertise and commitment to excellence. <br/>
                <b>Skilled Professionals</b>: Our team consists of experienced professionals who bring a wealth of knowledge and skills to every project. <br/>
                <b>Client-Focused Approach</b>: We believe in building long-lasting partnerships by putting our clients at the center of our work. <br/>
                <b>Continuous Innovation</b>: In the ever-evolving world of technology, we stay ahead by embracing innovation and staying updated with the latest trends.
              </p>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}