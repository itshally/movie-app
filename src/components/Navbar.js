import React from 'react'
import {Navbar} from 'react-bootstrap'
import moment from 'moment'
const Navs = () => {
    const today = new Date();

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#">Trending Movies</Navbar.Brand>
                <Navbar.Text>
                    {moment(today).format('MMMM DD YYYY')}
                </Navbar.Text>
            </Navbar>
        </React.Fragment>
    )
}

export default Navs