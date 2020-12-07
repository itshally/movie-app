import React from 'react'
import {Modal, Container, ResponsiveEmbed} from 'react-bootstrap'
const MovieModal = (props) => {
    const {backdrop_path} = props.item
    const {tagline} = props.detail
    const base_url = "https://image.tmdb.org/t/p/w500/";

    return (

        <Modal {...props} size="lg" aria-labelledby="read-more" centered> 
            {/* animation={false} --> add to remove Warning: findDOMNode */}
            <Modal.Header closeButton>
                <Container
                    className="header-bg"
                    style={{
                    backgroundImage: `url(${base_url + backdrop_path})`
                }}/>

                <Container>
                    <Container className="header-contents">
                        {tagline
                            ? <h4>&ldquo; {tagline}
                                    &rdquo;</h4>
                            : null
}

                        {props.trailer.results
                            ? <React.Fragment>
                                    <ResponsiveEmbed aspectRatio="16by9">
                                        <iframe
                                            width="420"
                                            height="315"
                                            src={`https://www.youtube.com/embed/${props.trailer.results[0]
                                            ? props.trailer.results[0].key
                                            : null}?autoplay=1`}></iframe>
                                    </ResponsiveEmbed>
                                </React.Fragment>
                            : <h1>There is no trailer yet!</h1>
}
                    </Container>
                </Container>
            </Modal.Header>
        </Modal>
    )
}

export default MovieModal