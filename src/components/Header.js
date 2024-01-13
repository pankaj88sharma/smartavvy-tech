import React from 'react';
import '../css/Header.css';
import '../logo/logo.png';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBHamburgerToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBAnimation } from 'mdbreact';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.hamburgerCheckbox = null;
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.logo = require('../logo/logo.png');
  }

  componentDidMount() {
    this.hamburgerCheckbox = document.getElementById("hamburger1");
  }

  toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  handleLinkClick = () => {
    this.props.updateLinkClick();
    this.hamburgerCheckbox.checked = false;
    this.setState({ collapse: false });
  }

  render() {
    const currentPath = window.location.pathname;
    const menuItems = this.props.menuLinksData.map((menu, index) =>
      <MDBAnimation delay="0.25s" key={index} type={this.hamburgerCheckbox && this.hamburgerCheckbox.checked ? '' : ''} duration={0.5 + (0.25 * index) + 's'}>
        <MDBNavItem className={currentPath === menu.path ? '' : ''}>
          <MDBNavLink style={{color: 'black'}} disabled={false} onClick={currentPath === menu.path ? null : this.handleLinkClick} to={menu.path}>{menu.display.toUpperCase()}</MDBNavLink>
        </MDBNavItem>
      </MDBAnimation>
    );

    return (
      <MDBNavbar className={!this.state.collapse ? (this.props.showHeader ? 'navbar-up' : 'navbar-down') : ''} color="white" expand="md" fixed="" transparent={true} scrolling={!this.state.collapse}>
        <MDBContainer fluid>
          <MDBAnimation type="" duration="1s">
            <MDBNavbarBrand className={currentPath === '/' ? 'pointer-events-none' : ''} onClick={currentPath === '/' ? null : this.handleLinkClick} href="/">
            <img alt='logo' style={{ width: 200, height: 70 }} src={String(this.logo)} />
            </MDBNavbarBrand>
          </MDBAnimation>
          <MDBAnimation type="" duration="1s">
            <MDBHamburgerToggler className="d-block d-md-none" color="black" id="hamburger1" onClick={this.toggleCollapse} />
          </MDBAnimation>
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav right className="header-menu font-weight-600" >
              {menuItems}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}


export default Header;