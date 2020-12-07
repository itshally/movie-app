import React from 'react'
import {Container} from 'react-bootstrap'

const Footer = () => {
    return (
        <Container className="footer" fluid={true}>
            <p>&copy; 2020 Hally. All Rights Reserved. Powered by&nbsp;
                <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>.</p>
        </Container>
    )
}

export default Footer
