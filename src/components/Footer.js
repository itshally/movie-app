import React from 'react'
import {Container} from 'react-bootstrap'
import moment from 'moment'

const Footer = () => {
    return (
        <Container className="footer" fluid={true}>
            <p>Top Movies Today &copy; 2020-{moment(new Date()).format('YYYY')}. All Rights Reserved. Powered by&nbsp;
                <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>.</p>
        </Container>
    )
}

export default Footer
