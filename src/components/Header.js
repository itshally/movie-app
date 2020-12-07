import React from 'react'
import {Container} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Header = () => {

    return (
        <Container className="header">
            <h1>
                <Typewriter
                    onInit={(typewriter) => {
                    typewriter
                        .typeString('What are the trending movies today?')
                        .stop()
                        .start()
                }}/>
            </h1>
        </Container>
    )
}

export default Header
