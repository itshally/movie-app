import React from 'react'
import {Navbar} from 'react-bootstrap'
import moment from 'moment'
import logo from '../assets/favicon.png'
const Navs = () => {
    const today = new Date();

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                        style={{marginRight: '10px', borderRadius: '5px', backgroundColor: 'white', padding: '3.5px'}}
                    />
                    Top Movies Today
                </Navbar.Brand>
                <Navbar.Text>
                    {moment(today).format('MMMM DD YYYY')}
                </Navbar.Text>
            </Navbar>
        </React.Fragment>
    )
}

export default Navs