import React from 'react';
import emailjs from 'emailjs-com';
import { MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBRow, MDBCol, MDBAnimation, MDBInput, MDBBtn, MDBIcon, MDBView, MDBMask, MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      name: '',
      email: '',
      subject: '',
      message: '',
      buttonDisplay: 'Send',
      buttonDisabled: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "VentureSoft | Contact";
  }

  shouldComponentUpdate(nextProps, nextState) {

    if (this.state.name === nextState.name && this.state.email === nextState.email
      && this.state.subject === nextState.subject && this.state.message === nextState.message
      && this.state.modal1 === nextState.modal1 && this.state.modal2 === nextState.modal2
      && this.state.buttonDisplay === nextState.buttonDisplay && this.state.buttonDisabled === nextState.buttonDisabled) {
      return false
    } else {
      return true
    }
  }

  handleOnChange(e) {
    if (e.target.name === "name") {
      this.setState({
        name: e.target.value
      })
    } else if (e.target.name === "email") {
      this.setState({
        email: e.target.value
      })
    } else if (e.target.name === "subject") {
      this.setState({
        subject: e.target.value
      })
    } else if (e.target.name === "message") {
      this.setState({
        message: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name !== '' && this.state.email !== '' && this.state.subject !== '' && this.state.message !== '') {
      this.setState({
        buttonDisplay: 'Sending...',
        buttonDisabled: true
      })
      emailjs.send('excellence-gmail', 'excellence-template', this.state, 'user_yhZ19MJX7a6Jd0ci7Xp6Z')
        .then((result) => {
          this.setState({
            modal1: true,
            name: '',
            email: '',
            subject: '',
            message: '',
            buttonDisplay: 'Send',
            buttonDisabled: false
          })
        }, (error) => {
          this.setState({
            modal2: true,
            buttonDisplay: 'Send',
            buttonDisabled: false
          })
        });
    }
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <React.Fragment>
        <MDBContainer fluid className="pl-0 pr-0 mb-5">
          <MDBAnimation type="" duration="2s">
            <MDBView src='https://ik.imagekit.io/excellenceclasses/contact-bg_FuVDrbVU9.jpg' className="h-40vh">
              <MDBMask overlay="black-strong" className="d-flex justify-content-center text-white text-center align-items-end">
                <MDBAnimation type="zoomIn" duration="1s" delay="0.3s">
                  <div className="page-bg">
                    <p>Contact Us</p>
                  </div>
                </MDBAnimation>
              </MDBMask>
            </MDBView>
          </MDBAnimation>
        </MDBContainer>
        <MDBContainer className="">
          <MDBModal isOpen={this.state.modal1} toggle={this.toggle(2)} size="md">
            <MDBModalBody>
              <div className="text-center">
                Thanks for writing to us. We will get back to you shortly!
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className="btn btn-sm" color="primary" onClick={this.toggle(1)}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="md">
            <MDBModalBody>
              <div className="text-center">
                Your message was not sent. Please try again after sometime.
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className="btn btn-sm" color="primary" onClick={this.toggle(2)}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          <MDBRow>
            <MDBCol lg="4" className="mb-4">
              <MDBAnimation reveal type="slideInLeft" delay="" duration="2s">
                <form className="p-4 rounded z-depth-1 h-500px" onSubmit={this.handleSubmit} >
                  <div className="grey-text">
                    <MDBInput label="Your name" autoComplete="off" value={this.state.name} onChange={this.handleOnChange} name="name" icon="user" type="text" required />
                    <MDBInput label="Your email" autoComplete="off" value={this.state.email} onChange={this.handleOnChange} name="email" icon="envelope" type="email" required />
                    <MDBInput label="Subject" autoComplete="off" value={this.state.subject} onChange={this.handleOnChange} name="subject" icon="tag" type="text" required />
                    <MDBInput type="textarea" autoComplete="off" value={this.state.message} onChange={this.handleOnChange} name="message" rows="4" label="Your message" icon="pencil-alt" required />
                  </div>
                  <div className="text-center">
                    <MDBBtn color="primary" disabled={this.state.buttonDisabled} type="submit">
                      {this.state.buttonDisplay}
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBAnimation>
            </MDBCol>
            <MDBCol lg="8">
              <MDBAnimation reveal type="zoomIn" delay="" duration="2s">
                <div
                  id="map-container"
                  className="rounded z-depth-1-half map-container h-500px"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.91291107331!2d-79.84829049999999!3d43.504152299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6f43a6d783c3%3A0xe29d15523d79ff62!2s920%20Hasselfeldt%20Heights%2C%20Milton%2C%20ON%20L9T%200M5!5e0!3m2!1sen!2sca!4v1671716382650!5m2!1sen!2sca"
                    title="Google Maps"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="border-0"
                  />
                </div>
                <br />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}


export default Contact;