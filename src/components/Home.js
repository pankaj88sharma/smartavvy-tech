import React from 'react';
import '../css/Home.css';
import { MDBContainer, MDBAnimation, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import Testimonials from './Testimonials';
import Carousel from './Carousel';
import { testinomialsData } from '../data/TestimonialsData';
import { homePageData } from '../data/HomePageData';

export default class Home extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidMount() {
    document.title = "VentureSoft Technologies | Home";
  }

  render() {
    return (
      <div>
        <MDBContainer fluid className="pl-0 pr-0">
          <Carousel homePageData={homePageData} showControlButtons={false} />
        </MDBContainer>
        <MDBContainer>

        <section className="text-center pb-5 my-5">
            <MDBAnimation reveal type="" duration="1.5s">
              <h4 className="my-5">
              VentureSoft Technologies offers a comprehensive range of consulting services from custom software development to IT staffing and training.
        </h4>
            </MDBAnimation>
           </section>

          <section className="text-center pb-5 pt-2 my-5">
            <MDBAnimation reveal type="" duration="1.5s">
              <h1 className="font-weight-bold my-5">
                Our Standards
        </h1>
            </MDBAnimation>
            <MDBRow>
              <MDBCol md="4">
                <MDBAnimation reveal type="" duration="2s">
                  <MDBIcon icon="chalkboard-teacher" size="4x" className="red-text" />
                  <h4 className="font-weight-bold my-4">High Quality Processes</h4>
                  <p className="mb-md-0 mb-5 font-size-1-25rem">
                  We have developed repeatable, effective software development processes that ensure high quality of service and successful delivery to our global clients. All phases of work in our product development cycle are well documented, well reviewed to ensure we are effective and efficient in every project.
            </p>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="" duration="2s">
                  <MDBIcon icon="graduation-cap" size="4x" className="cyan-text" />
                  <h4 className="font-weight-bold my-4">Cost-effective Solutions</h4>
                  <p className="mb-md-0 mb-5 font-size-1-25rem">
                  Our global deliver model allows us to offer each client a custom-fit solution combining our onshore and offshore resources to give our clients the highest value solutions available. With three offices in the US and three offices in India we are well suited to address our client’s needs in a cost-effective manner.
            </p>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="" duration="2s">
                  <MDBIcon far icon="comments" size="4x" className="orange-text" />
                  <h4 className="font-weight-bold my-4">Confidentiality</h4>
                  <p className="mb-md-0 mb-5 font-size-1-25rem">
                  We guarantee a high degree of confidentiality and security in every project. All clients’ information remains strictly confidential. VentureSoft will never sell or disclose any client information under any unauthorized circumstances.
            </p>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </section>

          <section style={{display: "none"}} className="text-center pb-5 my-5">
            <MDBAnimation reveal type="" duration="1.5s">
              <h1 className="font-weight-bold my-5">
                Our amazing team
        </h1>
            </MDBAnimation>
            <MDBRow>
              <MDBCol md="4">
                <MDBAnimation reveal type="" duration="2s">
                  <div>
                    {this.props.showAvatar && <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />}
                  </div>
                  <h4 className="font-weight-bold my-4">Chahat</h4>
                  <h6 className="font-weight-bold grey-text mb-3 font-size-1-25rem">Bachelor of Education</h6>
                  <p className="font-size-1-1rem">
                    
            </p>
                  <div className="mb-md-0 mb-5">
                    <a className="btn-floating btn-lg mx-1 text-white" href="https://www.linkedin.com/in/chahat-sharma-excellence-classes" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in p-2 rounded linkedin-icon"> </i>
                    </a>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="" duration="2s">
                  <div>
                    {this.props.showAvatar && <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />}
                  </div>
                  <h4 className="font-weight-bold my-4">Priyanka</h4>
                  <h6 className="font-weight-bold grey-text mb-3 font-size-1-25rem">Bachelor of Technology</h6>
                  <p className="font-size-1-1rem">
                    
            </p>
                  <div className="mb-md-0 mb-5">
                    <a className="btn-floating btn-lg mx-1 text-white" href="https://www.linkedin.com/in/priyanka-b-581393191" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in p-2 rounded linkedin-icon"> </i>
                    </a>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="" duration="2s">
                  <div>
                    {this.props.showAvatar && <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />}
                  </div>
                  <h4 className="font-weight-bold my-4">Preeti</h4>
                  <h6 className="font-weight-bold grey-text mb-3 font-size-1-25rem">Bachelor of Physiotherapy</h6>
                  <p className="font-size-1-1rem">
                   
            </p>
                  <div className="mb-md-0 mb-5">
                    <a className="btn-floating btn-lg mx-1 text-white" href="https://www.linkedin.com/in/preeti-sharma-excellence-classes" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in p-2 rounded linkedin-icon"> </i>
                    </a>
                  </div>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
        <MDBContainer style={{display: "none"}} fluid className="pl-0 pr-0">
          <Testimonials testinomialsData={testinomialsData} showControlButtons={false} showBullets={true} />
        </MDBContainer>
      </div>
    );
  }
}
