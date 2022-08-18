// import React,{Component, useState} from 'react';

// import{
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Container} from 'reactstrap';

//  function AppNavbar(){
    
//     const [isOpen,setIsOpen] =  useState(false);
//     const toggle = ()=> setIsOpen(!isOpen);

//     return(
//         <>
//         <Navbar color="dark" dark expand="sm" className="mb-5">
//             <Container>
//                 <NavbarBrand href="/">ShoppingList</NavbarBrand>
//                 <NavbarToggler onClick={toggle} />
//                 <Collapse isOpen={isOpen} navbar>
//                     <Nav className="ml-auto" navbar>
//                         <NavItem>
//                             <NavLink href="">Github</NavLink>
//                         </NavItem>
//                     </Nav>
//                 </Collapse>
//             </Container>
//         </Navbar>

//         </>
//     )
//  }


// export default AppNavbar;


import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <NavbarBrand href="/">ShoppingList</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;