import React from 'react'
import { Nav } from 'react-bootstrap';

const Header = () => {
  return (
      <div>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Favoriti</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-1">Shopping List</Nav.Link>
            </Nav.Item>
        </Nav>
      </div>
  )
}

export default Header