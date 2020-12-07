import React, {useEffect, useState} from 'react'
import moment from 'moment'
import axios from 'axios'
import {
    Col,
    Button,
    Container,
    Media,
    Badge,
    Row
} from 'react-bootstrap'
import {MovieModal} from './index'
import {BsFillStarFill, BsArrowRight} from "react-icons/bs";

const MovieItem = ({item}) => {

    const [modalShow,
        setModalShow] = useState(false);

    const [movieData,
        setMovieData] = useState({trailers: [], detail: []});

    const base_url = "https://image.tmdb.org/t/p/w500/";

    const {
        title,
        poster_path,
        id,
        vote_average,
        release_date,
        overview
    } = item;

    const ref = React.useRef()

    useEffect(() => {
        const fetchData = () => {
            const key =  process.env.REACT_APP_API_KEY
            const getMovieTrailer = axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`)
            const getMovieDetail = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)

            axios
                .all([getMovieTrailer, getMovieDetail])
                .then(axios.spread((...allData) => {
                    const allMovieTrailer = allData[0].data
                    const allMovieDetail = allData[1].data

                    setMovieData({trailers: allMovieTrailer, detail: allMovieDetail})
                }))
        }
        fetchData()
    }, [])

    return (
        <Media as="li">
            <Row>
                <Col xs={12} sm={12} md={3}>
                    <Container>
                        <img
                            className="align-self-start mr-3"
                            src={base_url + poster_path}
                            alt={title}/>
                    </Container>
                </Col>

                <Col xs={12} sm={12} md={9}>
                    <Media.Body>
                        <Row>
                            <Col xs={12} sm={12} md={7}>
                                <h3>
                                    <span>{title}</span>

                                </h3>
                            </Col>
                            <Col xs={12} sm={12} md={5}>
                                <Badge className="rating-badge" variant="secondary">{vote_average}
                                    <BsFillStarFill/></Badge>

                            </Col>
                        </Row>
                        <p className="release-date">{moment(release_date).format('MMMM DD, YYYY')}</p>
                        {movieData.detail.genres !== undefined
                            ? movieData
                                .detail
                                .genres
                                .map(genre => {
                                    return (
                                        <Badge pill variant="secondary">
                                            {genre.name}
                                        </Badge>
                                    )
                                })
                            : null
}
                        <p>{overview}</p>
                        <Button ref={ref} onClick={() => setModalShow(true)}>
                            Watch Trailer
                            <BsArrowRight/>
                        </Button>
                    </Media.Body>
                </Col>
            </Row>

            <MovieModal
                item={item}
                trailer={movieData.trailers}
                detail={movieData.detail}
                show={modalShow}
                onHide={() => setModalShow(false)}/>
        </Media>
    )
}

export default MovieItem