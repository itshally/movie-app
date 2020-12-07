import React from 'react'
import {Navbar} from 'react-bootstrap'
import moment from 'moment'
import logo from '../assets/favicon.png'
const Navs = () => {
    const today = new Date();

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                        style={{marginRight: '5px', borderRadius: '4px'}}
                    />
                    Trending Movies
                </Navbar.Brand>
                <Navbar.Text>
                    {moment(today).format('MMMM DD YYYY')}
                </Navbar.Text>
            </Navbar>
        </React.Fragment>
    )
}

export default Navs